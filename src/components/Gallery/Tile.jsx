import React from "react";
// import styles from "./Tile.module.css";
import "./Tile.css";

const Tile = ({
  name,
  src,
  alt,
  desc,
  gridSize,
  index,
  viewHandler,
  setSelectedImg,
  onClickHandler,
}) => {
  return (
    <div
      className={`${"tile__container"} ${gridSize}`}
      onClick={onClickHandler}
    >
      <div className="tile__info">
        <div className="tile__name">{name}</div>
        <div className="tile__desc">{desc}</div>
      </div>
      <div className="tile__img-container">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Tile;
