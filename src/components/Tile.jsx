import React from "react";
import "../scss/Tile.scss";

const Tile = (props) => {
  return (
    <div
      className={`${"tile__container"} ${props.gridSize}`}
      onClick={props.onClickHandler}
    >
      {/* <div className="tile__info">
        <div className="tile__name">{props.name}</div>
        <div className="tile__desc">{props.desc}</div>
      </div> */}
      <div className="tile__img-container">
        {/* RENDER IMG IF THE ARTWORK IS A PHOTO */}
        {props.type[0] === "images" && <img src={props.src} alt={props.name} />}

        {/* RENDER VIDEO IF THE ARTWORK IS A VIDEO */}
        {props.type[0] === "videos" && (
          <video>
            <source src={props.src} type="video/mp4" />
          </video>
        )}

        {/* RENDER YOUTUBE THUMBNAIL IF THE ARTWORK IS A YOUTUBE VIDEO */}
        {props.type[0] === "youtube" && (
          <img
            // GET THE FULL LINK OF THE VIDEO, AND ONLY TAKE  THE LAST 11 CHARACTERS,
            // WHICH IS THE VIDEO'S ID NUMBER
            className="youtube"
            src={`https://i3.ytimg.com/vi/${props.src.slice(
              props.src.length - 11
            )}/0.jpg`}
            alt={props.name}
          />
        )}
      </div>
    </div>
  );
};

export default Tile;
