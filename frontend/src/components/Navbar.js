import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "fabrics", label: "Fabrics" },
  { id: "about", label: "About" },
];

function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      <div 
        className={`navbar__overlay ${menuOpen ? "navbar__overlay--visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__logo" onClick={() => handleNav("home")}>
          <span className="navbar__logo-monogram">YV</span>
          <span className="navbar__logo-name">Your Veil LB</span>
        </div>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <ul className="navbar__nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="navbar__nav-item">
                <button
                  className={activePage === link.id ? "active" : ""}
                  onClick={() => handleNav(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar__menu-btn ${menuOpen ? "navbar__menu-btn--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  );
}

export default Navbar;