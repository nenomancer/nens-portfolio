import React, { useEffect } from "react";
import styles from "./ImageModal.module.css";

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
    <div className={styles["image-modal"]}>
      {/* backdrop */}
      <div
        className={styles.backdrop}
        onClick={() => setShowImageModal(false)}
      />

      <div className={styles.container}>
        {/* image */}
        <div className={styles.image}>
          <img src={selectedImg.src} alt="" />
        </div>
        {/* info box */}
        <div className={styles.info}>
          <div className={styles.name}>{selectedImg.name}</div>
          <div className={styles.desc}>{selectedImg.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
