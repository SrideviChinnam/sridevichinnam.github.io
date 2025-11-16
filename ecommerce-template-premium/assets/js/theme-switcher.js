/**
 * Theme Switcher JavaScript
 * Allows users to change color themes dynamically
 */

// Define color theme palettes
const themes = {
    'default': {
        name: 'Default',
        colors: {
            '--primary-color': '#6366f1',
            '--primary-dark': '#4f46e5',
            '--primary-light': '#818cf8',
            '--secondary-color': '#ec4899',
            '--accent-color': '#f59e0b',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            '--shadow-glow': '0 0 20px rgba(99, 102, 241, 0.3)'
        }
    },
    'green-yellow': {
        name: 'Green & Yellow',
        colors: {
            '--primary-color': '#10b981',
            '--primary-dark': '#059669',
            '--primary-light': '#34d399',
            '--secondary-color': '#fbbf24',
            '--accent-color': '#f59e0b',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #10b981 0%, #fbbf24 100%)',
            '--shadow-glow': '0 0 20px rgba(16, 185, 129, 0.3)'
        }
    },
    'purple-pink': {
        name: 'Purple & Pink',
        colors: {
            '--primary-color': '#8b5cf6',
            '--primary-dark': '#7c3aed',
            '--primary-light': '#a78bfa',
            '--secondary-color': '#ec4899',
            '--accent-color': '#f472b6',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            '--shadow-glow': '0 0 20px rgba(139, 92, 246, 0.3)'
        }
    },
    'orange-coral': {
        name: 'Orange & Coral',
        colors: {
            '--primary-color': '#f97316',
            '--primary-dark': '#ea580c',
            '--primary-light': '#fb923c',
            '--secondary-color': '#ff6b6b',
            '--accent-color': '#f59e0b',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #f97316 0%, #ff6b6b 100%)',
            '--shadow-glow': '0 0 20px rgba(249, 115, 22, 0.3)'
        }
    },
    'teal-cyan': {
        name: 'Teal & Cyan',
        colors: {
            '--primary-color': '#14b8a6',
            '--primary-dark': '#0d9488',
            '--primary-light': '#5eead4',
            '--secondary-color': '#06b6d4',
            '--accent-color': '#22d3ee',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
            '--shadow-glow': '0 0 20px rgba(20, 184, 166, 0.3)'
        }
    },
    'pink-rose': {
        name: 'Pink & Rose',
        colors: {
            '--primary-color': '#ec4899',
            '--primary-dark': '#db2777',
            '--primary-light': '#f472b6',
            '--secondary-color': '#f43f5e',
            '--accent-color': '#fb7185',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
            '--shadow-glow': '0 0 20px rgba(236, 72, 153, 0.3)'
        }
    },
    'amber-gold': {
        name: 'Amber & Gold',
        colors: {
            '--primary-color': '#f59e0b',
            '--primary-dark': '#d97706',
            '--primary-light': '#fbbf24',
            '--secondary-color': '#eab308',
            '--accent-color': '#facc15',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #f59e0b 0%, #eab308 100%)',
            '--shadow-glow': '0 0 20px rgba(245, 158, 11, 0.3)'
        }
    },
    'emerald-mint': {
        name: 'Emerald & Mint',
        colors: {
            '--primary-color': '#10b981',
            '--primary-dark': '#059669',
            '--primary-light': '#34d399',
            '--secondary-color': '#6ee7b7',
            '--accent-color': '#a7f3d0',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #10b981 0%, #6ee7b7 100%)',
            '--shadow-glow': '0 0 20px rgba(16, 185, 129, 0.3)'
        }
    },
    'violet-magenta': {
        name: 'Violet & Magenta',
        colors: {
            '--primary-color': '#8b5cf6',
            '--primary-dark': '#7c3aed',
            '--primary-light': '#a78bfa',
            '--secondary-color': '#d946ef',
            '--accent-color': '#f0abfc',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
            '--shadow-glow': '0 0 20px rgba(139, 92, 246, 0.3)'
        }
    },
    'coral-peach': {
        name: 'Coral & Peach',
        colors: {
            '--primary-color': '#ff6b6b',
            '--primary-dark': '#f56565',
            '--primary-light': '#ff8787',
            '--secondary-color': '#ffa07a',
            '--accent-color': '#ffb3ba',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #ff6b6b 0%, #ffa07a 100%)',
            '--shadow-glow': '0 0 20px rgba(255, 107, 107, 0.3)'
        }
    },
    'lavender-lilac': {
        name: 'Lavender & Lilac',
        colors: {
            '--primary-color': '#a78bfa',
            '--primary-dark': '#8b5cf6',
            '--primary-light': '#c4b5fd',
            '--secondary-color': '#c084fc',
            '--accent-color': '#e9d5ff',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)',
            '--shadow-glow': '0 0 20px rgba(167, 139, 250, 0.3)'
        }
    },
    'mint-cyan': {
        name: 'Mint & Cyan',
        colors: {
            '--primary-color': '#6ee7b7',
            '--primary-dark': '#34d399',
            '--primary-light': '#a7f3d0',
            '--secondary-color': '#22d3ee',
            '--accent-color': '#67e8f9',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #6ee7b7 0%, #22d3ee 100%)',
            '--shadow-glow': '0 0 20px rgba(110, 231, 183, 0.3)'
        }
    },
    'gold-yellow': {
        name: 'Gold & Yellow',
        colors: {
            '--primary-color': '#eab308',
            '--primary-dark': '#ca8a04',
            '--primary-light': '#facc15',
            '--secondary-color': '#fbbf24',
            '--accent-color': '#fde047',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #eab308 0%, #fbbf24 100%)',
            '--shadow-glow': '0 0 20px rgba(234, 179, 8, 0.3)'
        }
    },
    'fuchsia-magenta': {
        name: 'Fuchsia & Magenta',
        colors: {
            '--primary-color': '#d946ef',
            '--primary-dark': '#c026d3',
            '--primary-light': '#e879f9',
            '--secondary-color': '#ec4899',
            '--accent-color': '#f0abfc',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #d946ef 0%, #ec4899 100%)',
            '--shadow-glow': '0 0 20px rgba(217, 70, 239, 0.3)'
        }
    },
    'sage-olive': {
        name: 'Sage & Olive',
        colors: {
            '--primary-color': '#84cc16',
            '--primary-dark': '#65a30d',
            '--primary-light': '#a3e635',
            '--secondary-color': '#86efac',
            '--accent-color': '#bef264',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #84cc16 0%, #86efac 100%)',
            '--shadow-glow': '0 0 20px rgba(132, 204, 22, 0.3)'
        }
    },
    'sunset-tangerine': {
        name: 'Sunset & Tangerine',
        colors: {
            '--primary-color': '#f97316',
            '--primary-dark': '#ea580c',
            '--primary-light': '#fb923c',
            '--secondary-color': '#ff7849',
            '--accent-color': '#ff8c69',
            '--success-color': '#10b981',
            '--bg-gradient': 'linear-gradient(135deg, #f97316 0%, #ff7849 100%)',
            '--shadow-glow': '0 0 20px rgba(249, 115, 22, 0.3)'
        }
    }
};

// Get saved theme from localStorage or use default
function getSavedTheme() {
    return localStorage.getItem('selectedTheme') || 'default';
}

// Apply theme to the document
function applyTheme(themeKey) {
    const theme = themes[themeKey];
    if (!theme) return;
    
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });
    
    // Update background pattern colors
    updateBackgroundPattern(theme.colors['--primary-color'], theme.colors['--secondary-color']);
    
    // Update favicon with theme colors
    updateFavicon(theme.colors['--primary-color'], theme.colors['--secondary-color']);
    
    // Save to localStorage
    localStorage.setItem('selectedTheme', themeKey);
    
    // Update active theme indicator
    updateActiveThemeIndicator(themeKey);
}

// Update background pattern with new colors
function updateBackgroundPattern(primaryColor, secondaryColor) {
    // Extract RGB values from hex
    const primaryRgb = hexToRgb(primaryColor);
    const secondaryRgb = hexToRgb(secondaryColor);
    
    if (primaryRgb && secondaryRgb) {
        const style = document.createElement('style');
        style.id = 'dynamic-background';
        style.textContent = `
            body::before {
                background: 
                    linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.95) 50%, rgba(236, 240, 245, 0.9) 100%),
                    repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 2px,
                        rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 4px
                    ),
                    repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.015) 2px,
                        rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.015) 4px
                    ),
                    radial-gradient(circle at 20% 30%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08) 0%, transparent 40%),
                    radial-gradient(circle at 80% 70%, rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.06) 0%, transparent 40%);
            }
        `;
        
        // Remove old dynamic background if exists
        const oldStyle = document.getElementById('dynamic-background');
        if (oldStyle) oldStyle.remove();
        
        document.head.appendChild(style);
    }
}

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Update favicon with theme colors
function updateFavicon(primaryColor, secondaryColor) {
    // Create SVG favicon with gradient
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="faviconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${secondaryColor};stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#faviconGrad)" rx="20"/>
            <text x="50" y="70" font-size="60" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial, sans-serif">S</text>
        </svg>
    `.trim();
    
    // Convert SVG to data URL
    const svgDataUrl = 'data:image/svg+xml,' + encodeURIComponent(svg);
    
    // Find existing favicon links or create new ones
    let faviconLink = document.querySelector('link[rel="icon"]');
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    
    if (!faviconLink) {
        faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.type = 'image/svg+xml';
        document.head.appendChild(faviconLink);
    }
    
    if (!appleTouchIcon) {
        appleTouchIcon = document.createElement('link');
        appleTouchIcon.rel = 'apple-touch-icon';
        document.head.appendChild(appleTouchIcon);
    }
    
    // Update favicon hrefs
    faviconLink.href = svgDataUrl;
    appleTouchIcon.href = svgDataUrl;
    
    // Force browser to reload favicon by adding timestamp
    const timestamp = new Date().getTime();
    faviconLink.href = svgDataUrl + '?v=' + timestamp;
    appleTouchIcon.href = svgDataUrl + '?v=' + timestamp;
}

// Create theme switcher UI
function createThemeSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'theme-switcher';
    switcher.innerHTML = `
        <button class="theme-switcher-toggle" aria-label="Choose Theme" aria-expanded="false">
            <i class="fas fa-palette"></i>
        </button>
        <div class="theme-switcher-panel">
            <div class="theme-switcher-header">
                <h3>Choose Theme</h3>
                <button class="theme-switcher-close" aria-label="Close theme selector">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="theme-switcher-grid">
                ${Object.entries(themes).map(([key, theme]) => `
                    <button 
                        class="theme-option ${getSavedTheme() === key ? 'active' : ''}" 
                        data-theme="${key}"
                        aria-label="Select ${theme.name} theme"
                        title="${theme.name}"
                    >
                        <span class="theme-preview" style="background: ${theme.colors['--bg-gradient']}"></span>
                        <span class="theme-name">${theme.name}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(switcher);
    
    // Add event listeners
    const toggle = switcher.querySelector('.theme-switcher-toggle');
    const panel = switcher.querySelector('.theme-switcher-panel');
    const closeBtn = switcher.querySelector('.theme-switcher-close');
    const themeOptions = switcher.querySelectorAll('.theme-option');
    
    toggle.addEventListener('click', () => {
        const isExpanded = panel.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isExpanded);
    });
    
    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    });
    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const themeKey = option.dataset.theme;
            applyTheme(themeKey);
            
            // Update active state
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Close panel after selection
            setTimeout(() => {
                panel.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            }, 300);
        });
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!switcher.contains(e.target) && panel.classList.contains('active')) {
            panel.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Update active theme indicator
function updateActiveThemeIndicator(themeKey) {
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        if (option.dataset.theme === themeKey) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme on load
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
    
    // Create theme switcher UI
    createThemeSwitcher();
});

