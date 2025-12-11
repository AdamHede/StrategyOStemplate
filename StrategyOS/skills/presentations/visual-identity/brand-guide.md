# Visual Identity Guide

Design standards for all outputs from this strategy system.

---

## Philosophy

Clean, professional, confident. Strategy work demands clarity—the visuals should support, not distract from, the thinking.

---

## Color Palette

Defined in `tokens.css`. The palette includes:

### Primary Colors
- **Primary** — Main brand color, used for emphasis and key elements
- **Primary Dark** — For hover states and high-contrast needs
- **Primary Light** — For backgrounds and subtle highlights

### Neutral Colors
- **Text** — Primary text color
- **Text Muted** — Secondary text, captions
- **Background** — Page/slide background
- **Surface** — Cards, elevated elements
- **Border** — Subtle dividers and outlines

### Semantic Colors
- **Success** — Positive indicators
- **Warning** — Caution indicators  
- **Danger** — Negative indicators, alerts

---

## Typography

### Font Stack
- **Headings:** System sans-serif (or specify brand font)
- **Body:** System sans-serif
- **Code/Data:** System monospace

### Scale
All sizes defined as CSS variables in `tokens.css`:
- `--text-xs` through `--text-3xl` for body text
- `--heading-1` through `--heading-4` for headings

### Hierarchy
- **H1:** Presentation titles, major section headers
- **H2:** Slide titles, primary headings
- **H3:** Subsection headings
- **H4:** Minor headings, labels
- **Body:** Primary content
- **Small:** Captions, metadata

---

## Spacing

Consistent spacing creates rhythm. Use the spacing scale in `tokens.css`:

- `--space-1` (4px) — Tight spacing, inline elements
- `--space-2` (8px) — Related elements
- `--space-4` (16px) — Standard spacing
- `--space-6` (24px) — Section spacing
- `--space-8` (32px) — Large gaps
- `--space-12` (48px) — Major sections

---

## Presentation-Specific Rules

### Slides
- Maximum ~40 words per slide for presentations
- One main idea per slide
- Generous whitespace
- Visuals support, not replace, the narrative

### Charts & Diagrams
- Label clearly
- Limit colors to what's necessary
- Use brand colors consistently
- Accessible contrast ratios

---

## Logo & Assets

Place logo files and other brand assets in `/visual-identity/assets/`.

Formats to include:
- SVG (preferred for web)
- PNG (fallback, multiple sizes)
- Dark and light versions if needed

---

## Customization

This is a template. When applying to a specific organization:

1. Update `tokens.css` with actual brand colors and fonts
2. Add logo files to `assets/`
3. Update this guide with organization-specific rules
4. Test with a sample presentation

---

## Accessibility

- Maintain WCAG AA contrast ratios minimum
- Don't rely on color alone to convey meaning
- Use semantic HTML in presentations
- Test with browser accessibility tools
