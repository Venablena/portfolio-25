import PropTypes from 'prop-types';
import windyPortrait from './img/windy_portrait.jpg';

function About({ text, skills }) {
  return (
    <div className="about-page">
      <div className="about-text-box">
        <p>{text}</p>
        <img src={windyPortrait} alt="Lena Venable" className="about-portrait" />
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
  skills: PropTypes.arrayOf(PropTypes.string),
};

export default About;
