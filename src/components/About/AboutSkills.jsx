import React from "react";

function AboutSkills(props) {
  return (
    <div className="about__skills">
      {/* <h2 className="about__skills-title">{props.title}:</h2> */}
      {/* {props.title === "Skills" && <p>Visual:</p>} */}
      {props.icons.map((icon, index) =>
        icon.link ? (
          <a
            className="about__skills-icons-container"
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="about__skills-icons"
              src={icon.icon}
              alt={icon.name}
            />
            <div className="about__skills-tooltip">
              {icon.level && (
                <progress value={icon.level} max="10">
                  {icon.level}/10
                </progress>
              )}
              {icon.info}
            </div>
          </a>
        ) : (
          <div
            className="about__skills-icons-container"
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="about__skills-icons"
              src={icon.icon}
              alt={icon.name}
            />
            <div className="about__skills-tooltip">
              {icon.level && (
                <progress value={icon.level} max="10">
                  {icon.level}/10
                </progress>
              )}
              {icon.info}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default AboutSkills;
