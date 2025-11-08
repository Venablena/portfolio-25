import { useEffect, useState } from 'react'

function Carousel({ images = [], customContent = false }) {
  const [index, setIndex] = useState(0)
  const length = images.length

  useEffect(() => {
    if (index >= length && length > 0) setIndex(0)
  }, [length, index])

  if (length === 0) {
    return <div className="visual-carousel">No images</div>
  }

  return (
    <div className="visual-carousel position-relative">
      {/* Top controls: Prev | indicators | Next */}
      <div className="carousel-top-controls" role="group" aria-label="Carousel controls">
        <button
          type="button"
          className="top-control top-control-prev"
          onClick={() => setIndex((i) => (i - 1 + length) % length)}
          aria-label="Previous slide"
        >
          <span className="caret caret-left" aria-hidden="true" />
          <span className="label">Prev</span>
        </button>

        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              className={`indicator ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="top-control top-control-next"
          onClick={() => setIndex((i) => (i + 1) % length)}
          aria-label="Next slide"
        >
          <span className="label">Next</span>
          <span className="caret caret-right" aria-hidden="true" />
        </button>
      </div>

      <div className="carousel-inner">
        {images.map((item, i) => (
          <div key={i} className={`carousel-item ${i === index ? 'active' : ''}`}>
            {customContent ? item : (
              <div className="carousel-frame">
                <img
                  src={item.src}
                  alt={item.alt || `Slide ${i + 1}`}
                  className="d-block img-fluid carousel-image"
                  style={{ objectFit: 'contain', maxHeight: '80vh' }}
                />
                {(item.caption || item.alt) && (
                  <div className="carousel-caption side" aria-live="polite">
                    <div className="caption-inner">{item.caption || item.alt}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Carousel
