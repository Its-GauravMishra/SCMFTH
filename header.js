(function () {
  const LOGO_PATH = "images/logo.png";

  function injectHeader() {
    const root = document.getElementById("header-root");
    if (!root) return;

    root.innerHTML = `
      <header class="site-header" data-component="header">
        <div class="top-bar">
          <div class="top-bar-left">
            <a href="tel:9450263599" aria-label="Call school">☎ 9450263599</a>
            <span aria-hidden="true">|</span>
            <a href="mailto:svmicftp@gmail.com" aria-label="Email school">✉ svmicftp@gmail.com</a>
          </div>
          <div class="top-bar-right">Mon–Sat: 9:00 AM – 4:00 PM</div>
        </div>

        <nav class="navbar" id="main-navbar">
          <div class="nav-container">

            <a href="index.html" class="nav-logo">
              <div class="logo-icon" aria-hidden="true">
                <img src="${LOGO_PATH}" alt="School Logo">
              </div>
              <div class="logo-text">
                <span class="logo-hindi">सरस्वती विद्या मंदिर</span>
                <span class="logo-english">Inter College Fatehpur</span>
              </div>
            </a>

            <button class="hamburger" id="hamburger-btn" aria-label="Toggle navigation" aria-expanded="false">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>

            <ul class="nav-links" id="nav-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="academic.html">Academics</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>

          </div>
        </nav>
      </header>
    `;
  }

  function initHeaderBehavior() {
    const btn = document.getElementById("hamburger-btn");
    const links = document.getElementById("nav-links");

    btn.addEventListener("click", () => {
      const isOpen = links.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.classList.toggle("active", isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("nav-open");
        btn.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!btn.contains(event.target) && !links.contains(event.target)) {
        links.classList.remove("nav-open");
        btn.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("main-navbar");
      if (!navbar) return;
      if (window.scrollY > 60) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }, { passive: true });

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage) link.classList.add("active");
    });
  }

  function initHeader() {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    injectHeader();
    initHeaderBehavior();

    window.addEventListener("load", () => window.scrollTo(0, 0), { once: true });
  }

  window.injectHeader = injectHeader;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeader);
  } else {
    initHeader();
  }
})();
