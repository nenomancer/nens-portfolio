import React from "react";
// import styles from "./Tile.module.css";
import "./Tile.css";

const Tile = (props) => {
  return (
    <div
      className={`${"tile__container"} ${props.gridSize}`}
      onClick={props.onClickHandler}
    >
      <div className="tile__info">
        <div className="tile__name">{props.name}</div>
        <div className="tile__desc">{props.desc}</div>
      </div>
      <div className="tile__img-container">
        <img src={props.src} alt={props.name} />
      </div>
    </div>
  );
};

export default Tile;
