import "../styles/Hero.css";

function Hero({ setActivePage }) {
  return (
    <section className="hero">
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

        <div className="hero__right">
          <div className="hero__emblem">
            <span className="hero__emblem-monogram">YV</span>
            <div className="hero__emblem-divider" />
            <span className="hero__emblem-brand">Your Veil LB</span>
            <div className="hero__emblem-divider" />
            <span className="hero__emblem-sub">Kuwaiti Hijabs · Lebanon</span>
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
