import PropTypes from "prop-types"

function Header({ skills = [], isMobileNavOpen, onHamburgerToggle, onAboutClick, isAboutActive }) {
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
        <button
          className={`sidebar-about-btn${isAboutActive ? ' active' : ''}`}
          onClick={onAboutClick}
        >
          About
        </button>
        <a
          href="http://art.venablena.com"
          target="_blank"
          rel="noreferrer"
          className="sidebar-art-link"
        >
          Art
        </a>
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
  onAboutClick: PropTypes.func,
  isAboutActive: PropTypes.bool,
}

export default Header
