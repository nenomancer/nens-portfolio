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
        {/* RENDER IMG IF THE ARTWORK IS A PHOTO */}
        {props.type === "photos" && <img src={props.src} alt={props.name} />}

        {/* RENDER VIDEO IF THE ARTWORK IS A VIDEO */}
        {props.type === "videos" &&
          (props.youtube === true ? (
            <video>
              <source src={props.src} type="video/mp4" />
            </video>
          ) : (
            <video>
              <source src={props.src} type="video/mp4" />
            </video>
          ))}
        {/* <img src={props.src} alt={props.name} /> */}
      </div>
    </div>
  );
};

export default Tile;
