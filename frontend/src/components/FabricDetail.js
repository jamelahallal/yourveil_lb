import { useState, useRef } from "react";
import "../styles/FabricDetail.css";

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
);

const BackArrowIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
);

const SWIPE_THRESHOLD = 50; // px

function FabricDetail({ fabric, setActivePage }) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const mouseStartX = useRef(null);

  if (!fabric) {
    return (
      <div className="fabric-detail">
        <div className="fabric-detail__inner">
          <p className="body-text">No fabric selected.</p>
          <button
            className="fabric-detail__back"
            onClick={() => setActivePage("fabrics")}
          >
            <BackArrowIcon /> Back to Fabrics
          </button>
        </div>
      </div>
    );
  }

  // Build a small gallery from the single fabric — letter-based placeholder slides
 const images = fabric.images || [];

  const goTo = (index) => {
    const total = images.length;
    setActiveImage(((index % total) + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) {
        goTo(activeImage + 1); // swipe left → next
      } else {
        goTo(activeImage - 1); // swipe right → prev
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Mouse drag support (desktop)
  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
  };
  const handleMouseUp = (e) => {
    if (mouseStartX.current === null) return;
    const delta = e.clientX - mouseStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      goTo(activeImage + (delta < 0 ? 1 : -1));
    }
    mouseStartX.current = null;
  };

  const handleBack = () => {
    setActivePage("fabrics");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fabric-detail">
      <div className="fabric-detail__inner">

        <button className="fabric-detail__back" onClick={handleBack}>
          <BackArrowIcon /> Back to Fabrics
        </button>

        <div className="fabric-detail__layout">

          {/* ── GALLERY ── */}
          <div className="fabric-detail__gallery">
            <div
              className="fabric-detail__main-image"
              style={{ background: fabric.bg }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className={`fabric-detail__slide ${
                    i === activeImage ? "fabric-detail__slide--active" : ""
                  }`}
                >
                  <img src={src} alt={`${fabric.name} ${i + 1}`} className="fabric-detail__slide-img" />
                </div>
              ))}

              <button
                className="fabric-detail__arrow fabric-detail__arrow--prev"
                onClick={() => goTo(activeImage - 1)}
                aria-label="Previous image"
              >
                <ArrowLeftIcon />
              </button>
              <button
                className="fabric-detail__arrow fabric-detail__arrow--next"
                onClick={() => goTo(activeImage + 1)}
                aria-label="Next image"
              >
                <ArrowRightIcon />
              </button>
            </div>

            {/* Dots */}
            <div className="fabric-detail__dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`fabric-detail__dot ${
                    i === activeImage ? "fabric-detail__dot--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="fabric-detail__thumbs">
              {images.map((src, i) => (
                <div
                  key={i}
                  className={`fabric-detail__thumb ${
                    i === activeImage ? "fabric-detail__thumb--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                >
                  <img src={src} alt={`Thumbnail ${i + 1}`} className="fabric-detail__thumb-img" />
                </div>
              ))}
            </div>
          </div>

          {/* ── INFO ── */}
          <div className="fabric-detail__info">
            <span className="fabric-detail__tag">{fabric.tag}</span>
            <h1 className="fabric-detail__name">{fabric.name}</h1>

            <div className="fabric-detail__price">
              ${fabric.price.toFixed(2)}
              <span>per hijab</span>
            </div>

            <p className="fabric-detail__desc">{fabric.longDesc}</p>

            <div className="fabric-detail__traits">
              {fabric.traits.map((t, i) => (
                <span className="fabric-detail__trait" key={i}>
                  {t}
                </span>
              ))}
            </div>

            {/* Color options */}
            <h3 className="fabric-detail__section-title">Color Options</h3>
            <div className="fabric-detail__colors">
              {fabric.colors.map((c, i) => (
                <button
                  key={i}
                  className={`fabric-detail__color ${
                    i === activeColor ? "fabric-detail__color--active" : ""
                  }`}
                  onClick={() => setActiveColor(i)}
                  aria-label={`Select color ${c.name}`}
                >
                  <span
                    className="fabric-detail__color-swatch"
                    style={{ background: c.hex }}
                  />
                  <span className="fabric-detail__color-name">{c.name}</span>
                </button>
              ))}
            </div>

            <p className="fabric-detail__selected-color">
              Selected color: <strong>{fabric.colors[activeColor].name}</strong>
            </p>

            <div className="fabric-detail__cta-row">
              <a
                className="btn btn--primary"
                href="https://wa.me/96170000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order via WhatsApp
              </a>
              <button className="btn btn--outline" onClick={handleBack}>
                Browse More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FabricDetail;
