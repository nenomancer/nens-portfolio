import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div className="about">
      <img src="gallery/profile-pic.jpg" alt="" className="about__picture" />
      <div className="about__info">My name is Neno</div>
      <div onClick={() => props.setShowAbout(false)}>X</div>
    </div>
  );
};

export default About;
