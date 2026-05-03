(function () {
  function revealAll(elements) {
    elements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  function initScrollAnimations() {
    const animatedElements = Array.from(document.querySelectorAll(".animate-on-scroll"));

    if (!animatedElements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealAll(animatedElements);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    animatedElements.forEach((element) => observer.observe(element));
  }

  window.initScrollAnimations = initScrollAnimations;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollAnimations);
  } else {
    initScrollAnimations();
  }
})();
