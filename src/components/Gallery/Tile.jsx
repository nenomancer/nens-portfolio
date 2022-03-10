import React from "react";
import styles from "./Tile.module.css";

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
    <div
      className={`${styles.tile} ${gridSize === "wide" && styles.wide} ${
        gridSize === "tall" && styles.tall
      }`}
      onClick={onClickHandler}
    >
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.desc}>{desc}</div>
      </div>

      <img src={src} alt={alt} />
    </div>
  );
};

export default Tile;
