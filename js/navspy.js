/* =====================================================================
   navspy.js — highlight the current section link in the nav while scrolling.
   ===================================================================== */
(function () {
  "use strict";
  const { $$ } = window.RB;

  const sections = $$("main section[id]");
  const navLinks = $$(".nav-menu a[href^='#']");
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
})();
