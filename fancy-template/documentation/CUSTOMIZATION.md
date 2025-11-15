# Customization Guide

This guide will help you customize the RentEarn template to match your brand and requirements.

## Table of Contents

1. [Changing Colors](#changing-colors)
2. [Updating Content](#updating-content)
3. [Modifying Typography](#modifying-typography)
4. [Adding Images](#adding-images)
5. [Customizing Sections](#customizing-sections)
6. [Form Integration](#form-integration)
7. [Theme Customization](#theme-customization)

## Changing Colors

### Method 1: Using CSS Variables (Recommended)

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #10b981;      /* Main brand color */
    --primary-dark: #059669;       /* Darker shade for hover states */
    --primary-light: #34d399;      /* Lighter shade for accents */
    --secondary-color: #84cc16;     /* Secondary brand color */
    --accent-color: #eab308;        /* Accent color for highlights */
    --text-dark: #1f2937;          /* Main text color */
    --text-gray: #6b7280;          /* Secondary text color */
    --bg-white: #ffffff;           /* Background white */
    --bg-light: #f0fdf4;          /* Light background */
}
```

### Method 2: Using Theme Switcher

The template includes 17 pre-built themes. To add a new theme:

1. Open `assets/js/theme-switcher.js`
2. Add a new theme object to the `themes` object:

```javascript
const themes = {
    // ... existing themes
    yourTheme: {
        primary: '#your-color',
        primaryDark: '#your-dark-color',
        primaryLight: '#your-light-color',
        secondary: '#your-secondary',
        accent: '#your-accent',
        bgLight: '#your-bg-light',
        heroBg: '#your-hero-bg',
        inputFocus: 'rgba(255, 0, 0, 0.1)' // Adjust for your primary color
    }
};
```

3. Add the theme option in `index.html` (in the theme panel section):

```html
<div class="theme-option" data-theme="yourTheme">
    <div class="theme-preview yourTheme-theme">
        <span class="theme-color" style="background: #your-color;"></span>
        <span class="theme-color" style="background: #your-secondary;"></span>
        <span class="theme-color" style="background: #your-accent;"></span>
    </div>
    <span class="theme-name">Your Theme Name</span>
    <i class="fas fa-check theme-check"></i>
</div>
```

## Updating Content

### Changing Text Content

All text content is in `index.html`. Simply find and replace:

- **Hero Section**: Lines 70-77
- **Value Proposition**: Lines 255-271
- **How It Works**: Lines 290-307
- **Benefits**: Lines 368-351
- **FAQ**: Lines 384-428
- **Footer**: Lines 500-540

### Updating Logo/Brand Name

1. **Header Logo** (Line 41):
   ```html
   <div class="logo">
       <a href="#home">YourBrand</a>
   </div>
   ```

2. **Footer Logo** (Line 504):
   ```html
   <div class="footer-logo">
       <h3>YourBrand</h3>
   </div>
   ```

### Updating Contact Information

**Footer Contact** (Lines 488-492):
```html
<li><i class="fas fa-envelope"></i> your-email@example.com</li>
<li><i class="fas fa-phone"></i> +1 (800) 000-0000</li>
```

## Modifying Typography

### Changing Fonts

1. **Update Google Fonts Link** (Line 33 in `index.html`):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

2. **Update CSS Variables** (in `style.css`):
   ```css
   :root {
       --font-primary: 'YourFont', sans-serif;
       --font-heading: 'YourHeadingFont', sans-serif;
   }
   ```

### Adjusting Font Sizes

Edit the typography section in `style.css` (Lines 77-99):

```css
h1 {
    font-size: clamp(2rem, 5vw, 3.5rem); /* Adjust as needed */
}

h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
}

p {
    font-size: 1rem; /* Adjust base font size */
}
```

## Adding Images

### Adding Hero Image

1. Place your image in `assets/images/` folder
2. Replace the SVG illustration (optional) or add a background image:

```css
.hero {
    background-image: url('../images/your-hero-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### Adding Partner Logos

1. Add logo images to `assets/images/partners/` folder
2. Update the Partners section in `index.html`:

```html
<div class="partner-card">
    <img src="assets/images/partners/partner-logo.png" alt="Partner Name">
</div>
```

### Adding Favicon

1. Create a favicon (16x16 or 32x32 pixels)
2. Save as `favicon.ico` in the root directory
3. Add to HTML `<head>`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## Customizing Sections

### Adding a New Section

1. **Add HTML** (before closing `</main>` tag):

```html
<section class="your-section" id="your-section">
    <div class="container">
        <h2>Your Section Title</h2>
        <p>Your content here</p>
    </div>
</section>
```

2. **Add CSS** (in `style.css`):

```css
.your-section {
    padding: var(--spacing-2xl) 0;
    background: var(--bg-white);
}
```

3. **Add Navigation Link** (in header nav):

```html
<li><a href="#your-section">Your Section</a></li>
```

### Removing a Section

1. Delete the section HTML
2. Remove the navigation link
3. Remove associated CSS (optional, won't break if left)

### Modifying FAQ Items

**Add FAQ Item**:
```html
<div class="faq-item">
    <div class="faq-question" role="button" tabindex="0" aria-expanded="false">
        <h3>Your Question?</h3>
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
    </div>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

## Form Integration

### Connecting Waitlist Form to Backend

Edit `assets/js/main.js`, function `handleWaitlistSubmit` (around line 164):

```javascript
// Replace the setTimeout simulation with:
fetch('https://your-api-endpoint.com/waitlist', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
        email: email, 
        name: name, 
        phone: phone 
    })
})
.then(response => response.json())
.then(data => {
    showSuccessMessage();
    closeModalFunc();
    e.target.reset();
    removeButtonLoading(submitButton);
})
.catch(error => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
    removeButtonLoading(submitButton);
});
```

### Using Form Services

**Formspree**:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, phone })
})
```

**EmailJS**:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    email: email,
    name: name,
    phone: phone
})
```

## Theme Customization

### Disabling Theme Switcher

1. Remove theme toggle button from HTML (Line 536)
2. Remove theme panel from HTML (Lines 541-703)
3. Remove `theme-switcher.js` script tag (Line 707)

### Setting Default Theme

Edit `assets/js/theme-switcher.js`, function `loadSavedTheme`:

```javascript
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    } else {
        applyTheme('yourDefaultTheme'); // Change 'green' to your preferred theme
    }
}
```

## Advanced Customization

### Changing Animation Speeds

Edit animation durations in `style.css`:

```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.floating-card {
    animation: float 3s ease-in-out infinite; /* Change 3s to your preferred duration */
}
```

### Modifying Spacing

Update spacing variables in `style.css`:

```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
}
```

### Customizing Buttons

Edit button styles in `style.css` (Lines 110-167):

```css
.btn {
    padding: 0.75rem 1.5rem; /* Adjust padding */
    border-radius: var(--radius-md); /* Adjust border radius */
    font-size: 1rem; /* Adjust font size */
}
```

## Tips & Best Practices

1. **Backup First**: Always backup your files before making changes
2. **Test Responsively**: Check changes on mobile, tablet, and desktop
3. **Use Browser DevTools**: Inspect elements to understand the structure
4. **Keep It Consistent**: Maintain consistent spacing, colors, and typography
5. **Test Forms**: Always test form submissions after customization
6. **Validate HTML**: Use W3C validator to check for errors
7. **Optimize Images**: Compress images before adding them

## Need Help?

- Check the main README.md for general information
- Review code comments in HTML, CSS, and JS files
- Use browser developer tools to inspect elements
- Contact support if you need assistance

---

**Note**: After making changes, always test the template in multiple browsers and devices to ensure everything works correctly.

