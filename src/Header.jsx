import PropTypes from "prop-types"

function Header({ skills = [], isMobileNavOpen, onHamburgerToggle }) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <h1>Lena Venable</h1>
        <h2>Front-end Developer & UX Designer</h2>
        {skills && skills.length > 0 && (
          <div className="skills-list skills-sidebar" aria-label="Skills">
            {skills.map((skill, index) => (
              <p key={index} className="skill">{skill}</p>
            ))}
          </div>
        )}
      </div>
      <button
        className="hamburger-btn"
        onClick={onHamburgerToggle}
        aria-label="Toggle navigation"
        aria-expanded={isMobileNavOpen}
      >
        {isMobileNavOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}

Header.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  isMobileNavOpen: PropTypes.bool,
  onHamburgerToggle: PropTypes.func,
}

export default Header
