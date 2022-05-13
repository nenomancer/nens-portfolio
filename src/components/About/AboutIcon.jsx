import React from "react";
import "./AboutIcon.css";

function AboutIcon(props) {
  return (
    <div className="icon-container">
      <div className="icon">
        <img src={props.icon.icon} alt="" />
        <span>{props.icon.name}</span>
      </div>

      <div className="tooltip">
        {props.icon.level && (
          <progress value={props.icon.level} max="10">
            {props.icon.level}/10
          </progress>
        )}
        {props.icon.info}
      </div>
    </div>
  );
}

export default AboutIcon;
