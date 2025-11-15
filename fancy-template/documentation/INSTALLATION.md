# Installation Guide

This guide will help you set up and install the RentEarn website template on your local machine or web server.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, or Opera)
- A text editor (optional, for customization)
- A web server (optional, for local development)

## Quick Start (Local Preview)

1. **Download the Template**
   - Download the template ZIP file
   - Extract all files to a folder on your computer

2. **Open the Template**
   - Navigate to the extracted folder
   - Double-click `index.html` to open it in your default web browser
   - The template should load and display correctly

3. **That's It!**
   - No build process required
   - No dependencies to install
   - No server setup needed for basic preview

## Local Development Setup

### Option 1: Simple HTTP Server (Recommended)

**Using Python** (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

**Using Node.js** (if installed):
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

Then open: `http://localhost:8000`

**Using PHP** (if installed):
```bash
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 2: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Web Server Deployment

### Upload to Web Hosting

1. **Prepare Files**
   - Ensure all files maintain their folder structure
   - Keep the `assets/` folder with all subfolders intact

2. **Upload via FTP/SFTP**
   - Upload `index.html` to your web root directory
   - Upload the entire `assets/` folder to the same directory
   - Maintain the exact folder structure:
     ```
     your-domain.com/
     ├── index.html
     └── assets/
         ├── css/
         ├── js/
         └── images/
     ```

3. **Verify Installation**
   - Visit your domain in a web browser
   - Check that all styles and scripts load correctly
   - Test all interactive features

### GitHub Pages Deployment

1. **Create Repository**
   - Create a new GitHub repository
   - Upload all template files

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (usually `main` or `master`)
   - Save settings

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/repository-name`

### Netlify Deployment

1. **Drag and Drop**
   - Go to https://app.netlify.com/drop
   - Drag your template folder to the upload area
   - Netlify will automatically deploy your site

2. **Via Git**
   - Connect your GitHub repository to Netlify
   - Netlify will auto-deploy on every push

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd your-template-folder
   vercel
   ```

## File Structure

After installation, your folder structure should look like this:

```
your-project/
├── index.html              # Main HTML file
├── README.md              # Documentation
├── LICENSE.md             # License information
├── assets/
│   ├── css/
│   │   └── style.css     # All styles
│   ├── js/
│   │   ├── main.js       # Main JavaScript
│   │   └── theme-switcher.js  # Theme functionality
│   └── images/           # Your images go here
└── documentation/        # Additional documentation
```

## Troubleshooting

### Styles Not Loading

**Problem**: Page displays without styling

**Solutions**:
- Check that `assets/css/style.css` exists
- Verify file paths are correct (relative paths)
- Ensure no typos in file names
- Check browser console for 404 errors

### JavaScript Not Working

**Problem**: Interactive features don't work

**Solutions**:
- Check that `assets/js/main.js` and `assets/js/theme-switcher.js` exist
- Verify JavaScript is enabled in your browser
- Check browser console for errors
- Ensure scripts are loaded in correct order

### Images Not Displaying

**Problem**: Images don't show up

**Solutions**:
- Verify image files exist in `assets/images/` folder
- Check image file paths in HTML
- Ensure image file names match exactly (case-sensitive on some servers)
- Check file permissions on web server

### Fonts Not Loading

**Problem**: Text displays in default fonts

**Solutions**:
- Check internet connection (fonts load from Google Fonts CDN)
- Verify CDN links in HTML `<head>` section
- Check browser console for network errors
- Ensure no ad blockers are blocking Google Fonts

### Theme Switcher Not Working

**Problem**: Theme colors don't change

**Solutions**:
- Ensure `theme-switcher.js` is loaded after `main.js`
- Check browser console for JavaScript errors
- Clear browser cache
- Verify localStorage is enabled in browser

## Next Steps

After installation:

1. **Customize Content**: Edit text in `index.html`
2. **Change Colors**: Modify CSS variables in `style.css` or use theme switcher
3. **Add Images**: Place images in `assets/images/` folder
4. **Connect Forms**: Update form submission in `main.js`
5. **Test Responsiveness**: Check on different devices and browsers

## Support

If you encounter issues:

1. Check the Troubleshooting section above
2. Review the main README.md file
3. Check browser console for error messages
4. Verify all files are in correct locations
5. Contact support if problems persist

---

**Note**: This is a static HTML template. For dynamic features (form submissions, user authentication, etc.), you'll need to integrate with a backend service.

