import React from "react";
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
  return (
    <div className="gallery">
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
      {artwork.map((item) => (
        <Tile
          key={item.id}
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
