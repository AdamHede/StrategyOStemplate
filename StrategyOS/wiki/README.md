# Strategy Wiki

A static wiki that displays strategy documentation from the `/strategy` folder.

## Overview

This wiki provides a clean, navigable interface for viewing the Playing to Win strategy cascade. It's built with React and Vite, and compiles to static files that can be viewed in any browser.

## Design

The wiki follows the visual identity defined in `/skills/presentations/visual-identity/`:
- Uses brand colors and typography from `tokens.css`
- Clean, professional interface with sidebar navigation
- Responsive design for desktop and mobile viewing

## Architecture

- **Framework:** React + Vite
- **Markdown rendering:** react-markdown with GitHub Flavored Markdown support
- **Styling:** CSS with brand tokens
- **Build output:** Static HTML/CSS/JS files

## Usage

### Development Mode

To work on the wiki with live reload:

```bash
cd wiki
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Building the Wiki (Production)

**⚠️ IMPORTANT: The wiki must be rebuilt whenever strategy markdown files change.**

To compile the wiki to static files:

```bash
cd wiki
npm run build
```

This creates a `dist/` folder with static files. To preview the built version:

```bash
npm run preview
```

### Viewing the Built Wiki

After building, you can:
1. Open `wiki/dist/index.html` directly in a browser
2. Serve the `dist/` folder with any static file server
3. Deploy the `dist/` folder to any web hosting service

## Agent Instructions

**When strategy markdown files are modified:**

1. Always rebuild the wiki after updating any files in `/strategy/*.md`
2. Run the build command:
   ```bash
   cd wiki && npm run build
   ```
3. The wiki reads from the `../strategy` directory, so changes are automatically picked up during the build
4. Test the built wiki by running `npm run preview` or opening `dist/index.html`

**When to rebuild:**
- After processing inbox materials that update strategy
- After making any edits to strategy markdown files
- When syncing presentations with strategy changes
- As part of implementation step in AGENT.md workflow

## Project Structure

```
wiki/
├── src/
│   ├── App.jsx           # Main wiki application
│   ├── main.jsx          # React entry point
│   └── styles.css        # Brand-aligned styling
├── dist/                 # Built static files (created by npm run build)
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## Pages

The wiki automatically displays these strategy documents:

1. **Overview** — Strategy folder structure and conventions
2. **Winning Aspiration** — Purpose and definition of winning
3. **Where to Play** — Markets, segments, and channels
4. **How to Win** — Value proposition and competitive advantage
5. **Capabilities** — Required activities and competencies
6. **Management Systems** — Structures and measures
7. **Strategic Hypotheses** — Key assumptions (What Would Have to Be True)

## Customization

To add or remove pages, edit the `strategyPages` array in `src/App.jsx`.

## Technical Details

- **Base path:** Configured for relative paths (works from filesystem or web server)
- **Markdown features:** Full GitHub Flavored Markdown support (tables, task lists, etc.)
- **Last updated dates:** Automatically extracted from markdown HTML comments
- **Browser compatibility:** Modern browsers (ES6+)

## Troubleshooting

**"Failed to load content" error:**
- Ensure you've run `npm run build`
- Check that strategy markdown files exist in `../strategy/`
- Try viewing with `npm run preview` instead of opening `index.html` directly

**Styles not loading:**
- Ensure `npm install` completed successfully
- Rebuild with `npm run build`
- Check browser console for errors

**Changes not appearing:**
- Remember to rebuild: `npm run build`
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows/Linux)
