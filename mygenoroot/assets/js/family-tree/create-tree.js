/**
 * Create Family Tree JavaScript
 * Handles the family tree creation form
 */

class CreateFamilyTree {
  constructor() {
    this.core = window.FamilyTreeCore;
    if (!this.core) {
      console.error('FamilyTreeCore not found. Please ensure core.js is loaded.');
      this.showError('Family Tree system not initialized. Please refresh the page.');
      return;
    }
    this.init();
  }

  init() {
    this.setupFormValidation();
    this.setupEventListeners();
    this.setupFileUploads();
  }

  setupFormValidation() {
    const form = document.getElementById('create-tree-form');
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
  }

  setupEventListeners() {
    const form = document.getElementById('create-tree-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Cancel button
    const cancelBtn = document.querySelector('a[href="family-tree.html"]');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', (e) => {
        if (this.hasUnsavedChanges()) {
          e.preventDefault();
          this.showUnsavedChangesDialog();
        }
      });
    }

    // Form change detection
    const formInputs = form.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
      input.addEventListener('input', () => {
        this.markFormAsChanged();
      });
    });
  }

  setupFileUploads() {
    const gedcomFile = document.getElementById('gedcom-file');
    const csvFile = document.getElementById('csv-file');
    const profileImage = document.getElementById('profile-image');

    if (gedcomFile) {
      gedcomFile.addEventListener('change', (e) => {
        this.handleFileUpload(e.target, 'gedcom');
      });
    }

    if (csvFile) {
      csvFile.addEventListener('change', (e) => {
        this.handleFileUpload(e.target, 'csv');
      });
    }

    if (profileImage) {
      profileImage.addEventListener('change', (e) => {
        this.handleImageUpload(e.target);
      });
    }
  }

  async handleFormSubmit() {
    if (!this.validateForm()) {
      this.showFormErrors();
      return;
    }

    this.showLoadingState();

    try {
      const formData = await this.collectFormData();
      const tree = this.core.createTree(formData);
      
      // Handle file uploads if any
      this.processFileUploads(tree.id);

      // Show success message
      this.showSuccessMessage(tree);
      
      // Redirect to tree view after a delay
      setTimeout(() => {
        window.location.href = `family-tree-view.html?treeId=${tree.id}`;
      }, 2000);

    } catch (error) {
      console.error('Error creating family tree:', error);
      this.showErrorMessage('Failed to create family tree. Please try again.');
    } finally {
      this.hideLoadingState();
    }
  }

  async collectFormData() {
    const form = document.getElementById('create-tree-form');
    const formData = new FormData(form);
    
    const data = {
      treeName: formData.get('treeName'),
      description: formData.get('description'),
      privacy: formData.get('privacy'),
      firstName: formData.get('firstName'),
      middleName: formData.get('middleName'),
      lastName: formData.get('lastName'),
      birthDate: formData.get('birthDate'),
      gender: formData.get('gender'),
      birthPlace: formData.get('birthPlace'),
      occupation: formData.get('occupation'),
      notes: formData.get('notes')
    };

    // Handle profile image
    const profileImage = document.getElementById('profile-image');
    if (profileImage.files[0]) {
      data.profileImage = await this.convertImageToBase64(profileImage.files[0]);
    }

    return data;
  }

  convertImageToBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  }

  validateForm() {
    const form = document.getElementById('create-tree-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    // Additional validation
    if (!this.validateTreeName()) {
      isValid = false;
    }

    if (!this.validateRootPerson()) {
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
      case 'treeName':
        if (value && value.length < 3) {
          this.showFieldError(field, 'Tree name must be at least 3 characters long');
          return false;
        }
        break;
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
    }

    this.clearFieldError(field);
    return true;
  }

  validateTreeName() {
    const treeName = document.getElementById('tree-name').value.trim();
    
    if (!treeName) {
      this.showFieldError(document.getElementById('tree-name'), 'Tree name is required');
      return false;
    }

    // Check for duplicate tree names
    const existingTrees = this.core.trees;
    const duplicateTree = existingTrees.find(tree => 
      tree.name.toLowerCase() === treeName.toLowerCase()
    );

    if (duplicateTree) {
      this.showFieldError(document.getElementById('tree-name'), 'A tree with this name already exists');
      return false;
    }

    return true;
  }

  validateRootPerson() {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();

    if (!firstName || !lastName) {
      this.showFieldError(document.getElementById('first-name'), 'Root person name is required');
      this.showFieldError(document.getElementById('last-name'), 'Root person name is required');
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

  handleImageUpload(input) {
    const file = input.files[0];
    if (!file) return;

    // Validate file
    if (!this.validateImageFile(file)) {
      input.value = '';
      return;
    }

    // Show preview
    this.showImagePreview(file);
  }

  validateImageFile(file) {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    
    if (file.size > maxSize) {
      this.showErrorMessage('Image size must be less than 5MB');
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      this.showErrorMessage('Please upload a valid image file (JPG, PNG, GIF)');
      return false;
    }

    return true;
  }

  showImagePreview(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const previewDiv = document.getElementById('image-preview');
      const previewImg = document.getElementById('preview-img');
      
      previewImg.src = e.target.result;
      previewDiv.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }

  validateFile(file, type) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    if (file.size > maxSize) {
      this.showErrorMessage('File size must be less than 10MB');
      return false;
    }

    const allowedTypes = {
      gedcom: ['.ged'],
      csv: ['.csv', '.xlsx', '.xls']
    };

    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedTypes[type].includes(fileExtension)) {
      this.showErrorMessage(`Invalid file type. Please upload a ${type.toUpperCase()} file.`);
      return false;
    }

    return true;
  }

  showFileInfo(input, file) {
    const container = input.closest('.import-card');
    const infoDiv = container.querySelector('.file-info') || document.createElement('div');
    infoDiv.className = 'file-info mt-2';
    infoDiv.innerHTML = `
      <div class="alert alert-info">
        <i class="fas fa-file me-2"></i>
        <strong>${file.name}</strong> (${this.formatFileSize(file.size)})
        <button type="button" class="btn btn-sm btn-outline-danger ms-2" onclick="this.removeFile('${input.id}')">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    
    if (!container.querySelector('.file-info')) {
      container.appendChild(infoDiv);
    }
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  processFileUploads(treeId) {
    const gedcomFile = document.getElementById('gedcom-file');
    const csvFile = document.getElementById('csv-file');

    if (gedcomFile.files[0]) {
      this.processGedcomFile(gedcomFile.files[0], treeId);
    }

    if (csvFile.files[0]) {
      this.processCsvFile(csvFile.files[0], treeId);
    }
  }

  processGedcomFile(file, treeId) {
    // Placeholder for GEDCOM processing
    console.log('Processing GEDCOM file:', file.name);
    // In a real implementation, you would parse the GEDCOM file
    // and import the family data
  }

  processCsvFile(file, treeId) {
    // Placeholder for CSV processing
    console.log('Processing CSV file:', file.name);
    // In a real implementation, you would parse the CSV file
    // and import the family data
  }

  showLoadingState() {
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Creating...';
    }
  }

  hideLoadingState() {
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-plus-circle me-2"></i>Create Family Tree';
    }
  }

  showSuccessMessage(tree) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.innerHTML = `
      <i class="fas fa-check-circle me-2"></i>
      <strong>Success!</strong> Family tree "${tree.name}" has been created successfully.
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    const form = document.getElementById('create-tree-form');
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

    const form = document.getElementById('create-tree-form');
    form.parentNode.insertBefore(alertDiv, form);
  }

  hasUnsavedChanges() {
    const form = document.getElementById('create-tree-form');
    const inputs = form.querySelectorAll('input, textarea, select');
    
    return Array.from(inputs).some(input => {
      if (input.type === 'file') return input.files.length > 0;
      return input.value.trim() !== '';
    });
  }

  markFormAsChanged() {
    this.formChanged = true;
  }

  showUnsavedChangesDialog() {
    if (confirm('You have unsaved changes. Are you sure you want to leave this page?')) {
      window.location.href = 'family-tree.html';
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.createTree = new CreateFamilyTree();
});
