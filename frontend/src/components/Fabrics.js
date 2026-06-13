import "../styles/Fabrics.css";
import { fabrics, whyPoints } from "../data/fabrics";

function Fabrics({ setActivePage, setSelectedFabric }) {
  const handleFabricClick = (fabric) => {
    setSelectedFabric(fabric);
    setActivePage("fabric-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fabrics">
      <div className="fabrics__inner">
        <div className="fabrics__header">
          <span className="section-label">What We Offer</span>
          <h1 className="fabrics__title">
            Our <em>Fabrics</em>
          </h1>
          <div className="fabrics__header-desc">
            Every fabric we carry is hand-selected for its quality, drape, and
            feel. We believe the fabric is the soul of the hijab.
          </div>
        </div>

        <div className="fabrics__grid">
          {fabrics.map((f) => (
            <button
              className="fabric-card"
              key={f.id}
              onClick={() => handleFabricClick(f)}
              aria-label={`View ${f.name} details`}
            >
              <div className="fabric-card__swatch">
                <img
                  src={f.image}
                  alt={f.name}
                  className="fabric-card__swatch-image"
                />
              </div>
              <div className="fabric-card__body">
                <span className="fabric-card__tag">{f.tag}</span>
                <h3 className="fabric-card__name">{f.name}</h3>
                <p className="fabric-card__desc">{f.desc}</p>
                <div className="fabric-card__traits">
                  {f.traits.map((t, j) => (
                    <span className="fabric-card__trait" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="fabric-card__cta">
                  View Details &nbsp;→
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="fabrics__why">
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Our Promise</span>
            <h2
              className="about__section-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 400,
                color: "var(--espresso)",
              }}
            >
              Why Our Fabrics Stand Out
            </h2>
          </div>
          <div className="fabrics__why-grid">
            {whyPoints.map((p, i) => (
              <div className="fabrics__why-item" key={i}>
                <span className="fabrics__why-icon">{p.icon}</span>
                <h4 className="fabrics__why-title">{p.title}</h4>
                <p className="fabrics__why-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fabrics;
