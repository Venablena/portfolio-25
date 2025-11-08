import PropTypes from "prop-types"

function Header({ skills = [], setActiveId }) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <h1>Lena Venable</h1>
        <h2>Front-end Developer & UX Designer</h2>
        {skills && skills.length > 0 && (
          <div className="skills-list" aria-label="Skills">
            {skills.map((skill, index) => (
              <p key={index} className="skill">{skill}</p>
            ))}
          </div>
        )}
      </div>
         <h2 
          className="nav-item" 
          onClick={() => setActiveId && setActiveId('About')}
          style={{ cursor: 'pointer' }}
        >
        About me
        </h2>
    </header>
  )
}

Header.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  setActiveId: PropTypes.func,
}

export default Header