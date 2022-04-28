import React, { useState } from "react";
import "./Gallery.css";
import Tile from "./Tile";
import ImageModal from "../ImageModal/ImageModal";

const Gallery = (props) => {
  const [current, setCurrent] = useState({});
  // const length = props.artwork.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // const onClickHandler = (e) => {};
  // if (!Array.isArray(props.artwork) || props.artwork.length <= 0) {
  //   return null;
  // }

  const imageClickHandler = (index) => {
    const selectedImage = props.artwork[index];
    setCurrent(selectedImage);
    props.setShowImageModal(true);
  };

  const navigationClickHandler = (type) => {
    const selectedItemIndex = props.artwork.findIndex(
      (el) => el.id === current.id
    );
    let updatedIndex;

    
    if (type === "left") {
      updatedIndex = selectedItemIndex + 1;
    }
    console.log(updatedIndex);

    setCurrent(props.artwork[updatedIndex]);
    // switch (type) {
    //   case "left":
    //     console.log(selectedItemIndex)
    //     if (selectedItemIndex === 0) {
    //       updatedIndex = props.artwork.length - 1;
    //     } else {
    //       updatedIndex = selectedItemIndex - 1;
    //     }
    //     break;
    //   case "right":
    //     console.log(selectedItemIndex)

    //     if (selectedItemIndex === props.artwork.length - 1) {
    //       updatedIndex = 0;
    //     } else {
    //       updatedIndex = selectedItemIndex + 1;
    //     }
    //     break;
    //   default:
    //     break;
    // }

    // setCurrent(props.artwork[updatedIndex]);
  };

  return (
    <div className={"gallery"}>
      {/* this is a carousel example */}
      {/* <div className="left-arrow" onClick={prevSlide}>
        LEVO
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        DESNO
      </div>
      {props.artwork.map((item, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={item.src} alt={item.alt} className="image" />
            )}
          </div>
        );
      })} */}

      {/* displaying the image modal */}
      {props.showImageModal && (
        <ImageModal
          artwork={props.artwork}
          showImageModal={props.showImageModal}
          setShowImageModal={props.setShowImageModal}
          selectedImg={current}
          setSelectedImg={props.setSelectedImg}
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
          setSelectedImg={props.setSelectedImg}
          onClickHandler={() => imageClickHandler(index)}
        />
      ))}

      <video>
        <source
          src="https://photos.app.goo.gl/pgFzv1XjZd1LXPaZ9"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Gallery;
