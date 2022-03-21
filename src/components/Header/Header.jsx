import React, { useState } from "react";
import "./Header.css";

const Header = ({ onShowAbout, onSetFilter }) => {
  const navItems = [
    {
      title: "All",
      id: 1,
    },
    {
      title: "Photos",
      id: 2,
    },
    {
      title: "Videos",
      id: 3,
    },
    {
      title: "Music",
      id: 4,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="nav">
      <ul>
        {navItems.map((navItem, index) => {
          return (
            <li key={navItem.id} className={index === selectedIndex ? "active" : ""}>
              <a
                href="#"
                
                onClick={() => {
                  setSelectedIndex(index);
                  onSetFilter(navItem.title.toLowerCase());
                }}
              >
                {navItem.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="nav__profile-pic" onClick={onShowAbout}>
        <img src="gallery/profile-pic.jpg" alt="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
