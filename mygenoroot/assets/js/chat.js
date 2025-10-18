// ChatGPT-like Letters Interface
class LetterChat {
  constructor() {
    this.currentChatId = null;
    this.isEditing = false;
    this.chats = this.loadChats();
    this.drafts = this.loadDrafts();
    this.init();
  }

  init() {
    this.renderChatHistory();
    this.setupEventListeners();
    this.loadDefaultChat();
    this.setupKeyboardShortcuts();
  }

  // Data Management
  loadChats() {
    try {
      const letters = JSON.parse(localStorage.getItem('mgr_letters')) || [];
      return letters.map(letter => ({
        id: letter.id,
        title: letter.subject || 'Untitled Letter',
        from: letter.from || '',
        to: letter.to || '',
        subject: letter.subject || '',
        body: letter.body || '',
        messages: [{
          role: 'user',
          content: this.formatLetterContent(letter),
          timestamp: letter.createdAt
        }],
        lastActivity: letter.updatedAt || letter.createdAt,
        createdAt: letter.createdAt,
        updatedAt: letter.updatedAt
      }));
    } catch (e) {
      console.error('Error loading chats:', e);
      return [];
    }
  }

  loadDrafts() {
    try {
      return JSON.parse(localStorage.getItem('mgr_letter_drafts')) || [];
    } catch (e) {
      return [];
    }
  }

  saveChats() {
    const letters = this.chats.map(chat => ({
      id: chat.id,
      from: chat.from,
      to: chat.to,
      subject: chat.subject,
      body: chat.body,
      date: new Date().toISOString().slice(0, 10),
      createdAt: chat.createdAt,
      updatedAt: chat.updatedAt
    }));
    localStorage.setItem('mgr_letters', JSON.stringify(letters));
  }

  saveDrafts() {
    localStorage.setItem('mgr_letter_drafts', JSON.stringify(this.drafts));
  }

  // UI Rendering
  renderChatHistory() {
    const container = document.getElementById('chatHistory');
    const searchQuery = document.getElementById('chatSearchInput').value.toLowerCase();
    
    const filteredChats = this.chats.filter(chat => 
      !searchQuery || 
      chat.title.toLowerCase().includes(searchQuery) ||
      chat.from.toLowerCase().includes(searchQuery) ||
      chat.to.toLowerCase().includes(searchQuery) ||
      chat.body.toLowerCase().includes(searchQuery)
    );

    if (filteredChats.length === 0) {
      container.innerHTML = `
        <div class="text-center text-muted py-4">
          <i class="fas fa-search"></i>
          <p>No letters found</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filteredChats.map(chat => `
      <div class="chat-history-item ${chat.id === this.currentChatId ? 'active' : ''}" 
           data-chat-id="${chat.id}">
        <div class="chat-title">${this.escapeHtml(chat.title)}</div>
        <div class="chat-preview">${this.escapeHtml(this.getPreview(chat.body))}</div>
        <div class="chat-time">${this.formatTime(chat.lastActivity)}</div>
      </div>
    `).join('');

    // Add click event listeners
    container.querySelectorAll('.chat-history-item').forEach(item => {
      item.addEventListener('click', () => {
        const chatId = item.getAttribute('data-chat-id');
        this.loadChat(chatId);
      });
    });
  }

  loadChat(chatId) {
    const chat = this.chats.find(c => c.id == chatId);
    if (!chat) return;

    this.currentChatId = chatId;
    this.isEditing = false;
    
    // Update UI
    document.getElementById('currentChatTitle').textContent = chat.title;
    document.getElementById('editChatBtn').style.display = 'inline-block';
    document.getElementById('deleteChatBtn').style.display = 'inline-block';
    
    // Render messages
    this.renderMessages(chat.messages);
    
    // Update active state
    document.querySelectorAll('.chat-history-item').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelector(`[data-chat-id="${chatId}"]`).classList.add('active');
  }

  renderMessages(messages) {
    const container = document.getElementById('chatMessages');
    container.innerHTML = messages.map(msg => `
      <div class="message-bubble message-${msg.role}">
        <div class="message-content">${this.formatMessageContent(msg.content)}</div>
        <div class="message-meta">${this.formatTime(msg.timestamp)}</div>
      </div>
    `).join('');
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
  }

  startNewChat() {
    this.currentChatId = null;
    this.isEditing = false;
    
    // Update UI
    document.getElementById('currentChatTitle').textContent = 'New Letter';
    document.getElementById('editChatBtn').style.display = 'none';
    document.getElementById('deleteChatBtn').style.display = 'none';
    
    // Clear messages
    document.getElementById('chatMessages').innerHTML = `
      <div class="welcome-message">
        <div class="welcome-content">
          <i class="fas fa-envelope-open-text"></i>
          <h4>Start Writing Your Letter</h4>
          <p>Fill in the details below and write your letter content.</p>
        </div>
      </div>
    `;
    
    // Clear form
    this.clearForm();
    
    // Focus on input
    document.getElementById('letterInput').focus();
  }

  // Event Handlers
  setupEventListeners() {
    // New chat button
    document.getElementById('newChatBtn').addEventListener('click', () => {
      this.startNewChat();
    });

    // Search input
    document.getElementById('chatSearchInput').addEventListener('input', () => {
      this.renderChatHistory();
    });

    // Form submission
    document.getElementById('letterChatForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveLetter();
    });

    // Edit button
    document.getElementById('editChatBtn').addEventListener('click', () => {
      this.editCurrentChat();
    });

    // Delete button
    document.getElementById('deleteChatBtn').addEventListener('click', () => {
      this.deleteCurrentChat();
    });

    // Toggle metadata
    document.getElementById('toggleMetadataBtn').addEventListener('click', () => {
      this.toggleMetadata();
    });

    // Save draft
    document.getElementById('saveDraftBtn').addEventListener('click', () => {
      this.saveDraft();
    });

    // Auto-save draft
    document.getElementById('letterInput').addEventListener('input', () => {
      this.autoSaveDraft();
    });

    // Modal events
    document.getElementById('editLetterBtn').addEventListener('click', () => {
      this.editFromModal();
    });

    document.getElementById('deleteLetterBtn').addEventListener('click', () => {
      this.deleteFromModal();
    });
  }

  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + N for new chat
      if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        this.startNewChat();
      }
      
      // Ctrl/Cmd + S for save draft
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        this.saveDraft();
      }
      
      // Escape to cancel editing
      if (e.key === 'Escape' && this.isEditing) {
        this.cancelEdit();
      }
    });
  }

  // Letter Management
  saveLetter() {
    const from = document.getElementById('letterFrom').value.trim();
    const to = document.getElementById('letterTo').value.trim();
    const subject = document.getElementById('letterSubject').value.trim();
    const body = document.getElementById('letterInput').value.trim();

    if (!body) {
      alert('Please write your letter content.');
      return;
    }

    const now = new Date();
    const letterData = {
      from: from || 'Anonymous',
      to: to || 'Recipient',
      subject: subject || 'Untitled Letter',
      body: body,
      createdAt: this.currentChatId ? 
        this.chats.find(c => c.id == this.currentChatId)?.createdAt || now.toISOString() : 
        now.toISOString(),
      updatedAt: now.toISOString()
    };

    if (this.currentChatId) {
      // Update existing letter
      const chatIndex = this.chats.findIndex(c => c.id == this.currentChatId);
      if (chatIndex !== -1) {
        this.chats[chatIndex] = {
          ...this.chats[chatIndex],
          ...letterData,
          id: this.currentChatId
        };
      }
    } else {
      // Create new letter
      const newId = now.getTime();
      const newChat = {
        id: newId,
        title: letterData.subject,
        ...letterData,
        messages: [{
          role: 'user',
          content: this.formatLetterContent(letterData),
          timestamp: now.toISOString()
        }]
      };
      this.chats.unshift(newChat);
      this.currentChatId = newId;
    }

    this.saveChats();
    this.renderChatHistory();
    this.loadChat(this.currentChatId);
    this.clearForm();
    
    // Show success message
    this.showNotification('Letter saved successfully!', 'success');
  }

  editCurrentChat() {
    if (!this.currentChatId) return;
    
    const chat = this.chats.find(c => c.id == this.currentChatId);
    if (!chat) return;

    this.isEditing = true;
    
    // Populate form
    document.getElementById('letterFrom').value = chat.from;
    document.getElementById('letterTo').value = chat.to;
    document.getElementById('letterSubject').value = chat.subject;
    document.getElementById('letterInput').value = chat.body;
    
    // Show metadata fields
    this.showMetadata();
    
    // Update UI
    document.getElementById('currentChatTitle').textContent = `Editing: ${chat.title}`;
    document.getElementById('editChatBtn').innerHTML = '<i class="fas fa-times"></i> Cancel';
    document.getElementById('editChatBtn').onclick = () => this.cancelEdit();
    
    // Focus on input
    document.getElementById('letterInput').focus();
  }

  cancelEdit() {
    this.isEditing = false;
    this.clearForm();
    this.hideMetadata();
    
    if (this.currentChatId) {
      this.loadChat(this.currentChatId);
    } else {
      this.startNewChat();
    }
  }

  deleteCurrentChat() {
    if (!this.currentChatId) return;
    
    if (confirm('Are you sure you want to delete this letter?')) {
      this.chats = this.chats.filter(c => c.id != this.currentChatId);
      this.saveChats();
      this.renderChatHistory();
      this.startNewChat();
      this.showNotification('Letter deleted successfully!', 'success');
    }
  }

  // UI Helpers
  toggleMetadata() {
    const metadataFields = document.querySelectorAll('.letter-metadata input');
    const isVisible = metadataFields[0].style.display !== 'none';
    
    if (isVisible) {
      this.hideMetadata();
    } else {
      this.showMetadata();
    }
  }

  showMetadata() {
    document.querySelectorAll('.letter-metadata input').forEach(input => {
      input.style.display = 'block';
    });
    document.getElementById('toggleMetadataBtn').innerHTML = '<i class="fas fa-eye-slash"></i> Hide Options';
  }

  hideMetadata() {
    document.querySelectorAll('.letter-metadata input').forEach(input => {
      input.style.display = 'none';
    });
    document.getElementById('toggleMetadataBtn').innerHTML = '<i class="fas fa-cog"></i> Options';
  }

  clearForm() {
    document.getElementById('letterFrom').value = '';
    document.getElementById('letterTo').value = '';
    document.getElementById('letterSubject').value = '';
    document.getElementById('letterInput').value = '';
    this.hideMetadata();
  }

  // Draft Management
  saveDraft() {
    const draft = {
      id: Date.now(),
      from: document.getElementById('letterFrom').value,
      to: document.getElementById('letterTo').value,
      subject: document.getElementById('letterSubject').value,
      body: document.getElementById('letterInput').value,
      timestamp: new Date().toISOString()
    };

    if (draft.body.trim()) {
      this.drafts.unshift(draft);
      if (this.drafts.length > 10) {
        this.drafts = this.drafts.slice(0, 10);
      }
      this.saveDrafts();
      this.showNotification('Draft saved!', 'info');
    }
  }

  autoSaveDraft() {
    // Debounce auto-save
    clearTimeout(this.autoSaveTimeout);
    this.autoSaveTimeout = setTimeout(() => {
      const body = document.getElementById('letterInput').value.trim();
      if (body && body.length > 10) {
        this.saveDraft();
      }
    }, 2000);
  }

  // Utility Functions
  formatLetterContent(letter) {
    return `From: ${letter.from}\nTo: ${letter.to}\nSubject: ${letter.subject}\n\n${letter.body}`;
  }

  formatMessageContent(content) {
    return this.escapeHtml(content).replace(/\n/g, '<br>');
  }

  getPreview(content, maxLength = 50) {
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
  }

  formatTime(timestamp) {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diff = now - date;
      
      if (diff < 60000) return 'Just now';
      if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
      if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
      if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`;
      
      return date.toLocaleDateString();
    } catch (e) {
      return 'Unknown';
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} alert-dismissible fade show`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }

  loadDefaultChat() {
    if (this.chats.length > 0) {
      this.loadChat(this.chats[0].id);
    } else {
      this.startNewChat();
    }
  }

  // Modal functions
  editFromModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('letterModal'));
    modal.hide();
    this.editCurrentChat();
  }

  deleteFromModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('letterModal'));
    modal.hide();
    this.deleteCurrentChat();
  }
}

// Initialize the chat interface when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.letterChat = new LetterChat();
});

// Set active navigation state
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop();
  const navBtns = document.querySelectorAll('.side-options .btn');
  
  navBtns.forEach(btn => {
    const href = btn.getAttribute('href');
    const page = href ? href.split('/').pop() : '';
    
    // Remove existing active class
    btn.classList.remove('active');
    
    // Check if current page matches navigation sections
    if (
      (href === 'letters-chat.html' && currentPage === 'letters-chat.html') ||
      (href === 'notes.html' && (currentPage === 'note.html' || currentPage === 'notes.html')) ||
      (href === 'diaries.html' && (currentPage === 'diary.html' || currentPage === 'diaries.html')) ||
      (href === 'quotes.html' && (currentPage === 'quote.html' || currentPage === 'quotes.html')) ||
      (href === 'thoughts.html' && (currentPage === 'thought.html' || currentPage === 'thoughts.html'))
    ) {
      btn.classList.add('active');
    }
  });
}

// Initialize navigation
setActiveNav();
