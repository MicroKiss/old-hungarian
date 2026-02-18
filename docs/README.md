# Old Hungarian Script Converter - Demo Page

This is an interactive demo page for the Old Hungarian script converter library.

## Live Demo

Visit the live demo at: **https://MicroKiss.github.io/old-hungarian/**

## Setup Instructions

### GitHub Pages Deployment

This demo is configured to deploy via GitHub Pages from the `/docs` folder.

1. **Build and prepare the demo:**
   ```bash
   npm run demo:prepare
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update demo"
   git push
   ```

3. **Enable GitHub Pages (one-time setup):**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select source: **main branch** → **/docs folder**
   - Save

4. **Access the demo:**
   - Your demo will be live at: `https://MicroKiss.github.io/old-hungarian/`

### Local Development

1. **Build the library and prepare demo:**
   ```bash
   npm run demo:prepare
   ```

2. **Serve the docs folder locally:**
   
   Using Python:
   ```bash
   cd docs
   python -m http.server 8000
   ```
   
   Or using Node.js `http-server`:
   ```bash
   npx http-server docs -p 8000
   ```

3. **Open in browser:**
   - Navigate to `http://localhost:8000`

**Note:** Whenever you make changes to the library source code, run `npm run demo:prepare` to rebuild and update the demo files.

## Features

- **Text Converter**: Convert between Latin and Old Hungarian script
- **Examples**: Quick-load example texts
- **Character Reference**: Interactive character table
- **Options**: Strict mode and number format settings
- **Responsive Design**: Works on desktop and mobile

## Browser Compatibility

The demo page requires a modern browser with:
- ES6 modules support
- Old Hungarian Unicode font support (most modern browsers include this)

## Notes

- The demo uses the built library from `dist/index.js`
- Make sure to run `npm run demo:prepare` before deploying
- The `docs/dist/` folder is gitignored and generated on build
- For best font rendering, ensure your browser has Old Hungarian script support
