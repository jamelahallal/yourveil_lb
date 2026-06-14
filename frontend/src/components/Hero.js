import "../styles/Hero.css";
import bannerImage from "../assests/logo1.jpeg"; // swap this for whichever photo you want as the banner

function Hero({ setActivePage }) {
  return (
    <section className="hero">
      {/* ── Banner ── */}
      <div className="hero__banner">
        <img
          src={bannerImage}
          alt="Your Veil LB — Latest Collection"
          className="hero__banner-img"
        />
        <div className="hero__banner-overlay">
          <button
            className="btn btn--primary hero__banner-cta"
            onClick={() => setActivePage("fabrics")}
          >
            Check Our Latest Collection
          </button>
        </div>
      </div>

      <div className="hero__bg">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
      </div>

      <div className="hero__content">
        <div className="hero__left fade-up">
          <span className="hero__tagline">Your Veil LB — Lebanon</span>

          <h1 className="hero__heading">
            More Than<br />
            <em>a Hijab.</em>
          </h1>

          <p className="hero__sub-heading">
            A feeling of elegance, comfort & confidence.
          </p>

          <p className="hero__description">
            A modern modestwear brand created for women who love elegance,
            softness, and confidence. We craft premium hijabs from the
            finest Kuwaiti fabrics — timeless shades, luxurious feel,
            beautifully you.
          </p>

          <div className="hero__cta">
            <button
              className="btn btn--primary"
              onClick={() => setActivePage("fabrics")}
            >
              Explore Fabrics
            </button>
            <button
              className="btn btn--outline"
              onClick={() => setActivePage("about")}
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stats-inner">
          <div className="hero__stat">
            <div className="hero__stat-value">Premium</div>
            <div className="hero__stat-label">Kuwaiti Fabrics</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">Timeless</div>
            <div className="hero__stat-label">Shades & Styles</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">Crafted</div>
            <div className="hero__stat-label">With Intention</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
