import React from "react";
// import styles from "./Tile.module.css";
import "./Tile.css";

const Tile = ({
  name,
  src,
  alt,
  desc,
  gridSize,
  viewHandler,
  setSelectedImg,
}) => {
  const onClickHandler = (e) => {
    const imgSrc = e.target.nextElementSibling.getAttribute("src");
    const imgName = e.target.children[0].textContent;
    const imgDesc = e.target.children[1].textContent;

    console.log(gridSize);
    const selectedImg = {
      src: imgSrc,
      name: imgName,
      desc: imgDesc,
    };

    viewHandler();
    setSelectedImg(selectedImg);
  };

  return (
    <div className="tile" onClick={onClickHandler}>
      <div className="tile__info">
        <div className="tile__name">{name}</div>
        <div className="tile__desc">{desc}</div>
      </div>

      <img src={src} alt={alt} />
    </div>
  );
};

export default Tile;
