import React from "react";
import "./Info.css";

const Info = (props) => {
  return (
    <div className="tile-modal__info">
      <div className="tile-modal__name">{props.selectedTile.name}</div>
      <div className="tile-modal__desc">{props.selectedTile.desc}</div>
    </div>
  );
};

export default Info;
