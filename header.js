(function () {
  function injectHeader() {
    const root = document.getElementById("header-root");

    if (!root) {
      return;
    }

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

            <!-- LOGO -->
            <a href="index.html" class="nav-logo">
              <div class="logo-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" role="img" focusable="false">
                  <path d="M32 6c7.9 5.4 12 12.3 12 20.5C44 36.1 38.4 42 32 42s-12-5.9-12-15.5C20 18.3 24.1 11.4 32 6Z" fill="currentColor" opacity="0.18"/>
                  <path d="M19 43c8.7 1.8 17.3 1.8 26 0 1.6 0 2.8 1.2 2.8 2.8v1.4c0 1.6-1.2 2.8-2.8 2.8H19c-1.6 0-2.8-1.2-2.8-2.8v-1.4c0-1.6 1.2-2.8 2.8-2.8Z" fill="currentColor"/>
                  <path d="M24 23c5.3 3.6 10.7 3.6 16 0M25 31c4.7 2.6 9.3 2.6 14 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                  <path d="M32 14v34M13 54h38" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="logo-text">
                <span class="logo-hindi">सरस्वती विद्या मंदिर</span>
                <span class="logo-english">Inter College Fatehpur</span>
              </div>
            </a>

            <!-- HAMBURGER BUTTON (visible only on mobile) -->
            <button class="hamburger" id="hamburger-btn" aria-label="Toggle navigation" aria-expanded="false">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>

            <!-- NAV LINKS -->
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
    const navbar = document.getElementById("main-navbar");

    if (!btn || !links || !navbar) {
      return;
    }

    const closeMenu = () => {
      links.classList.remove("nav-open");
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = links.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.classList.toggle("active", isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!btn.contains(event.target) && !links.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    const updateNavbar = () => {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((link) => {
      const href = link.getAttribute("href");

      if (href === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function initHeader() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

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
