import React, { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navItems = [
    {
      title: "All",
      id: 1,
    },
    {
      title: "Photo",
      id: 2,
    },
    {
      title: "Video",
      id: 3,
    },
    {
      title: "Audio",
      id: 4,
    },
    // {
    //   title: "Tags",
    //   id: 5,
    //   tags: tags,
    // },
  ];
  return (
    <div className="header">
      <div className="logo-container" onClick={() => props.setShowAbout(true)}>
        {/* <img className="" src="gallery/profile-pic.jpg" alt="profile-pic" /> */}
        <img src="icons/nens-logo.png" alt="nens-logo" />
      </div>
      {/* <div className="logo">
        <span className="logo-main">N</span>
        <span className="logo-sub">ebojsa Kovacevik</span>
      </div> */}
      <ul className="nav-items">
        {navItems.map((navItem, index) => {
          return (
            <li key={navItem.id} className="nav-item">
              <span
                className={index === selectedIndex ? "active" : ""}
                onClick={() => {
                  setSelectedIndex(index);
                  props.onSetFilter(navItem.title.toLowerCase());
                }}
              >
                {navItem.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
