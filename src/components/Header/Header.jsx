import React from "react";
import styles from "./Header.module.css";

const Header = ({ onShowAbout, onSetFilter }) => {
  return (
    <div className={styles["main-nav"]}>
      <div className={styles.logo}>
        <div className={styles["profile-pic"]} onClick={onShowAbout}>
          <img src="gallery/profile-pic.jpg" alt="profile-pic" />
        </div>
        {/* <span className={styles.name}>Nebojsa Kovacevik</span> */}
      </div>
      <ul onClick={onSetFilter}>
        <li><a href="#" >All</a></li>
        <li><a href="#">Photos</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Music</a></li>
      </ul>
    </div>
  );
};

export default Header;
