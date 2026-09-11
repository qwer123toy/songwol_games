/**
 * Songwol Games hub — light progressive enhancement
 * - Respects prefers-reduced-motion
 * - Soft reveal if CSS animation missed (e.g. late paint)
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    document.querySelectorAll(".fade-in").forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.animation = "none";
    });
    return;
  }

  // Ensure cards that were below the fold still feel alive on slow devices
  if ("IntersectionObserver" in window) {
    var cards = document.querySelectorAll(".game-card");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach(function (card) {
      observer.observe(card);
    });
  }
})();
