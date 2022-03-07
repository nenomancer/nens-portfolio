import React from "react";
import styles from "./Header.module.css";

const Header = ({ onShowAbout }) => {
  return (
    <div className={styles["main-nav"]}>
      <div>
        <div className={styles["profile-pic"]} onClick={onShowAbout}>
          <img src="gallery/profile-pic.jpg" alt="profile-pic" />
        </div>
        <span className={styles.logo}>Nebojsa</span>
      </div>
      <ul>
        <li>All</li>
        <li>Photos</li>
        <li>Videos</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Header;
