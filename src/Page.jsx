import PropTypes from 'prop-types'

// Helper: format an array of {header, content} objects into React nodes with semantic block elements.
// Always uses <div> as a wrapper to avoid invalid block elements inside inline <span>.
const formatCaptions = (captionsData) => {
  if (!Array.isArray(captionsData)) return [];
  return captionsData.map((c, i) => {
    if (!c) return null;
    const paragraphs = (c.content || '')
      .split(/\n+/)
      .filter(Boolean)
      .map((t, idx) => <p key={idx}>{t}</p>);
    return (
      <div key={i}>
        <h2>{c.header}</h2>
        {paragraphs}
      </div>
    );
  });
};

// Displays an array of images vertically with captions on the right at 15vw.
// Captions can be provided per image via `captions[i]` (preferred when provided),
// or fall back to `image.caption`.
function Page({ images = [], captions = [], isContinuous = false }) {
  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available.</div>;
  }

  // If continuous mode is enabled, construct a single combined caption block
  // using the provided captions array, or falling back to images[i].caption
  // if explicit captions aren't provided.
  let combinedCaption = null;
  if (isContinuous) {
    let sourceCaptions = [];
    if (Array.isArray(captions) && captions.length > 0) {
      sourceCaptions = captions;
    } else {
      // Fallback: gather caption objects from images[].caption
      sourceCaptions = images
        .map(img => img && img.caption)
        .filter(Boolean)
        .map(c => (typeof c === 'object' && 'header' in c) ? c : { header: '', content: String(c) });
    }

    const nodes = formatCaptions(sourceCaptions);
    combinedCaption = nodes && nodes.length ? <div>{nodes}</div> : null;
  }

  // Continuous mode: wrapper with images stacked left, caption fixed right
  if (isContinuous) {
    return (
      <div className="page-continuous-layout">
        <div className="images-column">
          {images.map((img, i) => (
            <div key={i} className="image-wrapper mb-3">
              <img
                src={img.src}
                alt={img.alt || `Image ${i + 1}`}
                className="carousel-image img-fluid"
                style={{ objectFit: 'contain', maxHeight: '80vh', width: '100%' }}
              />
            </div>
          ))}
        </div>
        {combinedCaption && (
          <div className="caption-column">
            <div className="caption-inner">{combinedCaption}</div>
          </div>
        )}
      </div>
    );
  }

  // Per-image mode: original layout
  return (
    <div className="d-flex flex-column align-items-center">
      {images.map((img, i) => {
        let captionToRender = null;

        // Per-image caption mode
        captionToRender = (captions && captions[i] !== undefined) ? captions[i] : img.caption;
        if (captionToRender && typeof captionToRender === 'object' && 'header' in captionToRender) {
          captionToRender = formatCaptions([captionToRender])[0];
        }

        return (
          <div key={i} className="carousel-frame mb-3" style={{ width: '100%' }}>
            <img
              src={img.src}
              alt={img.alt || `Image ${i + 1}`}
              className="carousel-image img-fluid"
              style={{ objectFit: 'contain', maxHeight: '80vh' }}
            />
            {captionToRender && (
              <div className="carousel-caption side">
                <div className="caption-inner">{captionToRender}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

Page.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ),
  captions: PropTypes.arrayOf(PropTypes.node),
  isContinuous: PropTypes.bool,
}

export default Page;