import React, { useEffect } from "react";
import "./ImageModal.css";

const ImageModal = ({ showImageModal, setShowImageModal, selectedImg }) => {
  const handleEscape = (e) => {
    if (e.key === "Escape") setShowImageModal(false);
    console.log(e.key);
    console.log(selectedImg);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
  }, [showImageModal]);

  return (
    <div className="image-modal">
      {/* backdrop */}
      <div
        className="image-modal__backdrop"
        onClick={() => setShowImageModal(false)}
      />

      <div className="image-modal__container">
        {/* image */}
        <div className="image-modal__image">
          <img src={selectedImg.src} alt="" />
        </div>
        {/* info box */}
        <div className="image-modal__info">
          <div className="image-modal__name">{selectedImg.name}</div>
          <div className="image-modal__desc">{selectedImg.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
