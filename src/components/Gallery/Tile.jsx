import React from "react";
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
        {props.type.includes("photo") && (
          <img src={props.src} alt={props.name} />
        )}

        {/* RENDER VIDEO IF THE ARTWORK IS A VIDEO */}
        {props.type.includes("video") && (
          <video>
            <source src={props.src} type="video/mp4" />
          </video>
        )}

        {/* RENDER YOUTUBE THUMBNAIL IF THE ARTWORK IS A YOUTUBE VIDEO */}
        {props.type.includes("youtube") && (
          <img
            // GET THE FULL LINK OF THE VIDEO, AND ONLY TAKE  THE LAST 11 CHARACTERS,
            // WHICH IS THE VIDEO'S ID NUMBER
            src={`https://i3.ytimg.com/vi/${props.src.slice(
              props.src.length - 11
            )}/hqdefault.jpg`}
            alt={props.name}
          />
        )}
      </div>
    </div>
  );
};

export default Tile;
