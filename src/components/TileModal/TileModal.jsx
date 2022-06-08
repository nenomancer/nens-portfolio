import React, { useEffect } from "react";
import "./TileModal.css";

import { IoClose } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const TileModal = (props) => {
  // HANDLE KEY NAVIGATION
  const handleyKey = (e) => {
    if (e.key === "Escape") {
      props.setShowTileModal(false);
    } else if (e.key === "ArrowRight") {
      props.navigationClick("right");
    } else if (e.key === "ArrowLeft") {
      props.navigationClick("left");
    }
  };

  // ADD LISTENER FOR NAVIGATION
  useEffect(() => {
    document.addEventListener("keydown", handleyKey);

    return () => {
      document.removeEventListener("keydown", handleyKey);
    };
  });

  return (
    <div className="tile-modal">
      <div className="tile-modal-container">
        <IoClose
          id="close-button"
          onClick={() => props.setShowTileModal(false)}
        />
        <MdNavigateBefore
          className="nav-icons"
          id="nav-left"
          onClick={() => props.navigationClick("left")}
        />
        <MdNavigateNext
          className="nav-icons"
          id="nav-right"
          onClick={() => props.navigationClick("right")}
        />

        {/* SHOW IMAGE IN TILE MODAL*/}
        <div className="tile">
          {/* RENDER IMG IF THE ARTWORK IS A PHOTO */}
          {props.selectedTile.type.includes("photo") && (
            <img src={props.selectedTile.src} alt={props.name} />
          )}

          {/* RENDER VIDEO IF THE ARTWORK IS A VIDEO */}
          {props.selectedTile.type[0] === "video" && (
            <video
              height="100%"
              width="100%"
              className="video"
              controls
              poster={props.selectedTile.thumb}
            >
              <source src={props.selectedTile.src} type="video/mp4" />
            </video>
          )}

          {/* RENDER IFRAME IF THE ARTWORK IS A YOUTUBE VIDEO  */}
          {props.selectedTile.type[0] === "youtube" && (
            <iframe
              title={props.selectedTile.name}
              width="100%"
              height="100%"
              src={`${props.selectedTile.src}?modestbranding=0&autoplay=0&showinfo=0&controls=1`}
              frameborder="0"
            ></iframe>
          )}
        </div>
        {/* IMAGE MODAL INFO */}
        <div id="info">
          <h1>{props.selectedTile.name}</h1>
          {props.selectedTile.desc.split("\n").map((str) => (
            <p>{str}</p>
          ))}
        </div>
      </div>
      {/* IMAGE MODAL BACKDROP */}
      <div className="backdrop" onClick={() => props.setShowTileModal(false)} />
    </div>
  );
};

export default TileModal;
