/* =====================================================================
   accordion.js — accessible FAQ accordion (one item open at a time).
   ===================================================================== */
(function () {
  "use strict";
  const { $, $$ } = window.RB;

  $$("#accordion .acc-item").forEach((item) => {
    const trigger = $(".acc-trigger", item);
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // close others (classic accordion behaviour)
      $$("#accordion .acc-item.open").forEach((o) => {
        if (o !== item) { o.classList.remove("open"); $(".acc-trigger", o).setAttribute("aria-expanded", "false"); }
      });
      item.classList.toggle("open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });
})();
