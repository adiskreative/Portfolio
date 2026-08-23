# Portfolio — Adi Swandi

Personal portfolio website for a graphic designer & web developer operating under **Adi.sKreative**. A single-page static site built with vanilla HTML, CSS, and JavaScript — zero dependencies, no build tools required.

## Tech Stack

| Layer      | Technology |
|------------|------------|
| Markup     | HTML5 (semantic, accessible) |
| Styling    | CSS3 (Custom Properties, Grid, Flexbox, animations) |
| Scripting  | Vanilla JavaScript (ES6+) |
| Fonts      | Google Fonts — Inter (body) & Manrope (headings) |

## Features

- **Responsive Design** — Fluid layouts with breakpoints at 980px and 760px
- **Dark/Light Mode** — CSS custom properties toggled via JS, persisted in `localStorage`
- **Portfolio Filtering** — Filter projects by category (Graphic Design, Branding, UI/UX, Web Dev)
- **Project Detail Modal** — Dynamic modal with project overview, challenge, solution, and gallery
- **Scroll-Reveal Animations** — IntersectionObserver-based fade-in on scroll
- **Marquee Skills Ticker** — CSS-animated horizontal scroll of skill names
- **Mobile Navigation** — Hamburger menu for responsive viewports
- **Contact Form** — Client-side validation with email regex check
- **SEO Basics** — Meta tags, Open Graph, `robots.txt`, `sitemap.xml`
- **Accessibility** — Semantic HTML, ARIA labels, `prefers-reduced-motion` support, keyboard-navigable modal

## Folder Structure

```
portfolio/
├── index.html            # Main HTML page
├── styles.css            # All styles (responsive + dark mode)
├── script.js             # All interactive logic
├── robots.txt            # SEO crawl directives
├── sitemap.xml           # SEO sitemap
└── assets/
    ├── hero-illustration.png
    ├── profile-placeholder.png
    └── projects/
        ├── 003-Login-absen.jpeg
        ├── 01-pdf-compressed.JPG
        ├── 02-activator-win10-office365.JPG
        ├── 03-Absensi.jpeg
        ├── 04-Desain-grafis.JPG
        ├── 05-Game-Education.jpeg
        ├── cover.JPG
        └── icon-collection.JPG
```

## Getting Started

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

## Portfolio Projects

| # | Project | Description | Tech |
|---|---------|-------------|------|
| 1 | PDF Compressed | PDF compression tool | Python, JavaScript |
| 2 | Activator Win 10 & Office 365 | Windows/Office activation tool | Python, JavaScript |
| 3 | SIABSEN | Employee attendance web app with GPS & photo verification | PHP, Laravel, Tailwind CSS, MySQL |
| 4 | Desain Grafis | Graphic design portfolio (2010–2026) | Photoshop, Illustrator, Affinity Studio |
| 5 | Game Education | Educational game for early childhood (PAUD/TK) | HTML, PWA (Netlify) |

## Customization

- **Projects**: Edit the `projectData` array in `script.js` to add/remove portfolio items
- **Colors**: Modify CSS custom properties in `styles.css` under `:root` (light) and `.dark-theme` (dark)
- **Content**: All text is in `index.html` — sections are clearly commented

## License

This project is for personal use. All rights reserved by Adi Swandi.
