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
          className="nav-left nav-icons"
          onClick={() => props.navigationClick("left")}
        />
        <MdNavigateNext
          className="nav-right nav-icons"
          onClick={() => props.navigationClick("right")}
        />
        {/* SHOW IMAGE IN TILE MODAL*/}
        <div className="tile">
          {/* RENDER IMG IF THE ARTWORK IS A PHOTO */}
          {props.selectedTile.type === "photos" && (
            <img src={props.selectedTile.src} alt={props.name} />
          )}

          {/* RENDER VIDEO IF THE ARTWORK IS A VIDEO */}
          {props.selectedTile.type === "videos" &&
            (props.selectedTile.youtube === true ? (
              <iframe
                width="100%"
                height="100%"
                src={`${props.selectedTile.src}?modestbranding=0&autoplay=1&showinfo=0&controls=0`}
                frameborder="0"
              ></iframe>
            ) : (
              <video
                height="100%"
                width="100%"
                controls
                className="video"
                poster={props.selectedTile.thumb}
              >
                <source src={props.selectedTile.src} type="video/mp4" />
              </video>
            ))}
        </div>
        {/* IMAGE MODAL INFO */}
        {/* <div id="info">
          <h2>{props.selectedTile.name}</h2>
          <span>{props.selectedTile.desc}</span>
        </div> */}
      </div>
      {/* IMAGE MODAL BACKDROP */}
      <div className="backdrop" onClick={() => props.setShowTileModal(false)} />
    </div>
  );
};

export default TileModal;
