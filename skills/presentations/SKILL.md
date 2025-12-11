# Presentations Skill

How to build and maintain client-facing presentations as HTML/CSS.

---

## Philosophy

Presentations are HTML/CSS files that look like slides but are actually web pages. This gives us:

- **Version control** — Track changes in git like any other file
- **Programmatic updates** — Strategy changes can flow to presentations
- **No vendor lock-in** — No PowerPoint, Keynote, or Google Slides
- **Web-native** — Can be hosted, shared via URL, responsive

---

## Source of Truth Rule

**`/strategy/*.md` files are authoritative.** 

Presentations *render* strategy content—they don't *define* it.

If a presentation diverges from strategy markdown:
1. Flag the discrepancy
2. Determine which is correct (usually markdown)
3. Update the presentation to match
4. Never update markdown to match a presentation without explicit discussion

---

## Folder Structure

```
outputs/presentations/
├── live/                    ← Current, must stay synced with strategy
│   └── strategy-overview.html
│   └── board-deck.html
└── archive/                 ← Versioned snapshots, can go stale
    └── 2025-01-15-strategy-overview.html
    └── 2025-01-10-board-deck.html
```

### Live Presentations
- Must accurately reflect current `/strategy/` content
- Updated whenever strategy changes affect them
- Limited set—only active presentations

### Archived Presentations  
- Point-in-time snapshots
- Named with date prefix
- Not updated—historical record
- Create archive copy before major changes to live versions

---

## Creating Presentations

### Basic Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Presentation Title]</title>
    <link rel="stylesheet" href="../visual-identity/tokens.css">
    <style>
        /* Presentation-specific styles */
    </style>
</head>
<body>
    <div class="presentation">
        <section class="slide" id="slide-1">
            <!-- Slide content -->
        </section>
        <!-- More slides -->
    </div>
</body>
</html>
```

### Slide Types

**Title Slide**
```html
<section class="slide slide--title">
    <h1>[Main Title]</h1>
    <p class="subtitle">[Subtitle or date]</p>
</section>
```

**Content Slide**
```html
<section class="slide">
    <h2>[Slide Title]</h2>
    <div class="content">
        <!-- Content here -->
    </div>
</section>
```

**Section Divider**
```html
<section class="slide slide--divider">
    <h2>[Section Name]</h2>
</section>
```

---

## Visual Identity Integration

All presentations must use the visual identity defined in:
- `/skills/presentations/visual-identity/brand-guide.md` — Rules and rationale
- `/skills/presentations/visual-identity/tokens.css` — CSS variables

**Always link tokens.css** rather than hardcoding colors, fonts, or spacing.

---

## Syncing with Strategy

When strategy files change:

1. **Identify affected presentations** — Which live presentations reference the changed content?
2. **Locate the content** — Find where in the HTML the strategy content appears
3. **Update the content** — Match the new strategy text/structure
4. **Verify rendering** — Check that the presentation still looks correct
5. **Note the sync** — Comment in HTML: `<!-- Synced with strategy: YYYY-MM-DD -->`

---

## Archiving Process

Before making significant changes to a live presentation:

```bash
cp outputs/presentations/live/[name].html \
   outputs/presentations/archive/YYYY-MM-DD-[name].html
```

Then update the live version.

---

## Navigation (Optional)

For presentations that need keyboard/click navigation:

```html
<script>
    // Basic slide navigation
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
        if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
    });
    
    showSlide(0);
</script>
```

---

## Quality Checklist

Before finalizing a presentation:

- [ ] Content matches current strategy files
- [ ] Uses tokens.css for all colors/fonts/spacing
- [ ] Renders correctly in browser
- [ ] Slides are appropriately paced (not too dense)
- [ ] Source of truth references added as HTML comments
- [ ] Archived previous version if significant changes
