/**
 * Family Member Profile JavaScript
 * Handles individual member profile display and interactions
 */

class FamilyMemberProfile {
  constructor() {
    this.core = window.FamilyTreeCore;
    this.currentMember = null;
    this.currentTree = null;
    this.init();
  }

  init() {
    this.loadMemberData();
    this.setupEventListeners();
    this.renderMemberProfile();
  }

  loadMemberData() {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('memberId');
    
    if (!memberId) {
      this.showError('No member ID provided');
      return;
    }

    this.currentMember = this.core.getMember(memberId);
    if (!this.currentMember) {
      this.showError('Member not found');
      return;
    }

    // Find which tree this member belongs to
    this.currentTree = this.core.trees.find(tree => 
      tree.members.includes(memberId)
    );
  }

  setupEventListeners() {
    // Edit member button
    document.getElementById('edit-member')?.addEventListener('click', () => {
      this.editMember();
    });

    // Add relative buttons
    document.getElementById('add-parent')?.addEventListener('click', () => {
      this.showAddRelativeModal('parent');
    });

    document.getElementById('add-spouse')?.addEventListener('click', () => {
      this.showAddRelativeModal('spouse');
    });

    document.getElementById('add-child')?.addEventListener('click', () => {
      this.showAddRelativeModal('child');
    });

    document.getElementById('add-sibling')?.addEventListener('click', () => {
      this.showAddRelativeModal('sibling');
    });

    // Add memory buttons
    document.getElementById('add-memory')?.addEventListener('click', () => {
      this.addMemory();
    });

    document.getElementById('add-first-memory')?.addEventListener('click', () => {
      this.addMemory();
    });

    // Add document buttons
    document.getElementById('add-document')?.addEventListener('click', () => {
      this.addDocument();
    });

    document.getElementById('add-first-document')?.addEventListener('click', () => {
      this.addDocument();
    });

    // Change photo button
    document.getElementById('change-photo')?.addEventListener('click', () => {
      this.changePhoto();
    });
  }

  renderMemberProfile() {
    if (!this.currentMember) return;

    this.updateBreadcrumbs();
    this.renderMemberInfo();
    this.renderFamilyRelationships();
    this.renderMemories();
    this.renderDocuments();
    this.renderTimeline();
  }

  updateBreadcrumbs() {
    if (this.currentTree) {
      document.getElementById('tree-breadcrumb').textContent = this.currentTree.name;
      document.getElementById('tree-breadcrumb').href = `family-tree-view.html?treeId=${this.currentTree.id}`;
    }
    
    document.getElementById('member-breadcrumb').textContent = this.core.getFullName(this.currentMember);
  }

  renderMemberInfo() {
    const member = this.currentMember;
    
    // Update main profile card
    document.getElementById('member-name').textContent = this.core.getFullName(member);
    document.getElementById('member-photo').src = member.profileImage || 'assets/images/family-tree/placeholders/default-avatar.png';
    
    // Update birth info
    const birthInfo = member.birthDate ? 
      `${this.core.formatDate(member.birthDate)}${member.birthPlace ? ` in ${member.birthPlace}` : ''}` : 
      'Unknown';
    document.getElementById('member-birth').textContent = `Birth: ${birthInfo}`;
    
    // Update death info if applicable
    if (member.deathDate) {
      document.getElementById('death-info').style.display = 'block';
      const deathInfo = `${this.core.formatDate(member.deathDate)}${member.deathPlace ? ` in ${member.deathPlace}` : ''}`;
      document.getElementById('member-death').textContent = `Death: ${deathInfo}`;
    }
    
    // Update location and occupation
    document.getElementById('member-location').textContent = `Location: ${member.birthPlace || 'Unknown'}`;
    document.getElementById('member-occupation').textContent = `Occupation: ${member.occupation || 'Unknown'}`;

    // Update overview tab
    this.renderOverviewTab();
  }

  renderOverviewTab() {
    const member = this.currentMember;
    
    document.getElementById('full-name').textContent = this.core.getFullName(member);
    document.getElementById('gender-info').textContent = member.gender ? 
      member.gender.charAt(0).toUpperCase() + member.gender.slice(1) : 'Unknown';
    document.getElementById('birth-date-info').textContent = member.birthDate ? 
      this.core.formatDate(member.birthDate) : 'Unknown';
    
    if (member.deathDate) {
      document.getElementById('death-date-item').style.display = 'block';
      document.getElementById('death-date-info').textContent = this.core.formatDate(member.deathDate);
    }
    
    document.getElementById('birth-place-info').textContent = member.birthPlace || 'Unknown';
    document.getElementById('occupation-info').textContent = member.occupation || 'Unknown';
    
    // Update notes
    const notesContent = document.getElementById('member-notes');
    if (member.notes) {
      notesContent.innerHTML = `<p>${member.notes}</p>`;
    } else {
      notesContent.innerHTML = '<p class="text-muted">No notes available</p>';
    }
  }

  renderFamilyRelationships() {
    this.renderFamilyGroup('parents', this.currentMember.parents);
    this.renderFamilyGroup('spouses', this.currentMember.spouses);
    this.renderFamilyGroup('children', this.currentMember.children);
    this.renderFamilyGroup('siblings', this.currentMember.siblings);
  }

  renderFamilyGroup(relationshipType, memberIds) {
    const grid = document.getElementById(`${relationshipType}-grid`);
    if (!grid) return;

    if (memberIds.length === 0) {
      grid.innerHTML = `
        <div class="no-family-message">
          <p class="text-muted">No ${relationshipType} added yet</p>
          <button class="btn btn-sm btn-outline-primary" id="add-${relationshipType}">
            <i class="fas fa-plus me-2"></i>Add ${relationshipType.charAt(0).toUpperCase() + relationshipType.slice(1)}
          </button>
        </div>
      `;
      return;
    }

    const members = memberIds.map(id => this.core.getMember(id)).filter(member => member);
    
    grid.innerHTML = members.map(member => this.createFamilyMemberCard(member)).join('');
  }

  createFamilyMemberCard(member) {
    const age = this.core.calculateAge(member.birthDate, member.deathDate);
    
    return `
      <div class="family-member-card" data-member-id="${member.id}">
        <img src="${member.profileImage || 'assets/images/family-tree/placeholders/default-avatar.png'}" 
             alt="${this.core.getFullName(member)}">
        <h6>${this.core.getFullName(member)}</h6>
        <p>${age}</p>
        <div class="member-actions">
          <button class="btn btn-sm btn-outline-primary" onclick="memberProfile.viewMember('${member.id}')">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn btn-sm btn-outline-secondary" onclick="memberProfile.editMember('${member.id}')">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    `;
  }

  renderMemories() {
    const memoriesGrid = document.getElementById('memories-grid');
    if (!memoriesGrid) return;

    const memories = this.currentMember.memories || [];
    
    if (memories.length === 0) {
      memoriesGrid.innerHTML = `
        <div class="no-memories-message">
          <i class="fas fa-heart fa-3x text-muted mb-3"></i>
          <p class="text-muted">No memories added yet</p>
          <button class="btn btn-primary" id="add-first-memory">
            <i class="fas fa-plus me-2"></i>Add First Memory
          </button>
        </div>
      `;
      return;
    }

    memoriesGrid.innerHTML = memories.map(memory => this.createMemoryCard(memory)).join('');
  }

  createMemoryCard(memory) {
    return `
      <div class="memory-card">
        <div class="memory-image">
          <img src="${memory.image || 'assets/images/family-tree/placeholders/memory-placeholder.jpg'}" 
               alt="Memory" class="img-fluid">
        </div>
        <div class="memory-content">
          <h6>${memory.title}</h6>
          <p class="text-muted">${memory.date}</p>
          <p>${memory.description}</p>
          <div class="memory-actions">
            <button class="btn btn-sm btn-outline-primary" onclick="memberProfile.viewMemory('${memory.id}')">
              <i class="fas fa-eye me-1"></i>View
            </button>
            <button class="btn btn-sm btn-outline-secondary" onclick="memberProfile.editMemory('${memory.id}')">
              <i class="fas fa-edit me-1"></i>Edit
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderDocuments() {
    const documentsGrid = document.getElementById('documents-grid');
    if (!documentsGrid) return;

    const documents = this.currentMember.documents || [];
    
    if (documents.length === 0) {
      documentsGrid.innerHTML = `
        <div class="no-documents-message">
          <i class="fas fa-file-alt fa-3x text-muted mb-3"></i>
          <p class="text-muted">No documents uploaded yet</p>
          <button class="btn btn-primary" id="add-first-document">
            <i class="fas fa-plus me-2"></i>Upload First Document
          </button>
        </div>
      `;
      return;
    }

    documentsGrid.innerHTML = documents.map(doc => this.createDocumentCard(doc)).join('');
  }

  createDocumentCard(document) {
    const fileIcon = this.getFileIcon(document.type);
    
    return `
      <div class="document-card">
        <div class="document-icon">
          <i class="${fileIcon} fa-2x"></i>
        </div>
        <div class="document-content">
          <h6>${document.name}</h6>
          <p class="text-muted">${document.type} • ${document.size}</p>
          <p class="small">${document.description || 'No description'}</p>
          <div class="document-actions">
            <button class="btn btn-sm btn-outline-primary" onclick="memberProfile.downloadDocument('${document.id}')">
              <i class="fas fa-download me-1"></i>Download
            </button>
            <button class="btn btn-sm btn-outline-secondary" onclick="memberProfile.viewDocument('${document.id}')">
              <i class="fas fa-eye me-1"></i>View
            </button>
          </div>
        </div>
      </div>
    `;
  }

  getFileIcon(fileType) {
    switch (fileType.toLowerCase()) {
      case 'pdf': return 'fas fa-file-pdf';
      case 'image': return 'fas fa-file-image';
      case 'word': return 'fas fa-file-word';
      case 'excel': return 'fas fa-file-excel';
      default: return 'fas fa-file';
    }
  }

  renderTimeline() {
    const timelineContainer = document.getElementById('life-timeline');
    if (!timelineContainer) return;

    const events = this.buildLifeTimeline();
    
    if (events.length === 0) {
      timelineContainer.innerHTML = `
        <div class="no-timeline-message">
          <i class="fas fa-history fa-3x text-muted mb-3"></i>
          <p class="text-muted">No timeline events available</p>
        </div>
      `;
      return;
    }

    timelineContainer.innerHTML = events.map(event => this.createTimelineEvent(event)).join('');
  }

  buildLifeTimeline() {
    const events = [];
    const member = this.currentMember;

    if (member.birthDate) {
      events.push({
        date: member.birthDate,
        type: 'birth',
        title: 'Born',
        description: `Born in ${member.birthPlace || 'Unknown location'}`,
        icon: 'fas fa-baby'
      });
    }

    if (member.deathDate) {
      events.push({
        date: member.deathDate,
        type: 'death',
        title: 'Passed Away',
        description: `Passed away in ${member.deathPlace || 'Unknown location'}`,
        icon: 'fas fa-cross'
      });
    }

    // Add marriage events (if spouses exist)
    member.spouses.forEach(spouseId => {
      const spouse = this.core.getMember(spouseId);
      if (spouse) {
        events.push({
          date: 'Unknown', // Would need marriage date in real implementation
          type: 'marriage',
          title: 'Married',
          description: `Married to ${this.core.getFullName(spouse)}`,
          icon: 'fas fa-heart'
        });
      }
    });

    // Sort events by date
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  createTimelineEvent(event) {
    return `
      <div class="timeline-event">
        <div class="timeline-icon">
          <i class="${event.icon}"></i>
        </div>
        <div class="timeline-content">
          <h6>${event.title}</h6>
          <p class="timeline-date">${this.core.formatDate(event.date)}</p>
          <p class="timeline-description">${event.description}</p>
        </div>
      </div>
    `;
  }

  // Event Handlers
  editMember() {
    window.location.href = `family-member-edit.html?memberId=${this.currentMember.id}`;
  }

  viewMember(memberId) {
    window.location.href = `family-member-profile.html?memberId=${memberId}`;
  }

  editMember(memberId) {
    window.location.href = `family-member-edit.html?memberId=${memberId}`;
  }

  showAddRelativeModal(relationshipType) {
    // Implementation for adding relatives
    console.log(`Adding ${relationshipType} to ${this.currentMember.id}`);
  }

  addMemory() {
    // Implementation for adding memories
    console.log('Adding memory to', this.currentMember.id);
  }

  addDocument() {
    // Implementation for adding documents
    console.log('Adding document to', this.currentMember.id);
  }

  changePhoto() {
    // Implementation for changing photo
    console.log('Changing photo for', this.currentMember.id);
  }

  viewMemory(memoryId) {
    // Implementation for viewing memory
    console.log('Viewing memory', memoryId);
  }

  editMemory(memoryId) {
    // Implementation for editing memory
    console.log('Editing memory', memoryId);
  }

  downloadDocument(documentId) {
    // Implementation for downloading document
    console.log('Downloading document', documentId);
  }

  viewDocument(documentId) {
    // Implementation for viewing document
    console.log('Viewing document', documentId);
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
  window.memberProfile = new FamilyMemberProfile();
});


