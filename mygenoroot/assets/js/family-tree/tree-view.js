/**
 * Family Tree Visualization JavaScript
 * Handles Treant.js tree visualization and interactions
 */

class FamilyTreeVisualization {
  constructor() {
    this.core = window.FamilyTreeCore;
    if (!this.core) {
      throw new Error('FamilyTreeCore not available');
    }
    this.treeData = null;
    this.treantInstance = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadTreeData();
  }

  setupEventListeners() {
    // Zoom controls
    document.getElementById('zoom-in')?.addEventListener('click', () => {
      this.zoomIn();
    });

    document.getElementById('zoom-out')?.addEventListener('click', () => {
      this.zoomOut();
    });

    document.getElementById('reset-zoom')?.addEventListener('click', () => {
      this.resetZoom();
    });

    // Add member button
    document.getElementById('add-member')?.addEventListener('click', () => {
      this.showAddMemberModal();
    });
  }

  loadTreeData() {
    const urlParams = new URLSearchParams(window.location.search);
    const treeId = urlParams.get('treeId');
    
    if (!treeId) {
      // No treeId provided - check if any trees exist
      const trees = this.core.trees;
      if (trees.length === 0) {
        this.showNoTreesMessage();
        return;
      } else {
        // Redirect to first available tree
        window.location.href = `family-tree-view.html?treeId=${trees[0].id}`;
        return;
      }
    }

    const tree = this.core.getTree(treeId);
    if (!tree) {
      this.showError('Tree not found');
      return;
    }

    this.currentTree = tree;
    this.updateTreeInfo(tree);
    this.buildTreeData(tree);
    this.renderTree();
  }

  updateTreeInfo(tree) {
    document.getElementById('tree-title').textContent = tree.name;
    document.getElementById('tree-meta').textContent = 
      `${tree.members.length} members • Last modified ${new Date(tree.lastModified).toLocaleDateString()}`;
  }

  buildTreeData(tree) {
    const members = this.core.getTreeMembers(tree.id);
    console.log('All members in tree:', members);
    if (members.length === 0) {
      this.treeData = null;
      this.showEmptyTree();
      return;
    }

    // Find root member
    const rootMember = members.find(member => member.id === tree.rootPerson) || members[0];
    console.log('Root member:', rootMember);
    
    // Build Treant.js compatible tree structure
    this.treeData = this.buildTreantStructure(rootMember, members);
    console.log('Built tree structure:', this.treeData);
  }

  buildTreantStructure(rootMember, allMembers) {
    const visited = new Set();
    const self = this;
    
    function buildNode(member) {
      if (visited.has(member.id)) return null;
      visited.add(member.id);

      const imageUrl = member.profileImage || self.getDefaultAvatar(member.gender);
      
      const node = {
        text: {
          name: `${member.firstName} ${member.lastName}`.trim(),
          title: member.occupation || '',
          contact: member.birthDate ? `Born: ${member.birthDate}` : ''
        },
        HTMLclass: self.getNodeClass(member),
        children: []
      };

      console.log(`Member ${member.firstName} ${member.lastName}:`, {
        hasProfileImage: !!member.profileImage,
        profileImage: member.profileImage,
        defaultAvatar: self.getDefaultAvatar(member.gender),
        finalImage: imageUrl
      });

      // Add children
      member.children.forEach(childId => {
        const child = allMembers.find(m => m.id === childId);
        if (child) {
          const childNode = buildNode(child);
          if (childNode) {
            node.children.push(childNode);
          }
        }
      });

      return node;
    }

    // Build the tree starting from root
    const rootNode = buildNode(rootMember);
    
    // If there are unvisited members, add them as siblings/related to root
    const unvisitedMembers = allMembers.filter(member => !visited.has(member.id));
    unvisitedMembers.forEach(member => {
      const memberNode = buildNode(member);
      if (memberNode) {
        rootNode.children.push(memberNode);
      }
    });

    return rootNode;
  }

  getDefaultAvatar(gender) {
    // Use data URLs to avoid Treant.js URL modification issues
    if (gender === 'female') {
      return 'data:image/svg+xml;base64,' + btoa(`
        <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#e91e63"/>
          <text x="30" y="38" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">F</text>
        </svg>
      `);
    } else if (gender === 'male') {
      return 'data:image/svg+xml;base64,' + btoa(`
        <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#2196f3"/>
          <text x="30" y="38" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">M</text>
        </svg>
      `);
    }
    return 'data:image/svg+xml;base64,' + btoa(`
      <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#757575"/>
        <text x="30" y="38" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold">?</text>
      </svg>
    `);
  }

  getNodeClass(member) {
    let classes = ['family-member'];
    if (member.gender === 'female') classes.push('female');
    if (member.gender === 'male') classes.push('male');
    if (member.deathDate) classes.push('deceased');
    return classes.join(' ');
  }

  renderTree() {
    if (!this.treeData) {
      this.showEmptyTree();
      return;
    }

    console.log('Rendering tree with data:', this.treeData);

    // Hide loading
    const loadingElement = document.getElementById('tree-loading');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }

    // Clear existing tree
    const container = document.getElementById('tree-container');
    if (container) {
      container.innerHTML = '';
    }

    // Check if Treant is available
    if (typeof Treant === 'undefined') {
      console.error('Treant.js not loaded');
      this.showError('Treant.js library not loaded');
      return;
    }

    // Check if Raphael is available
    if (typeof Raphael === 'undefined') {
      console.error('Raphael.js not loaded');
      this.showError('Raphael.js library not loaded (required for Treant.js)');
      return;
    }

    // Treant.js configuration
    const treantConfig = {
      chart: {
        container: '#tree-container',
        levelSeparation: 50,
        siblingSeparation: 20,
        subTeeSeparation: 30,
        rootOrientation: 'NORTH',
        nodeAlign: 'CENTER',
        connectors: {
          type: 'step',
          style: {
            'stroke-width': 2,
            'stroke': '#007bff'
          }
        },
        node: {
          HTMLclass: 'family-node',
          drawLineThrough: false,
          collapsable: false
        }
      },
      nodeStructure: this.treeData
    };

    console.log('Treant config:', treantConfig);

    // Initialize Treant.js
    try {
      this.treantInstance = new Treant(treantConfig);
      console.log('Treant instance created:', this.treantInstance);
      
      // Inject images after Treant.js renders
      setTimeout(() => {
        this.injectImages();
      }, 500);
      
      this.updateStatistics();
    } catch (error) {
      console.error('Error rendering tree:', error);
      this.showError('Error rendering family tree: ' + error.message);
    }
  }

  injectImages() {
    // Find all Treant.js nodes and inject images
    const nodes = document.querySelectorAll('.Treant .node');
    console.log('Found nodes to inject images:', nodes.length);
    
    nodes.forEach((nodeElement, index) => {
      // Get the member data for this node
      const memberName = nodeElement.querySelector('.node-name')?.textContent?.trim();
      if (!memberName) return;
      
      // Find the corresponding member data
      const member = this.allMembers.find(m => 
        `${m.firstName} ${m.lastName}`.trim() === memberName
      );
      
      if (member) {
        const imageUrl = member.profileImage || this.getDefaultAvatar(member.gender);
        
        // Create image element
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.cssText = 'width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: block; margin: 0 auto 10px auto;';
        
        // Insert image at the top of the node
        const nodeContent = nodeElement.querySelector('.node-name')?.parentElement;
        if (nodeContent) {
          nodeContent.insertBefore(img, nodeContent.firstChild);
        }
        
        console.log(`Injected image for ${memberName}:`, imageUrl);
      }
    });
  }

  zoomIn() {
    if (this.treantInstance) {
      this.treantInstance.zoomIn();
    }
  }

  zoomOut() {
    if (this.treantInstance) {
      this.treantInstance.zoomOut();
    }
  }

  resetZoom() {
    if (this.treantInstance) {
      this.treantInstance.resetZoom();
    }
  }

  showAddMemberModal() {
    // Redirect to add member page
    window.location.href = `family-member-add.html?treeId=${this.currentTree.id}`;
  }

  selectNode(nodeData) {
    // Handle node selection
    console.log('Selected node:', nodeData);
  }

  updateStatistics() {
    if (!this.currentTree) return;

    const members = this.core.getTreeMembers(this.currentTree.id);
    const livingMembers = members.filter(member => !member.deathDate);
    const deceasedMembers = members.filter(member => member.deathDate);

    document.getElementById('total-members-count').textContent = members.length;
    document.getElementById('generations-count').textContent = this.core.calculateGenerations(this.currentTree.id);
    document.getElementById('living-members-count').textContent = livingMembers.length;
    document.getElementById('deceased-members-count').textContent = deceasedMembers.length;
  }

  showEmptyTree() {
    const loadingElement = document.getElementById('tree-loading');
    if (loadingElement) {
      loadingElement.innerHTML = `
        <div class="empty-tree text-center">
          <i class="fas fa-sitemap fa-4x text-muted mb-3"></i>
          <h4>Empty Family Tree</h4>
          <p class="text-muted mb-4">This tree doesn't have any members yet. Start building your family history!</p>
          <button class="btn btn-primary" onclick="treeView.showAddMemberModal()">
            <i class="fas fa-plus me-2"></i>Add First Member
          </button>
        </div>
      `;
      loadingElement.style.display = 'block';
    }
  }

  showNoTreesMessage() {
    const loadingElement = document.getElementById('tree-loading');
    if (loadingElement) {
      loadingElement.innerHTML = `
        <div class="no-trees-message text-center">
          <i class="fas fa-sitemap fa-4x text-muted mb-3"></i>
          <h4>No Family Trees Yet</h4>
          <p class="text-muted mb-4">You haven't created any family trees yet. Start building your family history!</p>
          <div class="d-flex justify-content-center gap-3">
            <a href="family-tree-create.html" class="btn btn-primary btn-lg">
              <i class="fas fa-plus-circle me-2"></i>Create Your First Tree
            </a>
            <a href="family-tree.html" class="btn btn-outline-primary btn-lg">
              <i class="fas fa-arrow-left me-2"></i>Back to Dashboard
            </a>
          </div>
        </div>
      `;
      loadingElement.style.display = 'block';
    }
  }

  showError(message) {
    const loadingElement = document.getElementById('tree-loading');
    if (loadingElement) {
      loadingElement.innerHTML = `
        <div class="error-state text-center">
          <i class="fas fa-exclamation-triangle fa-4x text-danger mb-3"></i>
          <h4>Error</h4>
          <p class="text-muted">${message}</p>
          <a href="family-tree.html" class="btn btn-primary">
            <i class="fas fa-arrow-left me-2"></i>Back to Dashboard
          </a>
        </div>
      `;
      loadingElement.style.display = 'block';
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    if (!window.FamilyTreeCore) {
      throw new Error('FamilyTreeCore not available');
    }
    window.treeView = new FamilyTreeVisualization();
  } catch (error) {
    console.error('Error initializing tree view:', error);
    const loadingElement = document.getElementById('tree-loading');
    if (loadingElement) {
      loadingElement.innerHTML = `
        <div class="error-state text-center">
          <i class="fas fa-exclamation-triangle fa-4x text-danger mb-3"></i>
          <h4>System Error</h4>
          <p class="text-muted">Family Tree system not loaded properly. Please refresh the page.</p>
          <button class="btn btn-primary" onclick="window.location.reload()">
            <i class="fas fa-refresh me-2"></i>Refresh Page
          </button>
        </div>
      `;
    }
  }
});