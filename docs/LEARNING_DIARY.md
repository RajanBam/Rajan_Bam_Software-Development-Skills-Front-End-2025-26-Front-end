# Lappeenrannan teknillinen yliopisto (LUT University)
### School of Engineering Science

**Software Development Skills: Front-End — Online course, 2025–26**

**Name:** Rajan Bam &nbsp;·&nbsp; **Student number:** _< insert student number >_

---

# LEARNING DIARY — FRONT-END MODULE

Author: **Rajan Bam** — Computer Science, LUT University, Lappeenranta.
Higher secondary education (+2, Science stream): Morgan International College, Kathmandu.

Diary period: **15 June 2026 → 3 July 2026**.

---

### Date: 15.6.2026
**Activity:** Read the general course information, set up the environment, watched *Introduction and Base HTML* [0:00], created the Git repository and the first commit.

**Learning outcome:**
I started by reading the general course information carefully so I understood the goal of the module — to combine HTML, CSS and JavaScript into a real, responsive web page and to reflect everything in this diary. I set up my environment with VS Code and added a few extensions (Live Server, Prettier, and an HTML/CSS helper). Setting up Live Server was the small win of the day — being able to see changes instantly made everything click. I then initialised my Git repository, wrote a short README skeleton and made my very first commit. I also watched the intro video and learned what *responsive design* actually means: the same content adapting to any screen size instead of building separate pages. I finished by laying out the base HTML document — doctype, `<head>` meta tags, a "skip to main content" link for accessibility, and an empty `<main>` ready to fill.

---

### Date: 17.6.2026
**Activity:** Watched *Links and Core CSS* [19:20]. Created the homepage markup (navigation + hero) and wrote the core CSS.

**Learning outcome:**
Today was about structure and the foundation of the styling. I built the navigation markup and the hero section in `index.html`, then started the CSS. The most useful new idea was **CSS custom properties (variables)** — I created a `:root` block with my colour palette, spacing and type scale, so I can change the whole look from one place. I also learned about **nesting**-style organisation by splitting my CSS into separate files (`base`, `layout`, `components`) and linking them in order, which keeps things tidy. I experimented with a *fluid type scale* using `clamp()` so the text resizes smoothly between phone and desktop without lots of breakpoints. It took me a while to understand `clamp(min, preferred, max)`, but once I saw the headings scale live in the browser it made sense.

---

### Date: 19.6.2026
**Activity:** Watched *Buttons & Utility Classes* [31:00]. Built a pure-CSS menu button and styled buttons with utility classes.

**Learning outcome:**
I learned how to make a menu button using only CSS/HTML — no images. The hamburger is made from a single element with `::before` and `::after` pseudo-elements, and it animates into an "X" using transforms. Understanding that pseudo-elements can be positioned and rotated was a real "aha" moment. I then created a small set of **button components** (`.btn`, `.btn-primary`, `.btn-ghost`, `.btn-outline`) and **utility classes** so I can reuse styles instead of repeating myself. I spent extra time on the hover and `:active` states and on `:focus-visible`, because I read that keyboard users need a clear focus outline. Small detail, but it made the buttons feel much more "finished".

---

### Date: 21.6.2026
**Activity:** Watched *CSS Grid & Cards* [56:00]. Created content cards and displayed them uniformly with CSS Grid.

**Learning outcome:**
This was my favourite part so far. I built a **Projects** section with cards and laid them out using **CSS Grid**. The trick that impressed me was `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` — the grid automatically decides how many columns fit and keeps every card an equal width, fully responsive with a single line. I compared it with Flexbox and now understand the difference: Flexbox is great for one-dimensional rows (like my nav), while Grid shines for two-dimensional layouts (like the card grid and the footer). I added hover effects that lift each card, and later a subtle 3D tilt. I also added a "call to action" card at the end of the grid to make the section feel intentional.

---

### Date: 23.6.2026
**Activity:** Built the *About* section and personalised the site with my own details.

**Learning outcome:**
The course says the project should "look more like you", so today I made it personal. I wrote the About section with a two-column layout (a portrait/identity card on one side, my story on the other) using Grid, which collapses to a single column on mobile. I added my real background — studying Computer Science at LUT University in Lappeenranta, and my +2 Science studies at Morgan International College in Kathmandu. Technically, the new thing I learned was `aspect-ratio` for keeping the avatar a perfect square, and layering multiple `radial-gradient`s in a single `background` property to give the identity card depth. Writing about myself was harder than the code — I rewrote the paragraphs a few times to sound natural.

---

### Date: 25.6.2026
**Activity:** Built the *Skills* section with animated progress bars and count-up statistics.

**Learning outcome:**
I created a skills section using a responsive Grid and animated progress bars. This was my first real use of the **IntersectionObserver API** in JavaScript: the bars stay empty until the section scrolls into view, then fill up. Learning that I could *observe* when an element enters the viewport — instead of listening to every scroll event — felt like proper front-end knowledge. I reused the same idea to make the hero statistics "count up" from zero using `requestAnimationFrame` and an easing function. I had a bug where the counter finished instantly; it turned out I was comparing time incorrectly, and reading the MDN docs on `performance.now()` fixed it.

---

### Date: 27.6.2026
**Activity:** Built a responsive image slideshow (from the *Slideshow* tutorial suggested in the project brief).

**Learning outcome:**
I added an optional extra from the project list: a **responsive image slideshow**. I built it entirely in vanilla JavaScript — auto-play with `setInterval`, previous/next arrows, clickable dots that I generate dynamically, and **touch-swipe** support using `touchstart`/`touchend`. The concept I learned best here was managing a single "active index" in state and using the modulo operator (`%`) to loop around the ends cleanly. I also made it pause on hover and respect `prefers-reduced-motion` so it doesn't auto-advance for users who prefer less movement. Accessibility kept coming up as a theme, and I'm starting to build the habit.

---

### Date: 29.6.2026
**Activity:** Watched *FAQ elements* [1:12:20]. Added the FAQ accordion and the footer with navigation.

**Learning outcome:**
I built the interactive **accordion** for the FAQ section. Instead of animating `height` (which can't be animated from/to `auto`), I learned a modern technique using CSS Grid: transitioning `grid-template-rows` from `0fr` to `1fr`, which gives a smooth expand/collapse for any amount of content. I wired it up with JavaScript so only one item is open at a time and updated `aria-expanded` on each trigger for screen readers. I then added the **footer** with navigation columns using Grid, plus a "back to top" link. Seeing the page finally have a proper top-to-bottom structure was really satisfying.

---

### Date: 1.7.2026
**Activity:** Watched *Mobile Menu & Responsiveness* [1:47:05]. Added the mobile menu and responsive media queries; finished the core JavaScript interactions.

**Learning outcome:**
This was the day everything became truly responsive. I learned to use **media queries** to restyle the layout at different widths — collapsing the multi-column sections to single columns on tablets, and turning the navigation into a slide-in mobile menu with a dimmed backdrop below 820px. The concept that clicked was thinking **mobile-first**: write the base styles for small screens, then layer enhancements for larger ones. On the JavaScript side I finished the menu toggle (with `aria-expanded`, Escape-to-close and click-outside-to-close), the **theme toggle** that saves the choice in `localStorage`, and a scroll-spy that highlights the current section in the nav. I tested down to 320px in DevTools and fixed a couple of overflow issues.

---

### Date: 2.7.2026
**Activity:** Added parallax and scroll-reveal effects, then polished the whole site and improved accessibility.

**Learning outcome:**
Today was about the finishing touches that make a site feel alive. I added a gentle **parallax** effect on the hero background blobs by translating them a fraction of the scroll distance, and **scroll-reveal** animations so sections fade in as you reach them (again using IntersectionObserver). I added a cursor-follow glow and a scroll-progress bar for a bit of personality. Importantly, I wrapped all of these in a `prefers-reduced-motion` check so the site is calm for anyone who needs that. I did an accessibility pass: checked colour contrast, made sure every interactive element is keyboard reachable with a visible focus ring, and added `alt`/`aria` labels. I learned that "impressive" and "accessible" are not opposites — good motion is subtle and optional.

---

### Date: 3.7.2026
**Activity:** Watched *Website Deployment* [Part 7]. Deployed the site with GitHub Pages, wrote the README, recorded the demo video and completed this learning diary.

**Learning outcome:**
The final day. I learned how to **deploy a static site with GitHub Pages** — enabling Pages in the repository settings, pointing it at the `main` branch, and adding a `.nojekyll` file so all my assets are served as-is. Watching my own site go live on a real URL was the highlight of the whole course. I wrote a thorough **README** explaining how to run the project locally (open the file, or serve it with `python -m http.server`) and how the deployment works, recorded a short **demo video** walking through the features, and linked it from the repo. Finally I finished this diary. Looking back over three weeks, I went from an empty `index.html` to a complete, responsive, deployed portfolio — and, more importantly, I now understand *why* each piece works, not just how to copy it.

---

## Reflection

The biggest thing this module gave me was **confidence with the fundamentals**. I can now structure a page semantically, style it responsively with Flexbox and Grid, add meaningful interactivity with plain JavaScript, and ship it to the web. I deliberately avoided frameworks so I would understand what they do for me later. If I were to continue, I'd add a real backend for the contact form and split the components so I could reuse them across projects. I'm proud that the result looks like *me* — not a template.
