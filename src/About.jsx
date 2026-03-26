import PropTypes from 'prop-types';
import windyPortrait from './img/windy_portrait.jpg';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function About({ text, ps, skills }) {
  return (
    <div className="about-page">
      <div className="about-text-box">
        <p>{text}</p>
        <img src={windyPortrait} alt="Lena Venable" className="about-portrait" />
        {ps && <p className="about-ps">{ps}</p>}
        <div className="about-social">
          <a href="https://www.linkedin.com/in/venablena/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/venablena" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:venablena@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        {skills && skills.length > 0 && (
          <div className="about-skills-mobile">
            <h2>Skills</h2>
            <div className="skills-list">
              {skills.map((skill, i) => <p key={i} className="skill">{skill}</p>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

About.propTypes = {
  text: PropTypes.string,
  ps: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
};

export default About;
