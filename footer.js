(function () {
  const LOGO_PATH = "images/logo.png";

  const quickLinks = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About Us" },
    { href: "academic.html", label: "Academics" },
    { href: "gallery.html", label: "Gallery" },
    { href: "contact.html", label: "Contact" }
  ];

  function buildQuickLinks() {
    return quickLinks.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join("");
  }

  function injectFooter() {
    const root = document.getElementById("footer-root");
    if (!root) return;

    root.innerHTML = `
      <footer class="site-footer" data-component="footer">
        <div class="footer-main">
          <div class="container footer-grid">
            <section class="footer-column footer-about" aria-labelledby="footer-about-title">
              <div class="footer-brand">
                <img class="footer-logo" src="${LOGO_PATH}" alt="School Logo">
                <h2 id="footer-about-title">
                  <span class="footer-title-hi">सरस्वती विद्या मंदिर</span>
                  <span class="footer-title-en">Inter College Fatehpur</span>
                </h2>
              </div>
              <p class="footer-tagline">भारतीय संस्कारों से युक्त शिक्षा पद्धति</p>
              <p>Affiliated with Vidya Bharati &amp; UP Board since 1979.</p>
            </section>

            <nav class="footer-column" aria-labelledby="footer-links-title">
              <h2 id="footer-links-title">Quick Links</h2>
              <ul class="footer-links">
                ${buildQuickLinks()}
              </ul>
            </nav>

            <section class="footer-column" aria-labelledby="footer-contact-title">
              <h2 id="footer-contact-title">Contact Info</h2>
              <ul class="footer-contact">
                <li>
                  <span aria-hidden="true">📍</span>
                  <span>VIP Road, Near Dak Bungalow, G.T. Road,<br>Tambeshwar Puram, Fatehpur, UP – 212601</span>
                </li>
                <li>
                  <span aria-hidden="true">📞</span>
                  <a href="tel:9532166743">9532166743</a>
                </li>
                <li>
                  <span aria-hidden="true">📧</span>
                  <a href="mailto:svmicftp@gmail.com">svmicftp@gmail.com</a>
                </li>
                <li>
                  <span aria-hidden="true">🕐</span>
                  <span>Mon–Sat: 9:00 AM – 4:00 PM</span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p>© 2025 Saraswati Vidya Mandir Inter College Fatehpur. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }

  window.injectFooter = injectFooter;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectFooter);
  } else {
    injectFooter();
  }
})();
