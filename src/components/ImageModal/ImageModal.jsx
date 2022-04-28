import React, { useEffect } from "react";
import "./ImageModal.css";
import Info from "./Info";

const ImageModal = (props) => {
  const handleEscape = (e) => {
    if (e.key === "Escape") props.setShowImageModal(false);
    // console.log(e.key);
    // console.log(selectedImg);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
  }, [props.showImageModal]);

   return (
    <div className="image-modal">
      <div className="image-modal__container">
        <div className="image-modal__nav">
          <span onClick={() => props.navigationClick("left")} className="image-modal__nav-left">LEVO</span>
          <span onClick={() => props.navigationClick("right")} className="image-modal__nav-right">DESNO</span>
        </div>
        {/* IMAGE MODAL IMAGE*/}
        <div className="image-modal__image">
          <img src={props.selectedImg.src} alt="" />
        </div>
        {/* IMAGE MODAL INFO */}
        <Info selectedImg={props.selectedImg} />
      </div>
      {/* IMAGE MODAL BACKDROP */}
      <div
        className="image-modal__backdrop"
        onClick={() => props.setShowImageModal(false)}
      />
    </div>
  );
};

export default ImageModal;
