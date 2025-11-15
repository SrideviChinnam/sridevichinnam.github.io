# ShopHub - Modern E-commerce Template

A professional, fully responsive e-commerce website template perfect for online stores. Built with clean HTML5, CSS3, and vanilla JavaScript. Ready to customize and deploy.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## ✨ Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Shopping Cart Functionality** - Full cart system with add, remove, and quantity management
- **Product Management** - Easy to add, edit, and manage products
- **Search Functionality** - Real-time product search
- **Contact Form** - Ready-to-use contact form with validation
- **SEO Friendly** - Semantic HTML structure with proper meta tags
- **Cross-Browser Compatible** - Tested on Chrome, Firefox, Safari, and Edge
- **Lightweight** - Optimized for fast page load times
- **No Dependencies** - Pure vanilla JavaScript (Font Awesome CDN for icons)

## 📁 File Structure

```
ecommerce-template/
│
├── index.html              # Home/Landing page
├── shop.html                # Products/Shopping page
├── cart.html                # Shopping Cart page
├── about.html               # About Us page
├── contact.html             # Contact page
├── README.md                # Documentation (this file)
├── IMAGE-GUIDELINES.md      # Image setup instructions
│
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    │
    ├── js/
    │   ├── products.js     # Shop page functionality
    │   ├── cart-page.js    # Cart page functionality
    │   ├── cart-counter.js # Cart count across pages
    │   ├── home.js         # Home page functionality
    │   ├── contact.js      # Contact form handling
    │   └── cart.js         # Cart functionality (legacy)
    │
    ├── images/
    │   └── products/       # Place your product images here
    └── fonts/             # Placeholder for custom fonts
```

## 🚀 Quick Start

### Installation

1. **Download/Extract** the template files to your desired location
2. **Open** `index.html` in your web browser
3. **Customize** the content, colors, and products to match your brand

### Local Development

Simply open `index.html` in your browser. No build process or server required for basic functionality.

For advanced features (like form submission), you'll need a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### 1. Changing Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade for hover */
    --secondary-color: #10b981;    /* Secondary/accent color */
    --accent-color: #f59e0b;       /* Accent/highlight color */
    --text-dark: #1f2937;          /* Main text color */
    --text-light: #6b7280;         /* Light text color */
}
```

### 2. Adding Products

Edit the `products` array in `assets/js/main.js`:

```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        description: "Product description here",
        price: 99.99,
        image: "path/to/image.jpg",
        badge: "New"  // Optional: "New", "Popular", "Sale", or null
    },
    // Add more products...
];
```

### 3. Changing Logo and Brand Name

**Logo/Brand Name:**
- Edit the logo text in `index.html` (line ~25):
```html
<div class="logo">
    <a href="#home">Your Brand Name</a>
</div>
```

**Page Title:**
- Edit the `<title>` tag in `index.html` (line ~9)

### 4. Updating Contact Information

Edit the contact section in `index.html` (around line ~200):

```html
<div class="info-item">
    <i class="fas fa-phone"></i>
    <div>
        <h3>Phone</h3>
        <p>Your Phone Number</p>
    </div>
</div>
```

### 5. Customizing Sections

All sections are clearly marked in `index.html`. Simply find the section you want to modify and update the content:

- **Hero Section** - Main banner area
- **Categories** - Product categories
- **Products** - Product grid
- **Services** - Features/benefits
- **About** - About your business
- **Contact** - Contact form and info
- **Footer** - Footer links and information

### 6. Adding Real Product Images

**Important:** The template currently uses placeholder images from Picsum Photos for demonstration purposes. For production use, you must replace these with your own product images.

**Steps to add your images:**

1. **Prepare your images:**
   - Recommended size: 800x800px or 1200x1200px (square format works best)
   - Format: JPG or PNG
   - Optimize images for web (use tools like TinyPNG or ImageOptim)
   - File size: Keep under 500KB per image for fast loading

2. **Add images to the project:**
   - Place your product images in `assets/images/products/` folder
   - Name them descriptively (e.g., `headphones-1.jpg`, `smartwatch-1.jpg`)

3. **Update product data:**
   - Open `assets/js/products.js` (for shop page)
   - Open `assets/js/home.js` (for home page featured products)
   - Replace the `image` property in each product object:
   ```javascript
   image: "assets/images/products/headphones-1.jpg"
   ```

4. **Image naming convention:**
   - Use lowercase letters and hyphens
   - Example: `wireless-headphones.jpg`, `smart-watch.jpg`

**Note for ThemeForest/Envato sellers:** 
- Include a note in your documentation that buyers need to replace placeholder images
- Consider including a few sample optimized product images in the template
- Provide clear instructions on image requirements and dimensions

### 7. Custom Fonts

1. Add font files to `assets/fonts/`
2. Add `@font-face` declarations in `assets/css/style.css`
3. Update `--font-primary` variable in CSS

## 📱 Responsive Breakpoints

The template uses the following breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Advanced Customization

### Form Submission

The contact form currently shows an alert. To make it functional:

1. **Backend Integration**: Connect to your backend API
2. **Email Service**: Use services like EmailJS, Formspree, or SendGrid
3. **Custom Handler**: Modify the form submission in `assets/js/main.js`

Example with EmailJS:
```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
        .then(() => alert('Message sent!'))
        .catch(() => alert('Error sending message'));
});
```

### Shopping Cart Backend

The cart currently uses localStorage. To integrate with a backend:

1. Replace localStorage calls in `assets/js/cart.js`
2. Add API calls to save/load cart from server
3. Implement user authentication for persistent carts

### Payment Integration

To add real payment processing:

1. Integrate payment gateway (Stripe, PayPal, etc.)
2. Modify checkout button in `assets/js/cart.js`
3. Create checkout page or modal
4. Handle payment confirmation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This template is provided for commercial and personal use. You are free to:

- Use it for commercial projects
- Modify and customize as needed
- Sell products built with this template

**Note**: Font Awesome icons are used via CDN. For production, consider hosting locally or purchasing a license.

## 🐛 Troubleshooting

### Images Not Displaying
- Check image paths are correct
- Ensure images are in the `assets/images/` folder
- Verify file names match exactly (case-sensitive)

### Cart Not Working
- Check browser console for JavaScript errors
- Ensure both `main.js` and `cart.js` are loaded
- Verify localStorage is enabled in browser

### Styles Not Applying
- Clear browser cache
- Check CSS file path is correct
- Verify no conflicting styles

### Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check for JavaScript errors in console
- Verify menu toggle button exists

## 📞 Support

For support, customization requests, or questions:

- Check the documentation above
- Review the code comments
- Contact the template author

## 🎯 Future Enhancements

Potential features you can add:

- User authentication
- Product reviews and ratings
- Wishlist functionality
- Product filtering and sorting
- Admin dashboard
- Order management system
- Multi-language support
- Dark mode toggle
- Product comparison
- Related products section

## 📄 Changelog

### Version 1.0.0 (Initial Release)
- Initial template release
- Responsive design
- Shopping cart functionality
- Product management
- Contact form
- Search functionality

## 🙏 Credits

- **Icons**: Font Awesome (https://fontawesome.com)
- **Fonts**: System fonts (Segoe UI, Tahoma, Geneva, Verdana)
- **Sample Images**: Included SVG placeholders (replace with your own product photos)

## 📸 Image Information

**Current Setup:** This template includes 3 sample SVG product images in `assets/images/products/` folder. These are professional-looking placeholders that work offline and demonstrate the image structure.

**For Production:** You must replace these sample images with your own product photos. See `IMAGE-GUIDELINES.md` for detailed instructions.

**Sample Images Included:**
- `sample-1.svg` - Wireless Headphones placeholder
- `sample-2.svg` - Smart Watch placeholder  
- `sample-3.svg` - Laptop Backpack placeholder

**Note:** All products currently use these sample images. Replace them with actual product photos (JPG/PNG format recommended) for production use.

---

**Thank you for using ShopHub E-commerce Template!**

If you find this template useful, please consider leaving a review or rating.

