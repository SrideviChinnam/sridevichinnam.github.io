/**
 * Family Tree Search JavaScript
 * Handles advanced search functionality across family trees
 */

class FamilyTreeSearch {
  constructor() {
    this.core = window.FamilyTreeCore;
    this.searchResults = [];
    this.currentFilters = {};
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.populateTreeFilter();
    this.performInitialSearch();
  }

  setupEventListeners() {
    const form = document.getElementById('search-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.performSearch();
    });

    // Real-time search
    const searchInput = document.getElementById('search-query');
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.performSearch();
        }, 500);
      });
    }

    // Filter changes
    const filterInputs = ['tree-filter', 'gender-filter', 'status-filter', 'birth-year-from', 'birth-year-to', 'location-filter'];
    filterInputs.forEach(filterId => {
      const element = document.getElementById(filterId);
      if (element) {
        element.addEventListener('change', () => {
          this.performSearch();
        });
      }
    });

    // Clear filters
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', () => {
        this.clearFilters();
      });
    }
  }

  populateTreeFilter() {
    const treeFilter = document.getElementById('tree-filter');
    if (!treeFilter) return;

    treeFilter.innerHTML = '<option value="">All Trees</option>';
    
    this.core.trees.forEach(tree => {
      const option = document.createElement('option');
      option.value = tree.id;
      option.textContent = tree.name;
      treeFilter.appendChild(option);
    });
  }

  performInitialSearch() {
    // Perform a broad search to show all family members initially
    this.performSearch();
  }

  performSearch() {
    this.showLoading();
    this.collectFilters();
    
    // Simulate search delay for better UX
    setTimeout(() => {
      this.searchResults = this.executeSearch();
      this.displayResults();
      this.hideLoading();
    }, 300);
  }

  collectFilters() {
    this.currentFilters = {
      query: document.getElementById('search-query').value.trim(),
      treeId: document.getElementById('tree-filter').value,
      gender: document.getElementById('gender-filter').value,
      status: document.getElementById('status-filter').value,
      birthYearFrom: document.getElementById('birth-year-from').value,
      birthYearTo: document.getElementById('birth-year-to').value,
      location: document.getElementById('location-filter').value.trim()
    };
  }

  executeSearch() {
    let allMembers = [];

    // Get members from all trees or specific tree
    if (this.currentFilters.treeId) {
      allMembers = this.core.getTreeMembers(this.currentFilters.treeId);
    } else {
      allMembers = this.core.getAllMembers();
    }

    // Apply filters
    return allMembers.filter(member => {
      return this.matchesQuery(member) &&
             this.matchesGender(member) &&
             this.matchesStatus(member) &&
             this.matchesBirthYear(member) &&
             this.matchesLocation(member);
    });
  }

  matchesQuery(member) {
    if (!this.currentFilters.query) return true;

    const query = this.currentFilters.query.toLowerCase();
    const fullName = this.core.getFullName(member).toLowerCase();
    const birthPlace = (member.birthPlace || '').toLowerCase();
    const occupation = (member.occupation || '').toLowerCase();
    const notes = (member.notes || '').toLowerCase();

    return fullName.includes(query) ||
           birthPlace.includes(query) ||
           occupation.includes(query) ||
           notes.includes(query);
  }

  matchesGender(member) {
    if (!this.currentFilters.gender) return true;
    return member.gender === this.currentFilters.gender;
  }

  matchesStatus(member) {
    if (!this.currentFilters.status) return true;
    
    if (this.currentFilters.status === 'living') {
      return !member.deathDate;
    } else if (this.currentFilters.status === 'deceased') {
      return !!member.deathDate;
    }
    
    return true;
  }

  matchesBirthYear(member) {
    if (!member.birthDate) return true;
    
    const birthYear = new Date(member.birthDate).getFullYear();
    const fromYear = this.currentFilters.birthYearFrom;
    const toYear = this.currentFilters.birthYearTo;
    
    if (fromYear && birthYear < parseInt(fromYear)) return false;
    if (toYear && birthYear > parseInt(toYear)) return false;
    
    return true;
  }

  matchesLocation(member) {
    if (!this.currentFilters.location) return true;
    
    const location = this.currentFilters.location.toLowerCase();
    const birthPlace = (member.birthPlace || '').toLowerCase();
    const deathPlace = (member.deathPlace || '').toLowerCase();
    
    return birthPlace.includes(location) || deathPlace.includes(location);
  }

  displayResults() {
    const resultsContainer = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');
    
    if (!resultsContainer) return;

    if (this.searchResults.length === 0) {
      resultsContainer.style.display = 'none';
      noResults.style.display = 'block';
      return;
    }

    resultsContainer.style.display = 'block';
    noResults.style.display = 'none';

    // Group results by tree
    const groupedResults = this.groupResultsByTree();
    
    resultsContainer.innerHTML = Object.keys(groupedResults).map(treeName => {
      const members = groupedResults[treeName];
      return this.createTreeResultsSection(treeName, members);
    }).join('');
  }

  groupResultsByTree() {
    const grouped = {};
    
    this.searchResults.forEach(member => {
      const tree = this.core.trees.find(t => t.members.includes(member.id));
      const treeName = tree ? tree.name : 'Unknown Tree';
      
      if (!grouped[treeName]) {
        grouped[treeName] = [];
      }
      grouped[treeName].push(member);
    });
    
    return grouped;
  }

  createTreeResultsSection(treeName, members) {
    const tree = this.core.trees.find(t => t.name === treeName);
    const treeId = tree ? tree.id : null;
    
    return `
      <div class="tree-results-section mb-4">
        <div class="tree-results-header">
          <h4 class="mb-3">
            <i class="fas fa-sitemap me-2"></i>${treeName}
            <span class="badge bg-primary ms-2">${members.length} member${members.length !== 1 ? 's' : ''}</span>
          </h4>
        </div>
        <div class="row">
          ${members.map(member => this.createMemberCard(member, treeId)).join('')}
        </div>
      </div>
    `;
  }

  createMemberCard(member, treeId) {
    const age = this.core.calculateAge(member.birthDate, member.deathDate);
    const fullName = this.core.getFullName(member);
    
    return `
      <div class="col-lg-4 col-md-6 mb-3">
        <div class="member-search-card">
          <div class="member-photo">
            <img src="${member.profileImage || 'assets/images/family-tree/placeholders/default-avatar.png'}" 
                 alt="${fullName}" class="img-fluid">
          </div>
          <div class="member-info">
            <h6 class="member-name">${fullName}</h6>
            <p class="member-age text-muted">${age}</p>
            <p class="member-location small">${member.birthPlace || 'Unknown location'}</p>
            ${member.occupation ? `<p class="member-occupation small">${member.occupation}</p>` : ''}
            <div class="member-actions">
              <button class="btn btn-sm btn-primary" onclick="search.viewMember('${member.id}')">
                <i class="fas fa-eye me-1"></i>View
              </button>
              ${treeId ? `<button class="btn btn-sm btn-outline-primary" onclick="search.viewInTree('${treeId}', '${member.id}')">
                <i class="fas fa-sitemap me-1"></i>View in Tree
              </button>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  viewMember(memberId) {
    window.location.href = `family-member-profile.html?memberId=${memberId}`;
  }

  viewInTree(treeId, memberId) {
    window.location.href = `family-tree-view.html?treeId=${treeId}&highlight=${memberId}`;
  }

  clearFilters() {
    document.getElementById('search-query').value = '';
    document.getElementById('tree-filter').value = '';
    document.getElementById('gender-filter').value = '';
    document.getElementById('status-filter').value = '';
    document.getElementById('birth-year-from').value = '';
    document.getElementById('birth-year-to').value = '';
    document.getElementById('location-filter').value = '';
    
    this.performSearch();
  }

  showLoading() {
    const loading = document.getElementById('search-loading');
    const results = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');
    
    if (loading) loading.style.display = 'block';
    if (results) results.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
  }

  hideLoading() {
    const loading = document.getElementById('search-loading');
    if (loading) loading.style.display = 'none';
  }

  // Export functionality
  exportResults() {
    if (this.searchResults.length === 0) {
      this.showMessage('No results to export', 'warning');
      return;
    }

    const exportData = this.searchResults.map(member => ({
      name: this.core.getFullName(member),
      birthDate: member.birthDate || '',
      deathDate: member.deathDate || '',
      gender: member.gender || '',
      birthPlace: member.birthPlace || '',
      occupation: member.occupation || '',
      notes: member.notes || ''
    }));

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `family-search-results-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }

  showMessage(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.parentNode.removeChild(alertDiv);
      }
    }, 5000);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.search = new FamilyTreeSearch();
});
