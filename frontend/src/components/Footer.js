import "../styles/Footer.css";

/* ── SVG Icon components ── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.01" strokeWidth="3" />
  </svg>
);



function Footer({ setActivePage }) {
  const nav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__main">

        {/* ── Brand ── */}
        <div className="footer__brand">
          <span className="footer__brand-monogram">YV</span>
          <span className="footer__brand-name">Your Veil LB</span>
          <p className="footer__brand-desc">
            A modern modestwear brand from Lebanon, offering premium Kuwaiti
            hijabs crafted for women who love elegance, softness, and
            confidence.
          </p>
        </div>

        {/* ── Navigation ── */}
        <div className="footer__col">
          <span className="footer__col-title">Navigation</span>
          <ul className="footer__links">
            <li><button onClick={() => nav("home")}>Home</button></li>
            <li><button onClick={() => nav("about")}>About Us</button></li>
            <li><button onClick={() => nav("fabrics")}>Our Fabrics</button></li>
          </ul>
        </div>

        {/* ── Follow Us ── */}
        <div className="footer__col">
          <span className="footer__col-title">Follow Us</span>
          <ul className="footer__links">
            <li>
              {/* Social Icons */}
          <div className="footer__social">
            <a
              className="footer__social-link"
              href="https://instagram.com/yourveillb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon />
            </a>
            <button onClick={() => window.open("https://instagram.com/yourveillb", "_blank")}>
                Instagram
              </button>
          </div>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Your Veil LB — All Rights Reserved
        </p>
        <span className="footer__motto">Elegant. Comfortable. Confident.</span>
      </div>
    </footer>
  );
}

export default Footer;
