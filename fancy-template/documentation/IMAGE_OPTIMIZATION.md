# Image Optimization Guide

This guide explains how to optimize images for the RentEarn template and implement lazy loading for better performance.

## Current Template Status

The RentEarn template currently uses:
- ✅ **SVG illustrations** (no optimization needed - already optimized)
- ✅ **Font Awesome icons** (loaded via CDN - optimized by provider)
- ✅ **No raster images** (buyers can add their own)

## Adding Images to Your Template

### Recommended Image Formats

| Format | Best For | File Size | Quality |
|--------|----------|-----------|---------|
| **WebP** | Photos, complex images | Smallest | High |
| **PNG** | Logos, icons, transparency | Medium | High |
| **JPG/JPEG** | Photos, complex images | Small | Good |
| **SVG** | Icons, illustrations | Smallest | Perfect |

### Image Optimization Tools

**Online Tools:**
- TinyPNG (https://tinypng.com) - PNG/JPEG compression
- Squoosh (https://squoosh.app) - Multiple formats
- ImageOptim (https://imageoptim.com) - Mac app
- Compressor.io (https://compressor.io) - Online compressor

**Command Line Tools:**
- ImageMagick
- Sharp (Node.js)
- jpegoptim
- optipng

## Image Sizes Recommendations

### Hero Images
- **Desktop**: 1920x1080px (max)
- **Tablet**: 1200x800px
- **Mobile**: 800x600px
- **Format**: WebP or JPG
- **Size**: < 200KB

### Partner Logos
- **Size**: 200x100px (or proportional)
- **Format**: PNG (with transparency) or SVG
- **Size**: < 50KB each

### Background Images
- **Size**: 1920x1080px (max)
- **Format**: JPG or WebP
- **Size**: < 300KB

### Icons
- **Size**: 64x64px to 128x128px
- **Format**: SVG (preferred) or PNG
- **Size**: < 10KB each

## Implementing Lazy Loading

### Method 1: Native Lazy Loading (Recommended)

Add `loading="lazy"` attribute to images:

```html
<img src="assets/images/hero-image.jpg" 
     alt="Hero image" 
     loading="lazy">
```

**Browser Support**: Chrome 76+, Firefox 75+, Safari 15.4+

### Method 2: Intersection Observer (Fallback)

Add this JavaScript to `main.js`:

```javascript
// Lazy loading images with Intersection Observer
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Call on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initLazyLoading);
```

**HTML Usage:**
```html
<img data-src="assets/images/image.jpg" 
     src="assets/images/placeholder.jpg" 
     alt="Description">
```

### Method 3: Using a Library

**LazySizes** (recommended):
```html
<!-- Add to <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lazysizes@5/lazysizes.min.css">
<script src="https://cdn.jsdelivr.net/npm/lazysizes@5/lazysizes.min.js"></script>

<!-- Use in HTML -->
<img data-src="assets/images/image.jpg" 
     class="lazyload" 
     alt="Description">
```

## Responsive Images

### Using srcset and sizes

```html
<img src="assets/images/hero-small.jpg"
     srcset="assets/images/hero-small.jpg 800w,
             assets/images/hero-medium.jpg 1200w,
             assets/images/hero-large.jpg 1920w"
     sizes="(max-width: 800px) 100vw,
            (max-width: 1200px) 50vw,
            1920px"
     alt="Hero image"
     loading="lazy">
```

### Using picture element

```html
<picture>
    <source media="(max-width: 768px)" 
            srcset="assets/images/hero-mobile.jpg">
    <source media="(max-width: 1200px)" 
            srcset="assets/images/hero-tablet.jpg">
    <img src="assets/images/hero-desktop.jpg" 
         alt="Hero image"
         loading="lazy">
</picture>
```

## Optimizing Existing Images

### Using ImageMagick (Command Line)

```bash
# Compress JPEG
convert input.jpg -quality 85 -strip output.jpg

# Compress PNG
convert input.png -strip -quality 85 output.png

# Resize image
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 output.jpg

# Convert to WebP
convert input.jpg -quality 85 output.webp
```

### Using Sharp (Node.js)

```javascript
const sharp = require('sharp');

sharp('input.jpg')
    .resize(1920, 1080, { fit: 'inside' })
    .jpeg({ quality: 85 })
    .toFile('output.jpg');

// Convert to WebP
sharp('input.jpg')
    .webp({ quality: 85 })
    .toFile('output.webp');
```

## Adding Images to Template

### Hero Background Image

**CSS Method:**
```css
.hero {
    background-image: url('../images/hero-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

**HTML Method:**
```html
<div class="hero-image">
    <img src="assets/images/hero-image.jpg" 
         alt="Hero illustration"
         loading="lazy">
</div>
```

### Partner Logos

```html
<div class="partner-card">
    <img src="assets/images/partners/partner-1.png" 
         alt="Partner Company Name"
         loading="lazy"
         width="200"
         height="100">
</div>
```

## Performance Best Practices

### 1. Use Appropriate Formats
- **Photos**: WebP or JPG
- **Logos/Icons**: SVG or PNG
- **Complex graphics**: WebP

### 2. Compress Images
- Target: 70-85% quality
- Use tools to reduce file size
- Don't sacrifice too much quality

### 3. Use Correct Dimensions
- Don't use oversized images
- Match image size to display size
- Use responsive images (srcset)

### 4. Implement Lazy Loading
- Load images as user scrolls
- Reduces initial page load time
- Improves user experience

### 5. Use CDN for Static Assets
- Consider using CDN for images
- Reduces server load
- Faster delivery worldwide

## Image Optimization Checklist

Before adding images:

- [ ] Images are optimized (compressed)
- [ ] Appropriate format chosen (WebP, JPG, PNG, SVG)
- [ ] Correct dimensions (not oversized)
- [ ] Alt text added for accessibility
- [ ] Lazy loading implemented
- [ ] Responsive images used (if needed)
- [ ] File sizes reasonable (< 200KB for large images)
- [ ] Images tested on different devices

## Example: Adding Optimized Hero Image

### Step 1: Optimize Image
```bash
# Using ImageMagick
convert hero-original.jpg -resize 1920x1080^ -quality 85 -strip hero-optimized.jpg
convert hero-optimized.jpg -quality 85 hero-optimized.webp
```

### Step 2: Add to HTML
```html
<picture>
    <source type="image/webp" srcset="assets/images/hero.webp">
    <img src="assets/images/hero.jpg" 
         alt="RentEarn - Get Rewarded for Paying Rent"
         loading="lazy">
</picture>
```

### Step 3: Add CSS (if needed)
```css
.hero-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
}
```

## Tools & Resources

### Online Optimization
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **Compressor.io**: https://compressor.io
- **ImageOptim**: https://imageoptim.com

### Libraries
- **LazySizes**: https://github.com/aFarkas/lazysizes
- **Sharp**: https://sharp.pixelplumbing.com
- **ImageMagick**: https://imagemagick.org

### Documentation
- **Web.dev Image Optimization**: https://web.dev/fast/#optimize-your-images
- **MDN Responsive Images**: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

---

**Note**: The current template doesn't include any raster images, so optimization is only needed when buyers add their own images. This guide helps buyers optimize their images properly.

