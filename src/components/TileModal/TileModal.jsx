import React, { useEffect } from "react";
import "./TileModal.css";
import Info from "./Info";

const TileModal = (props) => {
  const handleEscape = (e) => {
    if (e.key === "Escape") props.setShowTileModal(false);
    // console.log(e.key);
    // console.log(selectedTile);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
  }, [props.showTileModal]);

  return (
    <div className="tile-modal">
      <div className="tile-modal__container">
        <div className="tile-modal__nav">
          <span
            onClick={() => props.navigationClick("left")}
            className="tile-modal__nav-left"
          >
            LEVO
          </span>
          <span
            onClick={() => props.navigationClick("right")}
            className="tile-modal__nav-right"
          >
            DESNO
          </span>
        </div>
        {/* SHOW IMAGE IN TILE MODAL*/}
        <div className="tile-modal__tile">
          {/* RENDER IMG IF THE ARTWORK IS A PHOTO */}
          {props.selectedTile.type === "photos" && <img src={props.selectedTile.src} alt={props.name} />}

          {/* RENDER VIDEO IF THE ARTWORK IS A VIDEO */}
          {props.selectedTile.type === "videos" && (
            <video height="100%" controls poster={props.selectedTile.thumb}>
              <source src={props.selectedTile.src} type="video/mp4" />
            </video>
          )}
        </div>
        {/* IMAGE MODAL INFO */}
        <Info selectedTile={props.selectedTile} />
      </div>
      {/* IMAGE MODAL BACKDROP */}
      <div
        className="tile-modal__backdrop"
        onClick={() => props.setShowTileModal(false)}
      />
    </div>
  );
};

export default TileModal;
