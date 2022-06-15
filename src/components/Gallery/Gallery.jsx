import React, { useState } from "react";
import "./Gallery.css";
import Tile from "./Tile";
import Modal from "../Modal/Modal";

const Gallery = (props) => {
  const [current, setCurrent] = useState({});

  // ASSIGN IDs TO EVERY ARTWORK
  for (let i = 0; i < props.artwork.length; i++) {
    props.artwork[i].id = i;
  }

  // HANDLE CLICK ON TILE
  const tileClickHandler = (index) => {
    const selectedTile = props.artwork[index];
    setCurrent(selectedTile);
    props.setShowModal(true);
  };

  // HANDLE MODAL NAVIGATION
  const navigationClickHandler = (type) => {
    const selectedItemIndex = props.artwork.findIndex(
      (el) => el.id === current.id
    );
    let updatedIndex;

    // -------------------------------

    switch (type) {
      case "left":
        if (selectedItemIndex === 0) {
          updatedIndex = props.artwork.length - 1;
        } else {
          updatedIndex = selectedItemIndex - 1;
        }
        break;
      case "right":
        if (selectedItemIndex === props.artwork.length - 1) {
          updatedIndex = 0;
        } else {
          updatedIndex = selectedItemIndex + 1;
        }
        break;
      default:
        break;
    }

    setCurrent(props.artwork[updatedIndex]);
  };

  return (
    <div className={"gallery"}>
      {/* displaying the tile modal */}
      {props.showModal && (
        <Modal
          artwork={props.artwork}
          showModal={props.showModal}
          setShowModal={props.setShowModal}
          selectedTile={current}
          setSelectedTile={props.setSelectedTile}
          navigationClick={(type) => navigationClickHandler(type)}
        />
      )}
      {/* displaying the photos */}
      {props.artwork.map((item, index) => (
        <Tile
          key={index}
          index={index}
          name={item.name}
          type={item.type}
          src={item.src}
          desc={item.desc}
          gridSize={item.gridSize}
          viewHandler={props.viewHandler}
          setSelectedTile={props.setSelectedTile}
          onClickHandler={() => tileClickHandler(index)}
        />
      ))}

      {/* <div className="stars stars-front"></div>
      <div className="stars stars-mid"></div>
      <div className="stars stars-back"></div> */}
    </div>
  );
};

export default Gallery;
