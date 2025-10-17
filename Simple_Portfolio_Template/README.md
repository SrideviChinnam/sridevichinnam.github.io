# Professional Portfolio Website Template

A modern, responsive, and fully customizable portfolio website template perfect for developers, designers, and creative professionals.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Dark/Light Mode Toggle** - Modern theme switching with smooth transitions
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Smooth scrolling, animated skill bars, portfolio filtering
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Social Media Ready** - Open Graph tags for beautiful link previews
- **Fast Loading** - Optimized CSS and JavaScript for quick page loads
- **Cross-browser Compatible** - Works on all modern browsers
- **Easy Customization** - Well-commented code for easy modifications

## 📁 File Structure

```
folio-portfolio-template/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Documentation (this file)
├── LICENSE.txt         # Commercial license terms
├── CHANGELOG.md        # Version history and updates
├── package.json        # Project metadata and dependencies
├── screenshots/        # Preview images for marketing
│   └── README.md      # Screenshot guidelines
└── demo/              # Live demo version
    ├── index.html     # Demo HTML file
    ├── style.css      # Demo CSS file
    ├── script.js      # Demo JavaScript file
    └── README.md      # Demo documentation
```

## 🚀 Quick Start

1. **Download the files** to your local machine
2. **Open `index.html`** in your web browser
3. **Customize the content** by editing the HTML file
4. **Modify styles** by editing `style.css`
5. **Add functionality** by editing `script.js`

## 🎨 Customization Guide

### Personal Information
Update the following sections in `index.html`:

```html
<!-- Update these sections with your information -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Web Developer & Designer</h2>
```

### Contact Information
Replace the contact details in the contact section:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
```

### Dark Mode Customization
The template includes a sophisticated dark mode system using CSS custom properties. To customize the dark theme:

```css
/* Dark Mode Colors */
[data-theme="dark"] {
    --bg-primary: #0f172a;        /* Main background */
    --bg-secondary: #1e293b;       /* Section backgrounds */
    --text-primary: #f8fafc;       /* Primary text color */
    --text-secondary: #cbd5e1;     /* Secondary text color */
    --primary-blue: #2563eb;       /* Brand color (same as light) */
    /* ... other variables */
}
```

The theme toggle automatically saves user preferences to localStorage and provides smooth transitions between themes.

### Portfolio Projects
Add your projects by duplicating the portfolio item structure:

```html
<div class="portfolio-item" data-category="web">
    <div class="portfolio-image">
        <div class="image-placeholder">
            <i class="fas fa-laptop"></i>
        </div>
        <div class="portfolio-overlay">
            <h3>Your Project Title</h3>
            <p>Project description</p>
            <div class="portfolio-links">
                <a href="#" class="portfolio-link"><i class="fas fa-external-link-alt"></i></a>
                <a href="#" class="portfolio-link"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
</div>
```

## 🎨 Color Scheme

The template uses a modern blue/purple/teal color palette:

- **Primary Blue**: `#2563eb`
- **Secondary Purple**: `#8b5cf6`
- **Accent Teal**: `#06b6d4`
- **Success Green**: `#10b981`
- **Text Dark**: `#1a1a1a`
- **Text Light**: `#64748b`
- **Background**: `#f0f9ff`

To change colors, update the CSS in `style.css`:

```css
/* Primary Colors */
.btn-primary { background: #2563eb; }
.nav-logo a { color: #2563eb; }
.stat-number { color: #2563eb; }

/* Secondary Colors */
.shape-2 { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
.portfolio-link { background: linear-gradient(45deg, #06b6d4, #3b82f6); }
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Laptop**: 1024px - 1199px
- **Tablet**: 768px - 1023px
- **Mobile Landscape**: 481px - 767px
- **Mobile Portrait**: 320px - 480px

## 🔧 Technical Features

### JavaScript Functionality
- **Dark/Light Mode Toggle** - Theme switching with localStorage persistence
- Mobile navigation toggle
- Smooth scrolling navigation
- Portfolio filtering system
- Contact form validation
- Skill bars animation
- Back-to-top button
- Intersection Observer for scroll animations

### CSS Features
- CSS Grid and Flexbox layouts
- CSS animations and transitions
- Responsive design with media queries
- Modern CSS properties (backdrop-filter, clip-path)
- Custom scrollbar styling

### HTML Features
- Semantic HTML5 structure
- Accessibility features (ARIA labels, alt text)
- SEO-friendly meta tags
- Font Awesome icons integration
- Google Fonts integration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📦 Dependencies

- **Font Awesome 6.4.0** - For icons
- **Google Fonts (Inter)** - For typography
- **No build tools required** - Pure HTML, CSS, and JavaScript

## 🚀 Deployment Options

### GitHub Pages
1. Upload files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be deployed automatically
3. Get a custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy with one click
3. Automatic deployments on code changes

## 💡 Tips for Selling

### Before Selling
1. **Test thoroughly** - Check on different devices and browsers
2. **Add documentation** - Include setup instructions and customization guide
3. **Create preview images** - Screenshots of the website in action
4. **Write a compelling description** - Highlight features and benefits
5. **Set competitive pricing** - Research similar templates ($15-25 recommended)

### Marketing Materials
- ✅ Live demo version (included in `/demo` folder)
- ✅ High-quality screenshots (guidelines in `/screenshots` folder)
- ✅ Detailed feature descriptions (this README)
- ✅ Customization instructions (included)
- ✅ Support and updates (6 months included)

### Platform-Specific Requirements
- **ThemeForest**: Include preview images, detailed documentation
- **Creative Market**: Focus on design quality and customization
- **Gumroad**: Emphasize ease of use and quick setup
- **CodeCanyon**: Highlight code quality and technical features

## 📄 License

This template is licensed under the MIT License with commercial use permissions. See `LICENSE.txt` for full details.

### Commercial Use Rights
- ✅ Use for personal projects
- ✅ Use for client projects  
- ✅ Modify and customize
- ✅ Sell websites built with this template
- ✅ Include in your own products
- ✅ Redistribute modified versions

### Restrictions
- ❌ Resell the template files themselves
- ❌ Claim ownership of the original template
- ❌ Remove copyright notices
- ❌ Use for illegal purposes

## 🤝 Support

### Included Support
- ✅ 6 months of free updates
- ✅ Email support for technical issues
- ✅ Documentation and customization guide
- ✅ Browser compatibility testing

### Contact Information
- **Email**: support@folio-template.com
- **GitHub Issues**: [Create an issue](https://github.com/your-repo/issues)
- **Documentation**: [View full docs](https://folio-template.com/docs)
- **Live Demo**: [View demo](https://folio-template-demo.netlify.app)

## 🔄 Updates

### Version History
- **v1.3.0** (Current) - Added dark/light mode toggle, Open Graph tags, enhanced theme system
- **v1.2.0** - Enhanced responsiveness, new color scheme, improved mobile UX
- **v1.1.0** - Added portfolio filtering, contact form, mobile menu
- **v1.0.0** - Initial release with core features

### Update Schedule
- ✅ Free updates for 6 months
- ✅ Bug fixes and security updates
- ✅ New features and improvements
- ✅ Browser compatibility updates
- ✅ Performance optimizations

### How to Update
1. Backup your customized files
2. Download the latest version
3. Replace core files (HTML, CSS, JS)
4. Reapply your customizations
5. Test thoroughly

See `CHANGELOG.md` for detailed version history.

---

**Happy coding!** 🚀

*This template is perfect for developers, designers, and creative professionals looking to showcase their work with a modern, professional portfolio website.*
