# Wiki Quick Start

## For Agents

When you modify any files in `/strategy/*.md`, you MUST rebuild the wiki:

```bash
cd wiki && npm run build
```

That's it! The wiki will be updated in `wiki/dist/`.

## For Humans

### First Time Setup

```bash
cd wiki
npm install
npm run build
```

### View the Wiki

Open `wiki/dist/index.html` in your browser.

Or run a preview server:

```bash
cd wiki
npm run preview
```

### Develop the Wiki

If you want to modify the wiki itself:

```bash
cd wiki
npm run dev
```

Then open `http://localhost:5173` in your browser. Changes will hot-reload.

---

**Remember:** The wiki must be rebuilt (`npm run build`) whenever strategy markdown files change!
