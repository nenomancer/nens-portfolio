import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div className="about">
      <div className="about__info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla facere
        alias, debitis dolorem nostrum at consequatur, corrupti numquam sequi
        architecto rem delectus similique tenetur facilis libero mollitia
        cupiditate ipsa. Recusandae?
      </div>
      <div onClick={() =>props.setShowAbout(false)}>X</div>
    </div>
  );
};

export default About;