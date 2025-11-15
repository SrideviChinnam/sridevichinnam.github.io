# Image Guidelines for ShopHub E-commerce Template

## Current Image Setup

This template currently uses **Picsum Photos** (Lorem Picsum) as placeholder images. These are high-quality random images suitable for demonstration, but **must be replaced with actual product images** for production use.

## Image Requirements

### For Production Use

1. **Image Dimensions:**
   - Product images: **800x800px** to **1200x1200px** (square format recommended)
   - Aspect ratio: 1:1 (square) works best for product grids
   - Minimum size: 400x400px
   - Maximum size: 2000x2000px

2. **File Format:**
   - **JPG** (recommended for photos) - smaller file size
   - **PNG** (for images with transparency)
   - **WebP** (modern format, best compression) - with fallback

3. **File Size:**
   - Keep individual images under **500KB** for optimal performance
   - Use image optimization tools before uploading

4. **Image Quality:**
   - High resolution, clear and sharp
   - Professional product photography
   - Consistent lighting and background
   - White or neutral backgrounds work best

## How to Replace Placeholder Images

### Step 1: Prepare Your Images

1. Take or obtain high-quality product photos
2. Resize to recommended dimensions (800x800px or 1200x1200px)
3. Optimize using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
   - [Squoosh](https://squoosh.app/)

### Step 2: Add Images to Project

1. Create the products folder (if it doesn't exist):
   ```
   assets/images/products/
   ```

2. Place your optimized images in this folder

3. Use descriptive filenames:
   - ✅ Good: `wireless-headphones.jpg`, `smart-watch-black.jpg`
   - ❌ Bad: `img1.jpg`, `product_photo.png`

### Step 3: Update Product Data

**For Shop Page (`assets/js/products.js`):**

```javascript
{
    id: 1,
    name: "Wireless Headphones",
    description: "Premium quality wireless headphones...",
    price: 99.99,
    image: "assets/images/products/wireless-headphones.jpg", // Update this
    badge: "New",
    category: "electronics"
}
```

**For Home Page (`assets/js/home.js`):**

Update the featured products with the same method.

### Step 4: Test Your Images

1. Open the website in a browser
2. Check that all images load correctly
3. Verify images look good on mobile devices
4. Test image loading speed

## Image Optimization Tips

1. **Use WebP format** (with JPG fallback):
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Product">
   </picture>
   ```

2. **Lazy loading** is already implemented in the template

3. **Responsive images** - the template automatically scales images

4. **CDN hosting** - Consider using a CDN for faster image delivery

## Free Image Resources (For Demo/Testing)

If you need free images for testing:

- **Pexels** (https://www.pexels.com/) - Free stock photos
- **Pixabay** (https://pixabay.com/) - Free images
- **Unsplash** (https://unsplash.com/) - Free high-quality photos

**Note:** Always check licensing before using images in production.

## For ThemeForest/Envato Submission

When submitting to marketplaces:

1. **Include sample images:**
   - Provide 2-3 optimized sample product images
   - Show buyers what quality to expect

2. **Documentation:**
   - Clearly state that placeholder images must be replaced
   - Provide detailed instructions (like this file)
   - Include image dimension requirements

3. **Screenshots:**
   - Use high-quality screenshots for marketplace preview
   - Show the template with actual product images if possible

4. **License:**
   - Ensure all included images are properly licensed
   - Use only royalty-free images or your own photos

## Troubleshooting

**Images not displaying?**
- Check file paths are correct (relative to HTML file)
- Verify image files exist in the specified folder
- Check browser console for 404 errors
- Ensure file names match exactly (case-sensitive)

**Images loading slowly?**
- Optimize image file sizes
- Use WebP format
- Consider using a CDN
- Enable browser caching

**Images look blurry?**
- Use higher resolution source images
- Ensure images are at least 800x800px
- Check image compression settings

## Support

For questions about images or customization, refer to the main README.md file or contact support.

---

**Remember:** Professional product images significantly improve the appearance and conversion rate of your e-commerce store. Invest in quality photography!

