import React from "react";
import styles from "./Gallery.module.css";
import Tile from "./Tile";
import ImageModal from "./ImageModal";

const Gallery = ({
  artwork,
  viewHandler,
  showImageModal,
  setShowImageModal,
  selectedImg,
  setSelectedImg,
}) => {
  return (
    <div className={styles.gallery}>
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
          className={styles.tile}
          key={item.id}
          name={item.name}
          src={item.src}
          alt={item.alt}
          desc={item.desc}
          viewHandler={viewHandler}
          setSelectedImg={setSelectedImg}
        />
      ))}


      <div>asdasd</div>
    </div>
  );
};

export default Gallery;
