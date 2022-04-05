import React, { useEffect } from "react";
import "./ImageModal.css";
import Info from "./Info";

const ImageModal = ({ artwork, showImageModal, setShowImageModal, selectedImg, setSelectedImg, navigationClick }) => {
  const handleEscape = (e) => {
    if (e.key === "Escape") setShowImageModal(false);
    // console.log(e.key);
    // console.log(selectedImg);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
  }, [showImageModal]);

   return (
    <div className="image-modal">
      <div className="image-modal__container">
        <div className="image-modal__nav">
          <span onClick={() => navigationClick("left")} className="image-modal__nav-left">LEVO</span>
          <span onClick={() => navigationClick("right")} className="image-modal__nav-right">DESNO</span>
        </div>
        {/* IMAGE MODAL IMAGE*/}
        <div className="image-modal__image">
          <img src={selectedImg.src} alt="" />
        </div>
        {/* IMAGE MODAL INFO */}
        <Info selectedImg={selectedImg} />
      </div>
      {/* IMAGE MODAL BACKDROP */}
      <div
        className="image-modal__backdrop"
        onClick={() => setShowImageModal(false)}
      />
    </div>
  );
};

export default ImageModal;
