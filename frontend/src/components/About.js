import "../styles/About.css";

const values = [
  {
    n: "01",
    name: "High Quality",
    text: "We choose only the finest fabrics to ensure comfort, durability, and a luxurious feel in every single piece we craft.",
  },
  {
    n: "02",
    name: "Trust",
    text: "We build trust through honesty, transparency, and products you can rely on — because your confidence in us means everything.",
  },
  {
    n: "03",
    name: "Customer Service",
    text: "We are here for you every step of the way. Your satisfaction is not just a goal — it is our standard.",
  },
  {
    n: "04",
    name: "Premium Fabrics",
    text: "Carefully selected materials that bring you elegance, comfort, and the confidence to move through your day beautifully.",
  },
  {
    n: "05",
    name: "Our Intention",
    text: "We design each piece with the intention to make you feel elegant, confident, and beautifully you — every single day.",
  },
];

const experiences = [
  {
    n: "01",
    title: "Always Here for You",
    text: "Our customer service team is always ready to help you with care, kindness, and a quick, attentive response.",
  },
  {
    n: "02",
    title: "Packed with Care",
    text: "Every order is carefully prepared with attention to detail and a touch of luxury — because presentation matters.",
  },
  {
    n: "03",
    title: "Trust & Transparency",
    text: "We believe in honest communication, clear policies, and building long-lasting trust with every woman who wears our pieces.",
  },
  {
    n: "04",
    title: "You Matter",
    text: "Your satisfaction means everything. We listen, we care, and we grow because of you — our community.",
  },
];

function About() {
  return (
    <div className="about">

      {/* ── HERO BANNER ── */}
      <div className="about__banner">
        <div className="about__banner-bg" />
        <div className="about__banner-pattern" />
        <div className="about__banner-content">
          <span className="about__banner-label">Your Veil LB</span>
          <h1 className="about__banner-title">
            Who We <em>Are</em>
          </h1>
        </div>
      </div>

      {/* ── IDENTITY ── */}
      <div className="about__identity">
        <div className="about__identity-visual">
          <div className="about__identity-visual-inner">
            <span className="about__identity-monogram">YV</span>
            <span className="about__identity-brand">Your Veil LB</span>
          </div>
        </div>

        <div className="about__identity-text">
          <span className="about__identity-label">Our Story</span>
          <h2 className="about__identity-heading">
            A brand built on<br /><em>modesty &amp; elegance</em>
          </h2>
          <p className="about__identity-body">
            Welcome to <strong>Your Veil LB</strong> — a modern modestwear brand
            created for women who love elegance, softness, and confidence.
          </p>
          <p className="about__identity-body">
            At Your Veil LB, we focus on <em>premium fabrics</em>, timeless
            shades, and details that feel luxurious every day. More than just
            hijabs — we create pieces that make you feel{" "}
            <em>comfortable, classy, and effortlessly elegant.</em>
          </p>
          <blockquote className="about__identity-quote">
            "More than a hijab — it's a feeling of elegance, comfort, and confidence."
          </blockquote>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="about__divider">
        <div className="about__divider-line" />
        <span className="about__divider-ornament">✦ &nbsp; ✦ &nbsp; ✦</span>
        <div className="about__divider-line" />
      </div>

      {/* ── VALUES ── */}
      <section className="about__values">
        <div className="about__values-header">
          <span className="section-label">What We Believe</span>
          <h2 className="about__values-title">
            Our <em>Values</em>
          </h2>
          <p className="about__values-subtitle">
            At Your Veil LB, modesty, quality, and trust create true beauty.
          </p>
        </div>

        <div className="about__values-list">
          {values.map((v) => (
            <div className="about__value-row" key={v.n}>
              <span className="about__value-number">{v.n}</span>
              <div className="about__value-content">
                <h3 className="about__value-name">{v.name}</h3>
                <p className="about__value-text">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CUSTOMER EXPERIENCE ── */}
      <section className="about__experience">
        <div className="about__experience-inner">
          <div className="about__experience-header">
            <span className="about__experience-label">Your Journey With Us</span>
            <h2 className="about__experience-title">
              Customer <em>Experience</em>
            </h2>
            <p className="about__experience-subtitle">
              You are more than a customer — you are part of our journey.
            </p>
          </div>

          <div className="about__experience-grid">
            {experiences.map((e) => (
              <div className="about__exp-item" key={e.n}>
                <span className="about__exp-item-num">{e.n}</span>
                <h3 className="about__exp-item-title">{e.title}</h3>
                <p className="about__exp-item-text">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <div className="about__closing">
        <div className="about__closing-inner">
          <p className="about__closing-quote">
            "Thank you for trusting Your Veil LB. We are grateful to be part of your everyday elegance."
          </p>
          <div className="about__closing-rule" />
          <span className="about__closing-author">— Your Veil LB Team</span>
        </div>
      </div>

    </div>
  );
}

export default About;
