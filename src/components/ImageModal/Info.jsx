import React from "react";
import "./Info.css";

const Info = ({ selectedImg }) => {
  return (
    <div className="image-modal__info">
      <div className="image-modal__name">{selectedImg.name}</div>
      <div className="image-modal__desc">{selectedImg.desc}</div>
    </div>
  );
};

export default Info;
