/**
 * Family Tree Dashboard JavaScript
 * Handles the main dashboard functionality
 */

class FamilyTreeDashboard {
  constructor() {
    this.core = window.FamilyTreeCore;
    this.init();
  }

  init() {
    this.renderDashboard();
    this.setupEventListeners();
  }

  renderDashboard() {
    this.renderFamilyTrees();
    this.renderStatistics();
    this.renderRecentActivity();
  }

  renderFamilyTrees() {
    const treesGrid = document.getElementById('family-trees-grid');
    const emptyState = document.getElementById('empty-state');
    
    if (!treesGrid) return;

    const trees = this.core.trees;

    if (trees.length === 0) {
      treesGrid.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    treesGrid.style.display = 'block';
    emptyState.style.display = 'none';

    treesGrid.innerHTML = trees.map(tree => this.createTreeCard(tree)).join('');
  }

  createTreeCard(tree) {
    const memberCount = tree.members.length;
    const lastModified = new Date(tree.lastModified).toLocaleDateString();
    const lastModifiedTime = new Date(tree.lastModified).toLocaleTimeString();
    const timestamp = `${lastModified}, ${lastModifiedTime}`;
    
    // Generate tags based on tree properties
    const tags = this.generateTreeTags(tree);
    
    return `
      <div class="col-12 mb-3">
        <div class="horizontal-tree-card" data-tree-id="${tree.id}">
          <div class="card-left">
            <div class="tree-icon-large">
              <i class="fas fa-sitemap"></i>
            </div>
          </div>
          <div class="card-middle">
            <div class="tree-title">${tree.name}</div>
            <div class="tree-description">${tree.description || 'No description provided'}</div>
            <div class="tree-tags">
              ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="tree-timestamp">${timestamp}</div>
          </div>
          <div class="card-right">
            <div class="tree-actions">
              <a href="family-tree-view.html?treeId=${tree.id}" class="btn btn-view">
                <i class="fas fa-eye"></i>View
              </a>
              <a href="family-tree-edit.html?treeId=${tree.id}" class="btn btn-edit">
                <i class="fas fa-edit"></i>Edit
              </a>
              <button class="btn btn-delete" onclick="dashboard.deleteTree('${tree.id}')">
                <i class="fas fa-trash"></i>Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  generateTreeTags(tree) {
    const tags = [];
    
    // Privacy tag
    if (tree.privacy === 'public') {
      tags.push('Public');
    } else if (tree.privacy === 'family') {
      tags.push('Family');
    } else {
      tags.push('Private');
    }
    
    // Member count tag
    if (tree.members.length > 10) {
      tags.push('Large Family');
    } else if (tree.members.length > 5) {
      tags.push('Medium Family');
    } else {
      tags.push('Small Family');
    }
    
    // Recent activity tag
    const daysSinceModified = Math.floor((new Date() - new Date(tree.lastModified)) / (1000 * 60 * 60 * 24));
    if (daysSinceModified < 7) {
      tags.push('Recently Updated');
    }
    
    return tags;
  }

  getPrivacyIcon(privacy) {
    switch (privacy) {
      case 'private': return 'lock';
      case 'family': return 'users';
      case 'public': return 'globe';
      default: return 'lock';
    }
  }

  renderStatistics() {
    const totalTrees = this.core.trees.length;
    const totalMembers = this.core.trees.reduce((sum, tree) => sum + tree.members.length, 0);
    const totalGenerations = this.core.trees.reduce((sum, tree) => {
      return sum + this.core.calculateGenerations(tree.id);
    }, 0);
    const totalMemories = this.core.trees.reduce((sum, tree) => {
      const members = this.core.getTreeMembers(tree.id);
      return sum + members.reduce((memberSum, member) => memberSum + member.memories.length, 0);
    }, 0);

    document.getElementById('total-trees').textContent = totalTrees;
    document.getElementById('total-members').textContent = totalMembers;
    document.getElementById('total-generations').textContent = totalGenerations;
    document.getElementById('total-memories').textContent = totalMemories;
  }

  renderRecentActivity() {
    const activityFeed = document.getElementById('recent-activity');
    if (!activityFeed) return;

    const activities = this.getRecentActivities();
    
    if (activities.length === 0) {
      activityFeed.innerHTML = `
        <div class="no-activity">
          <i class="fas fa-history fa-2x text-muted mb-3"></i>
          <p class="text-muted">No recent activity</p>
        </div>
      `;
      return;
    }

    activityFeed.innerHTML = activities.map(activity => this.createActivityItem(activity)).join('');
  }

  getRecentActivities() {
    const activities = [];
    
    this.core.trees.forEach(tree => {
      const members = this.core.getTreeMembers(tree.id);
      
      // Add tree creation activity
      activities.push({
        type: 'tree_created',
        treeId: tree.id,
        treeName: tree.name,
        timestamp: tree.createdAt,
        icon: 'fas fa-plus-circle',
        text: `Created family tree "${tree.name}"`
      });

      // Add recent member additions
      members.forEach(member => {
        if (new Date(member.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) {
          activities.push({
            type: 'member_added',
            treeId: tree.id,
            treeName: tree.name,
            memberId: member.id,
            memberName: this.core.getFullName(member),
            timestamp: member.createdAt,
            icon: 'fas fa-user-plus',
            text: `Added "${this.core.getFullName(member)}" to "${tree.name}"`
          });
        }
      });
    });

    // Sort by timestamp and return last 10
    return activities
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 10);
  }

  createActivityItem(activity) {
    const timeAgo = this.getTimeAgo(activity.timestamp);
    
    return `
      <div class="activity-item">
        <div class="activity-icon">
          <i class="${activity.icon}"></i>
        </div>
        <div class="activity-content">
          <p class="activity-text">${activity.text}</p>
          <span class="activity-time">${timeAgo}</span>
        </div>
      </div>
    `;
  }

  getTimeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInSeconds = Math.floor((now - time) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    
    return time.toLocaleDateString();
  }

  deleteTree(treeId) {
    if (confirm('Are you sure you want to delete this family tree? This action cannot be undone.')) {
      this.core.deleteTree(treeId);
      this.renderDashboard();
      
      // Show success message
      this.showNotification('Family tree deleted successfully', 'success');
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('family-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }

    // Quick action buttons
    const createTreeBtn = document.querySelector('a[href="family-tree-create.html"]');
    if (createTreeBtn) {
      createTreeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'family-tree-create.html';
      });
    }

    // Tree card interactions
    document.addEventListener('click', (e) => {
      const treeCard = e.target.closest('.tree-card');
      if (treeCard) {
        const treeId = treeCard.dataset.treeId;
        if (e.target.classList.contains('btn-primary')) {
          window.location.href = `family-tree-view.html?treeId=${treeId}`;
        }
      }
    });
  }

  handleSearch(query) {
    if (!query.trim()) {
      this.renderFamilyTrees();
      return;
    }

    const treesGrid = document.getElementById('family-trees-grid');
    if (!treesGrid) return;

    const filteredTrees = this.core.trees.filter(tree => {
      return tree.name.toLowerCase().includes(query.toLowerCase()) ||
             tree.description.toLowerCase().includes(query.toLowerCase());
    });

    if (filteredTrees.length === 0) {
      treesGrid.innerHTML = `
        <div class="col-12 text-center">
          <div class="no-results">
            <i class="fas fa-search fa-3x text-muted mb-3"></i>
            <h4>No trees found</h4>
            <p class="text-muted">Try adjusting your search terms</p>
          </div>
        </div>
      `;
      return;
    }

    treesGrid.innerHTML = filteredTrees.map(tree => this.createTreeCard(tree)).join('');
  }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.dashboard = new FamilyTreeDashboard();
});
