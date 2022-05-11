import React, { useEffect } from "react";
import "./TileModal.css";
import Info from "./Info";

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

    console.log(e.key);
    // console.log(selectedTile);
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
        <div className="tile-modal__nav">
          <img
            className="tile-modal__nav-left"
            onClick={() => props.navigationClick("left")}
            src="icons/navigation/arrow-point-to-right.png"
            alt="Left"
          />
          <img
            src="icons/navigation/arrow-point-to-right.png"
            onClick={() => props.navigationClick("right")}
            className="tile-modal__nav-right"
            alt="right"
          />
        </div>
        {/* SHOW IMAGE IN TILE MODAL*/}
        <div className="tile-modal__tile">
          {/* RENDER IMG IF THE ARTWORK IS A PHOTO */}
          {props.selectedTile.type === "photos" && (
            <img src={props.selectedTile.src} alt={props.name} />
          )}

          {/* RENDER VIDEO IF THE ARTWORK IS A VIDEO */}
          {props.selectedTile.type === "videos" && (
            <video height="100%" width="100%" controls poster={props.selectedTile.thumb}>
              <source src={props.selectedTile.src} type="video/mp4" />
            </video>
          )}
        </div>
        {/* IMAGE MODAL INFO */}
        <Info selectedTile={props.selectedTile} />
      </div>
      {/* IMAGE MODAL BACKDROP */}
      <div
        className="backdrop"
        onClick={() => props.setShowTileModal(false)}
      />
    </div>
  );
};

export default TileModal;
