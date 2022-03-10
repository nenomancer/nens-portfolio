import React from "react";
import "./Header.css";

const Header = ({ onShowAbout, onSetFilter }) => {
  return (
    <div className="nav">
      <ul onClick={onSetFilter}>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Photos</a>
        </li>
        <li>
          <a href="#">Videos</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
      </ul>
      <div className="nav__profile-pic" onClick={onShowAbout}>
        <img src="gallery/profile-pic.jpg" alt="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
