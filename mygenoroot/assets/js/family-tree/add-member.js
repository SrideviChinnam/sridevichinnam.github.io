/**
 * Add Family Member JavaScript
 * Handles adding new family members to existing trees
 */

class AddFamilyMember {
  constructor() {
    this.core = window.FamilyTreeCore;
    this.currentTree = null;
    this.currentMember = null;
    this.init();
  }

  init() {
    this.loadTreeData();
    this.setupEventListeners();
    this.populateFamilyMembers();
    this.setupFormValidation();
  }

  loadTreeData() {
    const urlParams = new URLSearchParams(window.location.search);
    const treeId = urlParams.get('treeId');
    const memberId = urlParams.get('memberId');
    
    if (!treeId) {
      this.showError('No tree ID provided');
      return;
    }

    this.currentTree = this.core.getTree(treeId);
    if (!this.currentTree) {
      this.showError('Tree not found');
      return;
    }

    if (memberId) {
      this.currentMember = this.core.getMember(memberId);
      if (!this.currentMember) {
        this.showError('Member not found');
        return;
      }
    }

    this.updateBreadcrumbs();
  }

  updateBreadcrumbs() {
    if (this.currentTree) {
      document.getElementById('tree-breadcrumb').textContent = this.currentTree.name;
      document.getElementById('tree-breadcrumb').href = `family-tree-view.html?treeId=${this.currentTree.id}`;
    }
  }

  populateFamilyMembers() {
    const relatedToSelect = document.getElementById('related-to');
    if (!relatedToSelect) return;

    const members = this.core.getTreeMembers(this.currentTree.id);
    
    relatedToSelect.innerHTML = '<option value="">Select family member</option>';
    
    members.forEach(member => {
      const option = document.createElement('option');
      option.value = member.id;
      option.textContent = this.core.getFullName(member);
      
      // Pre-select current member if available
      if (this.currentMember && member.id === this.currentMember.id) {
        option.selected = true;
      }
      
      relatedToSelect.appendChild(option);
    });
  }

  setupEventListeners() {
    const form = document.getElementById('add-member-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Photo upload
    const photoUpload = document.getElementById('photo-upload');
    if (photoUpload) {
      photoUpload.addEventListener('change', (e) => {
        this.handlePhotoUpload(e.target);
      });
    }

    // Remove photo
    const removePhoto = document.getElementById('remove-photo');
    if (removePhoto) {
      removePhoto.addEventListener('click', () => {
        this.removePhoto();
      });
    }

    // Cancel button
    const cancelLink = document.getElementById('cancel-link');
    if (cancelLink) {
      cancelLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleCancel();
      });
    }

    // Relationship change
    const relationshipSelect = document.getElementById('relationship-to');
    if (relationshipSelect) {
      relationshipSelect.addEventListener('change', () => {
        this.updateRelationshipHelp();
      });
    }
  }

  setupFormValidation() {
    const form = document.getElementById('add-member-form');
    if (!form) return;

    // Real-time validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      field.addEventListener('blur', () => {
        this.validateField(field);
      });
      
      field.addEventListener('input', () => {
        this.clearFieldError(field);
      });
    });

    // Date validation
    const birthDate = document.getElementById('birth-date');
    const deathDate = document.getElementById('death-date');
    
    if (birthDate) {
      birthDate.addEventListener('change', () => {
        this.validateDateRange();
      });
    }
    
    if (deathDate) {
      deathDate.addEventListener('change', () => {
        this.validateDateRange();
      });
    }
  }

  handleFormSubmit() {
    if (!this.validateForm()) {
      this.showFormErrors();
      return;
    }

    this.showLoadingState();

    try {
      const formData = this.collectFormData();
      const newMember = this.core.createMember(formData);
      
      // Add to current tree
      this.core.saveMemberToTree(this.currentTree.id, newMember);
      this.core.addMemberToTree(this.currentTree.id, newMember);

      // Add relationship if specified
      if (formData.relatedTo && formData.relationshipTo) {
        this.core.addRelationship(formData.relatedTo, newMember.id, formData.relationshipTo);
      }

      // Show success message
      this.showSuccessMessage(newMember);
      
      // Redirect to tree view after a delay
      setTimeout(() => {
        window.location.href = `family-tree-view.html?treeId=${this.currentTree.id}`;
      }, 2000);

    } catch (error) {
      console.error('Error adding family member:', error);
      this.showErrorMessage('Failed to add family member. Please try again.');
    } finally {
      this.hideLoadingState();
    }
  }

  collectFormData() {
    const form = document.getElementById('add-member-form');
    const formData = new FormData(form);
    
    return {
      firstName: formData.get('firstName'),
      middleName: formData.get('middleName'),
      lastName: formData.get('lastName'),
      birthDate: formData.get('birthDate'),
      deathDate: formData.get('deathDate'),
      gender: formData.get('gender'),
      birthPlace: formData.get('birthPlace'),
      deathPlace: formData.get('deathPlace'),
      occupation: formData.get('occupation'),
      notes: formData.get('notes'),
      profileImage: this.getPhotoData(),
      relatedTo: formData.get('relatedTo'),
      relationshipTo: formData.get('relationshipTo')
    };
  }

  validateForm() {
    const form = document.getElementById('add-member-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    // Additional validation
    if (!this.validateName()) {
      isValid = false;
    }

    if (!this.validateDateRange()) {
      isValid = false;
    }

    if (!this.validateRelationship()) {
      isValid = false;
    }

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    
    if (field.hasAttribute('required') && !value) {
      this.showFieldError(field, `${this.getFieldLabel(field)} is required`);
      return false;
    }

    // Specific field validations
    switch (fieldName) {
      case 'firstName':
      case 'lastName':
        if (value && !/^[a-zA-Z\s]+$/.test(value)) {
          this.showFieldError(field, 'Name can only contain letters and spaces');
          return false;
        }
        break;
      case 'birthDate':
        if (value && new Date(value) > new Date()) {
          this.showFieldError(field, 'Birth date cannot be in the future');
          return false;
        }
        break;
      case 'deathDate':
        if (value && new Date(value) > new Date()) {
          this.showFieldError(field, 'Death date cannot be in the future');
          return false;
        }
        break;
    }

    this.clearFieldError(field);
    return true;
  }

  validateName() {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    
    if (!firstName || !lastName) {
      this.showFieldError(document.getElementById('first-name'), 'First name is required');
      this.showFieldError(document.getElementById('last-name'), 'Last name is required');
      return false;
    }

    return true;
  }

  validateDateRange() {
    const birthDate = document.getElementById('birth-date').value;
    const deathDate = document.getElementById('death-date').value;
    
    if (birthDate && deathDate) {
      const birth = new Date(birthDate);
      const death = new Date(deathDate);
      
      if (death <= birth) {
        this.showFieldError(document.getElementById('death-date'), 'Death date must be after birth date');
        return false;
      }
    }

    return true;
  }

  validateRelationship() {
    const relationshipTo = document.getElementById('relationship-to').value;
    const relatedTo = document.getElementById('related-to').value;
    
    if (relationshipTo && !relatedTo) {
      this.showFieldError(document.getElementById('related-to'), 'Please select a family member');
      return false;
    }

    return true;
  }

  showFieldError(field, message) {
    this.clearFieldError(field);
    
    field.classList.add('is-invalid');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
  }

  clearFieldError(field) {
    field.classList.remove('is-invalid');
    
    const errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  getFieldLabel(field) {
    const label = field.parentNode.querySelector('label');
    return label ? label.textContent.replace('*', '').trim() : field.name;
  }

  showFormErrors() {
    const firstError = document.querySelector('.is-invalid');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError.focus();
    }
  }

  handlePhotoUpload(input) {
    const file = input.files[0];
    if (!file) return;

    // Validate file
    if (!this.validatePhoto(file)) {
      input.value = '';
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = document.getElementById('photo-preview');
      if (preview) {
        preview.src = e.target.result;
      }
      
      // Show remove button
      const removeBtn = document.getElementById('remove-photo');
      if (removeBtn) {
        removeBtn.style.display = 'inline-block';
      }
    };
    reader.readAsDataURL(file);
  }

  validatePhoto(file) {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    
    if (file.size > maxSize) {
      this.showErrorMessage('Photo size must be less than 5MB');
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      this.showErrorMessage('Please upload a valid image file (JPG, PNG, GIF)');
      return false;
    }

    return true;
  }

  removePhoto() {
    const preview = document.getElementById('photo-preview');
    const upload = document.getElementById('photo-upload');
    const removeBtn = document.getElementById('remove-photo');
    
    if (preview) {
      preview.src = 'assets/images/family-tree/placeholders/default-avatar.png';
    }
    
    if (upload) {
      upload.value = '';
    }
    
    if (removeBtn) {
      removeBtn.style.display = 'none';
    }
  }

  getPhotoData() {
    const upload = document.getElementById('photo-upload');
    if (upload.files[0]) {
      // In a real implementation, you would upload the file and get a URL
      // For now, we'll just return the file name
      return upload.files[0].name;
    }
    return '';
  }

  updateRelationshipHelp() {
    const relationshipType = document.getElementById('relationship-to').value;
    const helpText = this.getRelationshipHelpText(relationshipType);
    
    // You could show help text here if needed
    console.log('Relationship help:', helpText);
  }

  getRelationshipHelpText(relationshipType) {
    const helpTexts = {
      'parent': 'This person will be added as a parent of the selected family member.',
      'child': 'This person will be added as a child of the selected family member.',
      'spouse': 'This person will be added as a spouse of the selected family member.',
      'sibling': 'This person will be added as a sibling of the selected family member.',
      'grandparent': 'This person will be added as a grandparent of the selected family member.',
      'grandchild': 'This person will be added as a grandchild of the selected family member.',
      'uncle': 'This person will be added as an uncle/aunt of the selected family member.',
      'nephew': 'This person will be added as a nephew/niece of the selected family member.',
      'cousin': 'This person will be added as a cousin of the selected family member.',
      'other': 'This person will be added with a custom relationship to the selected family member.'
    };
    
    return helpTexts[relationshipType] || '';
  }

  handleCancel() {
    if (this.hasUnsavedChanges()) {
      if (confirm('You have unsaved changes. Are you sure you want to leave this page?')) {
        this.goBack();
      }
    } else {
      this.goBack();
    }
  }

  goBack() {
    if (this.currentTree) {
      window.location.href = `family-tree-view.html?treeId=${this.currentTree.id}`;
    } else {
      window.location.href = 'family-tree.html';
    }
  }

  hasUnsavedChanges() {
    const form = document.getElementById('add-member-form');
    const inputs = form.querySelectorAll('input, textarea, select');
    
    return Array.from(inputs).some(input => {
      if (input.type === 'file') return input.files.length > 0;
      return input.value.trim() !== '';
    });
  }

  showLoadingState() {
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Adding...';
    }
  }

  hideLoadingState() {
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-plus-circle me-2"></i>Add Family Member';
    }
  }

  showSuccessMessage(member) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.innerHTML = `
      <i class="fas fa-check-circle me-2"></i>
      <strong>Success!</strong> Family member "${this.core.getFullName(member)}" has been added successfully.
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    const form = document.getElementById('add-member-form');
    form.parentNode.insertBefore(alertDiv, form);
  }

  showErrorMessage(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger alert-dismissible fade show';
    alertDiv.innerHTML = `
      <i class="fas fa-exclamation-circle me-2"></i>
      <strong>Error!</strong> ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    const form = document.getElementById('add-member-form');
    form.parentNode.insertBefore(alertDiv, form);
  }

  showError(message) {
    const container = document.querySelector('.container');
    if (container) {
      container.innerHTML = `
        <div class="error-state text-center">
          <i class="fas fa-exclamation-triangle fa-4x text-danger mb-3"></i>
          <h4>Error</h4>
          <p class="text-muted">${message}</p>
          <a href="family-tree.html" class="btn btn-primary">
            <i class="fas fa-arrow-left me-2"></i>Back to Dashboard
          </a>
        </div>
      `;
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.addMember = new AddFamilyMember();
});

