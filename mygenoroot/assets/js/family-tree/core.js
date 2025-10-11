/**
 * Family Tree Core JavaScript
 * Core functionality for family tree management
 */

class FamilyTreeCore {
  constructor() {
    this.trees = [];
    this.currentTree = null;
    this.currentMember = null;
    this.init();
  }

  init() {
    this.loadData();
    this.setupEventListeners();
    this.initializePage();
  }

  // Data Management
  loadData() {
    const savedTrees = localStorage.getItem('familyTrees');
    if (savedTrees) {
      this.trees = JSON.parse(savedTrees);
    }
  }

  saveData() {
    localStorage.setItem('familyTrees', JSON.stringify(this.trees));
  }

  // Tree Management
  createTree(treeData) {
    const tree = {
      id: this.generateId(),
      name: treeData.treeName,
      description: treeData.description || '',
      privacy: treeData.privacy || 'private',
      rootPerson: null,
      members: [],
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };

    // Create root person if provided
    let rootPerson = null;
    if (treeData.firstName && treeData.lastName) {
      rootPerson = this.createMember({
        firstName: treeData.firstName,
        middleName: treeData.middleName || '',
        lastName: treeData.lastName,
        birthDate: treeData.birthDate || '',
        gender: treeData.gender || '',
        birthPlace: treeData.birthPlace || '',
        occupation: treeData.occupation || '',
        notes: treeData.notes || ''
      });
      
      tree.rootPerson = rootPerson.id;
      tree.members.push(rootPerson.id);
    }

    this.trees.push(tree);
    this.saveData();
    
    // Save the root person to the tree AFTER saving the tree data
    if (rootPerson) {
      this.saveMemberToTree(tree.id, rootPerson);
    }
    return tree;
  }

  getTree(treeId) {
    return this.trees.find(tree => tree.id === treeId);
  }

  updateTree(treeId, updates) {
    const tree = this.getTree(treeId);
    if (tree) {
      Object.assign(tree, updates);
      tree.lastModified = new Date().toISOString();
      this.saveData();
    }
  }

  deleteTree(treeId) {
    this.trees = this.trees.filter(tree => tree.id !== treeId);
    this.saveData();
  }

  // Member Management
  createMember(memberData) {
    const member = {
      id: this.generateId(),
      firstName: memberData.firstName || '',
      middleName: memberData.middleName || '',
      lastName: memberData.lastName || '',
      birthDate: memberData.birthDate || '',
      deathDate: memberData.deathDate || '',
      gender: memberData.gender || '',
      birthPlace: memberData.birthPlace || '',
      deathPlace: memberData.deathPlace || '',
      occupation: memberData.occupation || '',
      notes: memberData.notes || '',
      profileImage: memberData.profileImage || '',
      parents: memberData.parents || [],
      children: memberData.children || [],
      spouses: memberData.spouses || [],
      siblings: memberData.siblings || [],
      memories: memberData.memories || [],
      documents: memberData.documents || [],
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };

    return member;
  }

  addMemberToTree(treeId, member) {
    const tree = this.getTree(treeId);
    if (tree) {
      tree.members.push(member.id);
      tree.lastModified = new Date().toISOString();
      this.saveData();
    }
  }

  getMember(memberId) {
    for (const tree of this.trees) {
      const member = this.getAllMembers().find(m => m.id === memberId);
      if (member) return member;
    }
    return null;
  }

  getAllMembers() {
    const allMembers = [];
    for (const tree of this.trees) {
      for (const memberId of tree.members) {
        const member = this.getMemberFromTree(tree.id, memberId);
        if (member) allMembers.push(member);
      }
    }
    return allMembers;
  }

  getMemberFromTree(treeId, memberId) {
    const tree = this.getTree(treeId);
    if (!tree) return null;
    
    const savedMembers = localStorage.getItem(`tree_${treeId}_members`);
    if (savedMembers) {
      const members = JSON.parse(savedMembers);
      return members.find(m => m.id === memberId);
    }
    return null;
  }

  saveMemberToTree(treeId, member) {
    const tree = this.getTree(treeId);
    if (!tree) return;

    const savedMembers = localStorage.getItem(`tree_${treeId}_members`);
    let members = savedMembers ? JSON.parse(savedMembers) : [];
    
    const existingIndex = members.findIndex(m => m.id === member.id);
    if (existingIndex >= 0) {
      members[existingIndex] = member;
    } else {
      members.push(member);
    }
    
    localStorage.setItem(`tree_${treeId}_members`, JSON.stringify(members));
    tree.lastModified = new Date().toISOString();
    this.saveData();
  }

  updateMember(memberId, updates) {
    for (const tree of this.trees) {
      const member = this.getMemberFromTree(tree.id, memberId);
      if (member) {
        Object.assign(member, updates);
        member.lastModified = new Date().toISOString();
        this.saveMemberToTree(tree.id, member);
        break;
      }
    }
  }

  deleteMember(treeId, memberId) {
    const tree = this.getTree(treeId);
    if (!tree) return;

    const savedMembers = localStorage.getItem(`tree_${treeId}_members`);
    if (savedMembers) {
      let members = JSON.parse(savedMembers);
      members = members.filter(m => m.id !== memberId);
      localStorage.setItem(`tree_${treeId}_members`, JSON.stringify(members));
    }

    tree.members = tree.members.filter(id => id !== memberId);
    tree.lastModified = new Date().toISOString();
    this.saveData();
  }

  // Relationship Management
  addRelationship(memberId1, memberId2, relationshipType) {
    const member1 = this.getMember(memberId1);
    const member2 = this.getMember(memberId2);
    
    if (!member1 || !member2) return false;

    switch (relationshipType) {
      case 'parent':
        member1.children.push(memberId2);
        member2.parents.push(memberId1);
        break;
      case 'child':
        member1.parents.push(memberId2);
        member2.children.push(memberId1);
        break;
      case 'spouse':
        member1.spouses.push(memberId2);
        member2.spouses.push(memberId1);
        break;
      case 'sibling':
        member1.siblings.push(memberId2);
        member2.siblings.push(memberId1);
        break;
    }

    this.updateMember(memberId1, member1);
    this.updateMember(memberId2, member2);
    return true;
  }

  removeRelationship(memberId1, memberId2, relationshipType) {
    const member1 = this.getMember(memberId1);
    const member2 = this.getMember(memberId2);
    
    if (!member1 || !member2) return false;

    switch (relationshipType) {
      case 'parent':
        member1.children = member1.children.filter(id => id !== memberId2);
        member2.parents = member2.parents.filter(id => id !== memberId1);
        break;
      case 'child':
        member1.parents = member1.parents.filter(id => id !== memberId2);
        member2.children = member2.children.filter(id => id !== memberId1);
        break;
      case 'spouse':
        member1.spouses = member1.spouses.filter(id => id !== memberId2);
        member2.spouses = member2.spouses.filter(id => id !== memberId1);
        break;
      case 'sibling':
        member1.siblings = member1.siblings.filter(id => id !== memberId2);
        member2.siblings = member2.siblings.filter(id => id !== memberId1);
        break;
    }

    this.updateMember(memberId1, member1);
    this.updateMember(memberId2, member2);
    return true;
  }

  // Search and Filter
  searchMembers(query, treeId = null) {
    const members = treeId ? this.getTreeMembers(treeId) : this.getAllMembers();
    const searchTerm = query.toLowerCase();
    
    return members.filter(member => {
      const fullName = `${member.firstName} ${member.middleName} ${member.lastName}`.toLowerCase();
      return fullName.includes(searchTerm) ||
             member.birthPlace.toLowerCase().includes(searchTerm) ||
             member.occupation.toLowerCase().includes(searchTerm);
    });
  }

  getTreeMembers(treeId) {
    const tree = this.getTree(treeId);
    if (!tree) return [];

    const savedMembers = localStorage.getItem(`tree_${treeId}_members`);
    if (savedMembers) {
      const allMembers = JSON.parse(savedMembers);
      return allMembers.filter(member => tree.members.includes(member.id));
    }
    
    // If no saved members, return empty array
    return [];
  }

  filterMembersByGeneration(treeId, generation) {
    const members = this.getTreeMembers(treeId);
    // This is a simplified generation filter
    // In a real implementation, you'd calculate generations based on relationships
    return members.filter(member => {
      // Placeholder logic - would need proper generation calculation
      return true;
    });
  }

  // Statistics
  getTreeStatistics(treeId) {
    const tree = this.getTree(treeId);
    if (!tree) return null;

    const members = this.getTreeMembers(treeId);
    const livingMembers = members.filter(m => !m.deathDate);
    const deceasedMembers = members.filter(m => m.deathDate);

    return {
      totalMembers: members.length,
      livingMembers: livingMembers.length,
      deceasedMembers: deceasedMembers.length,
      generations: this.calculateGenerations(treeId),
      averageAge: this.calculateAverageAge(members)
    };
  }

  calculateGenerations(treeId) {
    const tree = this.getTree(treeId);
    if (!tree || !tree.rootPerson) return 0;

    const members = this.getTreeMembers(treeId);
    const rootMember = members.find(m => m.id === tree.rootPerson);
    if (!rootMember) return 0;

    // Simplified generation calculation
    // In a real implementation, you'd traverse the tree structure
    return Math.ceil(members.length / 4); // Placeholder
  }

  calculateAverageAge(members) {
    const livingMembers = members.filter(m => !m.deathDate && m.birthDate);
    if (livingMembers.length === 0) return 0;

    const totalAge = livingMembers.reduce((sum, member) => {
      const birthYear = new Date(member.birthDate).getFullYear();
      const currentYear = new Date().getFullYear();
      return sum + (currentYear - birthYear);
    }, 0);

    return Math.round(totalAge / livingMembers.length);
  }

  // Utility Functions
  generateId() {
    return 'ft_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  formatDate(dateString) {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  calculateAge(birthDate, deathDate = null) {
    if (!birthDate) return 'Unknown';
    
    const birth = new Date(birthDate);
    const end = deathDate ? new Date(deathDate) : new Date();
    const age = end.getFullYear() - birth.getFullYear();
    
    if (deathDate) {
      return `${age} years (deceased)`;
    }
    return `${age} years old`;
  }

  getFullName(member) {
    const parts = [member.firstName, member.middleName, member.lastName].filter(part => part);
    return parts.join(' ');
  }

  // Event Listeners
  setupEventListeners() {
    // Global event listeners can be added here
    document.addEventListener('DOMContentLoaded', () => {
      this.initializePage();
    });
  }

  initializePage() {
    // Page-specific initialization
    const currentPage = window.location.pathname.split('/').pop();
    
    switch (currentPage) {
      case 'family-tree.html':
        this.initializeDashboard();
        break;
      case 'family-tree-view.html':
        this.initializeTreeView();
        break;
      case 'family-tree-create.html':
        this.initializeCreateTree();
        break;
      case 'family-member-profile.html':
        this.initializeMemberProfile();
        break;
    }
  }

  // Page-specific initialization methods
  initializeDashboard() {
    this.renderDashboard();
  }

  initializeTreeView() {
    const urlParams = new URLSearchParams(window.location.search);
    const treeId = urlParams.get('treeId');
    if (treeId) {
      this.currentTree = this.getTree(treeId);
      this.renderTreeView();
    }
  }

  initializeCreateTree() {
    this.setupCreateTreeForm();
  }

  initializeMemberProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('memberId');
    if (memberId) {
      this.currentMember = this.getMember(memberId);
      this.renderMemberProfile();
    }
  }

  // Render methods (to be implemented in specific files)
  renderDashboard() {
    // Implemented in dashboard.js
  }

  renderTreeView() {
    // Implemented in tree-view.js
  }

  setupCreateTreeForm() {
    // Implemented in create-tree.js
  }

  renderMemberProfile() {
    // Implemented in member-profile.js
  }
}

// Initialize the core when the script loads
window.FamilyTreeCore = new FamilyTreeCore();
