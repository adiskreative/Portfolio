# Portfolio — Adi.sKreative

Personal portfolio website for a graphic designer & web developer operating under **Adi.sKreative**. A single-page static site built with vanilla HTML, CSS, and JavaScript — zero dependencies, no build tools required.

---

## 🚀 Live Demo

**Website:** [adiskreative.netlify.app](https://adiskreative.netlify.app)  
**Repository:** [github.com/adiskreative/Portfolio](https://github.com/adiskreative/Portfolio)

---

## 🛠 Tech Stack

| Layer      | Technology |
|------------|------------|
| Markup     | HTML5 (semantic, accessible) |
| Styling    | CSS3 (Custom Properties, Grid, Flexbox, animations) |
| Scripting  | Vanilla JavaScript (ES6+) |
| Fonts      | Google Fonts — Inter (body) & Manrope (headings) |
| Deployment | Netlify / GitHub Pages (static hosting) |
| Image Opt. | Sharp (Node.js script for WebP conversion) |

---

## ✨ Features

- **Responsive Design** — Fluid layouts with breakpoints at 1200px, 1024px, 980px, 768px, 480px, 360px
- **Dark/Light Mode** — CSS custom properties toggled via JS, persisted in `localStorage`
- **Portfolio Filtering** — Filter projects by category (Graphic Design, Branding, UI/UX, Web Dev)
- **Project Detail Modal** — Dynamic modal with project overview, challenge, solution, gallery, and tools
- **Scroll-Reveal Animations** — IntersectionObserver-based fade-in on scroll
- **Marquee Skills Ticker** — CSS-animated horizontal scroll of skill names
- **Mobile Navigation** — Hamburger menu for responsive viewports (< 768px)
- **Contact Form** — Client-side validation with email regex check, submitted via Formspree
- **SEO Basics** — Meta tags, Open Graph, `robots.txt`, `sitemap.xml`
- **Accessibility** — Semantic HTML, ARIA labels, `prefers-reduced-motion` support, keyboard-navigable modal
- **Touch-Friendly** — Optimized tap targets for mobile devices
- **Safe Area Support** — Handles iPhone notch & Dynamic Island via CSS `env()`
- **Landscape Mode Handling** — Optimized hero section for short viewports

---

## 📁 Folder Structure

```
portfolio/
├── index.html              # Main HTML page
├── styles.css              # All styles (responsive + dark mode)
├── script.js               # All interactive logic
├── robots.txt              # SEO crawl directives
├── sitemap.xml             # SEO sitemap
├── package.json            # Node.js config (Sharp for image optimization)
├── compress-images.js      # Script to convert images to WebP
├── .gitignore
└── assets/
    ├── hero-illustration.png
    ├── hero-illustration.webp
    ├── profile-placeholder.png
    ├── profile-placeholder.webp
    └── projects/
        ├── PDF/
        │   └── 01-pdf-compressed.webp
        ├── Activator/
        │   └── 02-activator-win10-office365.webp
        ├── Absensi/
        │   ├── 03-Absensi.webp
        │   └── 003-Login-absen.webp
        ├── Desain-grafis/
        │   ├── 04-Desain-grafis.webp
        │   ├── cover.webp
        │   ├── idcard.webp
        │   ├── shape.webp
        │   ├── red.webp
        │   ├── bidan.webp
        │   ├── icon-collection.webp
        │   ├── batikparimolomba.webp
        │   ├── buildingLOGO.webp
        │   ├── coverkeu.webp
        │   ├── 1.webp
        │   ├── 1.1.webp
        │   ├── 2.webp
        │   ├── street.webp
        │   ├── logorenkeu.webp
        │   ├── microUMK.webp
        │   ├── posterlegacy.webp
        │   ├── spanduk.webp
        │   └── ui-ux.webp
        └── Game-Education/
            └── 05-Game-Education.webp
```

---

## 🏁 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js v18+ for image optimization script

### Quick Start (No Build Required)
```bash
# Clone the repository
git clone https://github.com/adiskreative/Portfolio.git
cd Portfolio

# Open directly in browser
# Windows
start index.html
# macOS
open index.html
# Linux
xdg-open index.html

# Or serve with any static file server:
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

### Image Optimization (Optional)
Convert PNG/JPG images to WebP for better performance:
```bash
# Install dependencies
npm install

# Run compression script
node compress-images.js
```

---

## 📋 Portfolio Projects

| # | Project | Category | Tech Stack | Year |
|---|---------|----------|------------|------|
| 1 | **PDF Compressed** | Documentation / Compression | Python, JavaScript | 2026 |
| 2 | **Activator Win 10 & Office 365** | Software Development | Python, JavaScript | 2026 |
| 3 | **SIABSEN — Web Absensi** | Web Development | PHP, Laravel, Tailwind CSS, MySQL, JavaScript | 2026 |
| 4 | **Desain Grafis (2010–2026)** | Graphic Design | Photoshop, Illustrator, Affinity Studio | 2010–2026 |
| 5 | **Game Education (PWA)** | Game / Education | HTML, PWA (Netlify) | 2026 |

---

## 🎨 Customization

### Projects
Edit the `projects` array in `script.js` to add/remove/modify portfolio items:
```javascript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category Name',
    type: 'filter-key', // Must match filter button data-filter
    year: '2026',
    role: 'Your Role',
    tools: ['Tool 1', 'Tool 2'],
    image: 'assets/projects/folder/image.webp',
    description: 'Project description...',
    challenge: 'Challenge faced...',
    solution: 'Solution implemented...',
    gallery: [
      'assets/projects/folder/image1.webp',
      'assets/projects/folder/image2.webp'
    ],
    liveUrl: 'https://example.com' // or '#' for no link
  }
];
```

### Colors & Theming
Modify CSS custom properties in `styles.css`:
```css
:root {
  --bg: #f4efe9;           /* Light background */
  --bg-alt: #efe7df;       /* Alternative background */
  --panel: rgba(255,255,255,0.55);  /* Card/panel background */
  --text: #171614;         /* Primary text */
  --muted: #5f5a56;        /* Secondary text */
  --accent: #8d6d4a;       /* Accent color */
  --line: rgba(23,22,20,0.12);      /* Border color */
  --shadow-soft: 0 18px 48px rgba(27,22,19,0.08);
  --container: min(1200px, calc(100% - 2rem));
  --radius-lg: 30px;
  --radius-md: 20px;
  --radius-sm: 12px;
}

body.dark-theme {
  --bg: #141312;
  --bg-alt: #1b1a18;
  --panel: rgba(24,24,22,0.7);
  --text: #f2eee9;
  --muted: #b8b0a7;
  --accent: #d3b38d;
  /* ... more overrides */
}
```

### Content
All text content is in `index.html` — sections are clearly commented:
- Hero section
- Portfolio/Works
- About
- Skills & Tools
- Services
- Experience Timeline
- Testimonial
- Contact Form
- Footer

---

## 📱 Responsive Breakpoints

| Breakpoint | Target Devices |
|------------|----------------|
| ≥ 1200px | Desktop (default) |
| 1024px | Tablet landscape / small desktop |
| 980px | Tablet (standard) |
| 768px | Tablet portrait / large phone |
| 480px | Small phone (standard Android) |
| 360px | Very small phone (budget Android) |

---

## ♿ Accessibility Features

- Semantic HTML5 structure (header, nav, main, section, article, footer)
- ARIA labels on interactive elements
- Keyboard-navigable modal (ESC to close, focus trap)
- `prefers-reduced-motion` support — disables animations for users who prefer reduced motion
- Sufficient color contrast ratios (WCAG AA)
- Alt text on all images
- Focus-visible styles for keyboard navigation
- Touch targets ≥ 44×44px on mobile

---

## 🔧 Scripts

| Script | Purpose |
|--------|---------|
| `npm run compress` | Convert PNG/JPG to WebP using Sharp (defined in package.json) |
| `python -m http.server` | Quick local server for testing |
| `npx serve .` | Node.js static server |

---

## 📦 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: *none* (static site)
3. Publish directory: `.` (root)
4. Deploy!

### GitHub Pages
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `(root)`
4. Save

### Any Static Host
Upload all files to any static hosting (Vercel, Cloudflare Pages, Firebase Hosting, etc.)

---

## 📄 License

This project is for personal use. All rights reserved by **Adi Swandi (Adi.sKreative)**.

---

## 👤 Author

**Adi Swandi**  
- Email: [adi.skreative@gmail.com](mailto:adi.skreative@gmail.com)
- WhatsApp: [+62 823-9988-9992](https://wa.me/+6282399889992)
- Instagram: [@adi.skreative](https://instagram.com/adi.skreative)
- TikTok: [@adi.skreative](https://tiktok.com/@adi.skreative)
- GitHub: [@adi-skreative](https://github.com/adi-skreative)
- Facebook: [3rrorSITE](https://facebook.com/3rrorSITE)
- Shutterstock: [Adiskreative](https://www.shutterstock.com/id/g/Adiskreative)

---

> Built with vanilla HTML, CSS & JavaScript — no frameworks, no build step, no dependencies.