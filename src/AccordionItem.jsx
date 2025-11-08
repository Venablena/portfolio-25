import PropTypes from 'prop-types';

function AccordionItem({ id, title, children, defaultExpanded = false }) {
  const headingId = `heading${id}`
  const collapseId = `collapse${id}`

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button ${defaultExpanded ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={defaultExpanded ? 'true' : 'false'}
          aria-controls={collapseId}
        >
          <h3>{title}</h3>
        </button>
      </h2>
      <div id={collapseId} className={`accordion-collapse collapse ${defaultExpanded ? 'show' : ''}`} aria-labelledby={headingId} data-bs-parent="#portfolioAccordion">
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  defaultExpanded: PropTypes.bool,
}

export default AccordionItem
