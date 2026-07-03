# Rajan Bam — Front-End Portfolio

> Course project for **Software Development Skills: Front-End (2025–26)**, LUT University.

A single-page, fully responsive personal portfolio built **from scratch** with
semantic HTML5, modern CSS (custom properties, Flexbox, CSS Grid, media queries)
and vanilla JavaScript — **no frameworks or libraries**.

**Author:** Rajan Bam
**Study:** Computer Science, LUT University, Lappeenranta, Finland
**Higher secondary (+2, Science):** Morgan International College, Kathmandu

---

## ✨ Features

- **Fixed navigation** with an animated pure-CSS hamburger menu on mobile
- **Hero section** with an animated gradient background, parallax blobs and rotating role text
- **Responsive layout** — mobile-first, tested from 320px up to large desktops
- **Flexbox & CSS Grid** used throughout (nav, cards, skills, footer)
- **Project cards** in a responsive CSS Grid with hover + subtle 3D tilt
- **Animated skill bars** and count-up statistics that trigger on scroll
- **Custom slideshow** with auto-play, arrows, dots and touch-swipe
- **Interactive FAQ accordion** (accessible, keyboard-friendly, one-open-at-a-time)
- **Light / dark theme toggle** with the choice saved to `localStorage`
- **Scroll-reveal animations**, scroll progress bar, scroll-spy nav and back-to-top button
- **Accessibility**: skip link, ARIA attributes, visible focus styles, `prefers-reduced-motion` support
- **Contact form** with front-end validation

---

## 📁 Project structure

```
rajan_bam_frontend/
├── index.html            # all page markup
├── css/
│   ├── base.css          # design tokens, reset, typography
│   ├── layout.css        # header/nav, sections, hero, footer scaffold
│   ├── components.css    # buttons, cards, skills, slideshow, accordion, forms
│   ├── animations.css    # hero blobs, keyframes, scroll-reveal
│   └── responsive.css    # media queries & mobile navigation
├── js/
│   └── main.js           # all interactions (menu, theme, slideshow, accordion…)
├── assets/
│   └── favicon.svg
├── docs/
│   └── LEARNING_DIARY.md  # learning diary (also see the .docx version)
├── VIDEO.md               # link to the project demo video
└── README.md
```

---

## ▶️ How to run it locally

No build step and no dependencies — it's plain HTML/CSS/JS.

**Option 1 — open the file directly**
1. Clone the repository:
   ```bash
   git clone https://github.com/sandippgautam/Rajan_Bam_Frontend.git
   cd Rajan_Bam_Frontend
   ```
2. Double-click `index.html`, or open it in your browser.

**Option 2 — run a local server** (recommended, so paths behave exactly like production)

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve .
```

Then visit **http://localhost:8000** in your browser.

> Tip: in VS Code you can also use the **Live Server** extension — right-click
> `index.html` → *Open with Live Server*.

---

## 🧾 Learning diary

The learning diary documenting the work (15 June → 3 July 2026) lives in
**[docs/LEARNING_DIARY.md](docs/LEARNING_DIARY.md)**.

---

## 🛠️ Built with

`HTML5` · `CSS3` (custom properties, Flexbox, Grid) · `JavaScript (ES6+)` · `Git & GitHub` · `GitHub Pages`

---

© 2026 Rajan Bam · LUT University
