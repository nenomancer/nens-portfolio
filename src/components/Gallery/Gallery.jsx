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
  const [current, setCurrent] = useState(0);
  const length = artwork.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onClickHandler = (e) => {};


  if (!Array.isArray(artwork) || artwork.length <= 0) {
    return null;
  }

  return (
    <div className="gallery">
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
          selectedImg={selectedImg}
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
        />
      ))}
    </div>
  );
};

export default Gallery;
