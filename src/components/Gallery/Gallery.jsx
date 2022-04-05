import React, { useState } from "react";
import "./Gallery.css";
import Tile from "./Tile";
import ImageModal from "../ImageModal/ImageModal";

const Gallery = ({
  artwork,
  viewHandler,
  showImageModal,
  setShowImageModal,
  selectedImg,
  setSelectedImg,
}) => {
  const [current, setCurrent] = useState({});
  // const length = artwork.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // const onClickHandler = (e) => {};
  // if (!Array.isArray(artwork) || artwork.length <= 0) {
  //   return null;
  // }

  const imageClickHandler = (theIndex) => {
    const selectedImage = artwork[theIndex];
    setCurrent(selectedImage);
    setShowImageModal(true);
  };

  const navigationClickHandler = (type) => {
    const selectedItemIndex = artwork.findIndex((el) => el.id === current.id);
    let updatedCurrentImage;

    switch (type) {
      case "left":
        if (selectedItemIndex === 0) {
          updatedCurrentImage = artwork.length - 1;
        } else {
          updatedCurrentImage = selectedItemIndex - 1;
        }
        break;
      case "right":
        if (selectedItemIndex === artwork.length - 1) {
          updatedCurrentImage = 0;
        } else {
          updatedCurrentImage = selectedItemIndex + 1;
        }
        break;
      default:
        break;
    }

      setCurrent(artwork[updatedCurrentImage]);
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
      {artwork.map((item, index) => {
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
      {showImageModal && (
        <ImageModal
          artwork={artwork}
          showImageModal={showImageModal}
          setShowImageModal={setShowImageModal}
          selectedImg={current}
          setSelectedImg={setSelectedImg}
          navigationClick={(type) => navigationClickHandler(type)}
        />
      )}
      {/* displaying the photos */}
      {artwork.map((item, index) => (
        <Tile
          key={index}
          index={index}
          name={item.name}
          type={item.type}
          src={item.src}
          alt={item.alt}
          desc={item.desc}
          gridSize={item.gridSize}
          viewHandler={viewHandler}
          setSelectedImg={setSelectedImg}
          onClickHandler={() => imageClickHandler(index)}
        />
      ))}

      <video>
        <source src="https://photos.app.goo.gl/pgFzv1XjZd1LXPaZ9" type="video/mp4"/>
      </video>
    </div>
  );
};

export default Gallery;
