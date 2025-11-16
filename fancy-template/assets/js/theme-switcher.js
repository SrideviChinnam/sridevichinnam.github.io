// ============================================
// Theme Switcher JavaScript
// ============================================

// Theme Definitions
const themes = {
    green: {
        primary: '#10b981',
        primaryDark: '#059669',
        primaryLight: '#34d399',
        secondary: '#84cc16',
        accent: '#eab308',
        bgLight: '#f0fdf4',
        heroBg: '#f0fdf4',
        inputFocus: 'rgba(16, 185, 129, 0.1)'
    },
    purple: {
        primary: '#8b5cf6',
        primaryDark: '#7c3aed',
        primaryLight: '#a78bfa',
        secondary: '#ec4899',
        accent: '#f59e0b',
        bgLight: '#faf5ff',
        heroBg: '#faf5ff',
        inputFocus: 'rgba(139, 92, 246, 0.1)'
    },
    orange: {
        primary: '#f97316',
        primaryDark: '#ea580c',
        primaryLight: '#fb923c',
        secondary: '#ef4444',
        accent: '#f59e0b',
        bgLight: '#fff7ed',
        heroBg: '#fff7ed',
        inputFocus: 'rgba(249, 115, 22, 0.1)'
    },
    teal: {
        primary: '#14b8a6',
        primaryDark: '#0d9488',
        primaryLight: '#5eead4',
        secondary: '#06b6d4',
        accent: '#22c55e',
        bgLight: '#f0fdfa',
        heroBg: '#f0fdfa',
        inputFocus: 'rgba(20, 184, 166, 0.1)'
    },
    pink: {
        primary: '#ec4899',
        primaryDark: '#db2777',
        primaryLight: '#f472b6',
        secondary: '#f472b6',
        accent: '#fbbf24',
        bgLight: '#fdf2f8',
        heroBg: '#fdf2f8',
        inputFocus: 'rgba(236, 72, 153, 0.1)'
    },
    amber: {
        primary: '#f59e0b',
        primaryDark: '#d97706',
        primaryLight: '#fbbf24',
        secondary: '#eab308',
        accent: '#84cc16',
        bgLight: '#fffbeb',
        heroBg: '#fffbeb',
        inputFocus: 'rgba(245, 158, 11, 0.1)'
    },
    emerald: {
        primary: '#059669',
        primaryDark: '#047857',
        primaryLight: '#10b981',
        secondary: '#34d399',
        accent: '#6ee7b7',
        bgLight: '#ecfdf5',
        heroBg: '#ecfdf5',
        inputFocus: 'rgba(5, 150, 105, 0.1)'
    },
    lime: {
        primary: '#84cc16',
        primaryDark: '#65a30d',
        primaryLight: '#a3e635',
        secondary: '#eab308',
        accent: '#fbbf24',
        bgLight: '#f7fee7',
        heroBg: '#f7fee7',
        inputFocus: 'rgba(132, 204, 22, 0.1)'
    },
    violet: {
        primary: '#7c3aed',
        primaryDark: '#6d28d9',
        primaryLight: '#a855f7',
        secondary: '#ec4899',
        accent: '#f472b6',
        bgLight: '#f5f3ff',
        heroBg: '#f5f3ff',
        inputFocus: 'rgba(124, 58, 237, 0.1)'
    },
    rose: {
        primary: '#f43f5e',
        primaryDark: '#e11d48',
        primaryLight: '#fb7185',
        secondary: '#fbbf24',
        accent: '#fcd34d',
        bgLight: '#fff1f2',
        heroBg: '#fff1f2',
        inputFocus: 'rgba(244, 63, 94, 0.1)'
    },
    coral: {
        primary: '#fb7185',
        primaryDark: '#f43f5e',
        primaryLight: '#fda4af',
        secondary: '#fbbf24',
        accent: '#fcd34d',
        bgLight: '#fff7ed',
        heroBg: '#fff7ed',
        inputFocus: 'rgba(251, 113, 133, 0.1)'
    },
    lavender: {
        primary: '#a78bfa',
        primaryDark: '#8b5cf6',
        primaryLight: '#c4b5fd',
        secondary: '#f472b6',
        accent: '#f9a8d4',
        bgLight: '#faf5ff',
        heroBg: '#faf5ff',
        inputFocus: 'rgba(167, 139, 250, 0.1)'
    },
    mint: {
        primary: '#06b6d4',
        primaryDark: '#0891b2',
        primaryLight: '#22d3ee',
        secondary: '#34d399',
        accent: '#6ee7b7',
        bgLight: '#f0fdfa',
        heroBg: '#f0fdfa',
        inputFocus: 'rgba(6, 182, 212, 0.1)'
    },
    gold: {
        primary: '#eab308',
        primaryDark: '#ca8a04',
        primaryLight: '#fbbf24',
        secondary: '#fcd34d',
        accent: '#fde047',
        bgLight: '#fffbeb',
        heroBg: '#fffbeb',
        inputFocus: 'rgba(234, 179, 8, 0.1)'
    },
    fuchsia: {
        primary: '#c026d3',
        primaryDark: '#a21caf',
        primaryLight: '#d946ef',
        secondary: '#f472b6',
        accent: '#f9a8d4',
        bgLight: '#fdf4ff',
        heroBg: '#fdf4ff',
        inputFocus: 'rgba(192, 38, 211, 0.1)'
    },
    sage: {
        primary: '#65a30d',
        primaryDark: '#4d7c0f',
        primaryLight: '#84cc16',
        secondary: '#a3e635',
        accent: '#bef264',
        bgLight: '#f7fee7',
        heroBg: '#f7fee7',
        inputFocus: 'rgba(101, 163, 13, 0.1)'
    },
    sunset: {
        primary: '#f97316',
        primaryDark: '#ea580c',
        primaryLight: '#fb923c',
        secondary: '#fbbf24',
        accent: '#fcd34d',
        bgLight: '#fff7ed',
        heroBg: '#fff7ed',
        inputFocus: 'rgba(249, 115, 22, 0.1)'
    }
};

// DOM Elements
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themePanel = document.getElementById('themePanel');
const closeThemePanel = document.getElementById('closeThemePanel');
const themeOptions = document.querySelectorAll('.theme-option');

// Current theme (default: green)
let currentTheme = 'green';

// ============================================
// Apply Theme Function
// ============================================
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    
    // Update CSS variables
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--primary-light', theme.primaryLight);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--bg-light', theme.bgLight);
    
    // Update hero background
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.background = `linear-gradient(135deg, ${theme.heroBg} 0%, #ffffff 100%)`;
    }
    
    // Update input focus states
    const style = document.createElement('style');
    style.id = 'theme-dynamic-styles';
    style.textContent = `
        .input-group input:focus,
        .modal-body .form-group input:focus {
            box-shadow: 0 0 0 3px ${theme.inputFocus};
        }
    `;
    
    // Remove old dynamic styles if exists
    const oldStyle = document.getElementById('theme-dynamic-styles');
    if (oldStyle) {
        oldStyle.remove();
    }
    
    document.head.appendChild(style);
    
    // Update SVG gradients for theme changes
    updateSVGGradients(theme);
    
    // Update active theme option
    themeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === themeName) {
            option.classList.add('active');
        }
    });
    
    currentTheme = themeName;
    
    // Save to localStorage
    localStorage.setItem('selectedTheme', themeName);
}

// ============================================
// Update SVG Gradients Function
// ============================================
function updateSVGGradients(theme) {
    const svg = document.querySelector('.hero-svg');
    if (!svg) return;
    
    // Get all gradient definitions
    const gradient1 = svg.querySelector('#gradient1');
    const gradient2 = svg.querySelector('#gradient2');
    const gradient3 = svg.querySelector('#gradient3');
    const gradient4 = svg.querySelector('#gradient4');
    const gradient5 = svg.querySelector('#gradient5');
    const gradient6 = svg.querySelector('#gradient6');
    const gradient7 = svg.querySelector('#gradient7');
    const gradient8 = svg.querySelector('#gradient8');
    const gradient9 = svg.querySelector('#gradient9');
    
    // Update gradient1 (background circle) - primary to secondary
    if (gradient1) {
        const stop1 = gradient1.querySelector('stop[offset="0%"]');
        const stop2 = gradient1.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.primary};stop-opacity:1`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.secondary};stop-opacity:1`);
    }
    
    // Update gradient2 (building base) - white to bgLight
    if (gradient2) {
        const stop1 = gradient2.querySelector('stop[offset="0%"]');
        const stop2 = gradient2.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:#ffffff;stop-opacity:1`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.bgLight};stop-opacity:1`);
    }
    
    // Update gradient3 (roof) - primary to primaryDark
    if (gradient3) {
        const stop1 = gradient3.querySelector('stop[offset="0%"]');
        const stop2 = gradient3.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.primary};stop-opacity:1`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.primaryDark};stop-opacity:1`);
    }
    
    // Update gradient4 (windows) - secondary to accent (with opacity)
    if (gradient4) {
        const stop1 = gradient4.querySelector('stop[offset="0%"]');
        const stop2 = gradient4.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.secondary};stop-opacity:0.3`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.accent};stop-opacity:0.3`);
    }
    
    // Update gradient5 (door) - primary to primaryDark
    if (gradient5) {
        const stop1 = gradient5.querySelector('stop[offset="0%"]');
        const stop2 = gradient5.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.primary};stop-opacity:1`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.primaryDark};stop-opacity:1`);
    }
    
    // Update gradient6 (coin 1) - primary to secondary
    if (gradient6) {
        const stop1 = gradient6.querySelector('stop[offset="0%"]');
        const stop2 = gradient6.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.primary};stop-opacity:1`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.secondary};stop-opacity:1`);
    }
    
    // Update gradient7 (coin 2) - secondary to accent
    if (gradient7) {
        const stop1 = gradient7.querySelector('stop[offset="0%"]');
        const stop2 = gradient7.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.secondary};stop-opacity:1`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.accent};stop-opacity:1`);
    }
    
    // Update gradient8 (coin 3) - accent to a darker accent
    if (gradient8) {
        const stop1 = gradient8.querySelector('stop[offset="0%"]');
        const stop2 = gradient8.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.accent};stop-opacity:1`);
        // Use primaryDark for darker shade or keep accent
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.primaryDark};stop-opacity:1`);
    }
    
    // Update gradient9 (sparkles) - primary to accent
    if (gradient9) {
        const stop1 = gradient9.querySelector('stop[offset="0%"]');
        const stop2 = gradient9.querySelector('stop[offset="100%"]');
        if (stop1) stop1.setAttribute('style', `stop-color:${theme.primary};stop-opacity:1`);
        if (stop2) stop2.setAttribute('style', `stop-color:${theme.accent};stop-opacity:1`);
    }
    
    // Update circle line stroke colors (if they exist)
    const circleLines = svg.querySelectorAll('.circle-line');
    if (circleLines.length > 0) {
        circleLines.forEach(line => {
            line.setAttribute('stroke', `url(#gradient1)`);
        });
    }
}

// ============================================
// Load Saved Theme
// ============================================
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    } else {
        applyTheme('green'); // Default theme
    }
}

// ============================================
// Toggle Theme Panel
// ============================================
function toggleThemePanel() {
    themePanel.classList.toggle('active');
}

function closeThemePanelFunc() {
    themePanel.classList.remove('active');
}

// ============================================
// Event Listeners
// ============================================
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleThemePanel);
}

if (closeThemePanel) {
    closeThemePanel.addEventListener('click', closeThemePanelFunc);
}

// Theme option click handlers
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const themeName = option.dataset.theme;
        applyTheme(themeName);
        // Close panel after selection (optional - you can remove this if you want it to stay open)
        // closeThemePanelFunc();
    });
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (
        themePanel.classList.contains('active') &&
        !themePanel.contains(e.target) &&
        !themeToggleBtn.contains(e.target)
    ) {
        closeThemePanelFunc();
    }
});

// Close panel on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && themePanel.classList.contains('active')) {
        closeThemePanelFunc();
    }
});

// ============================================
// Initialize Theme on Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadSavedTheme();
    console.log('Theme switcher initialized!');
});

