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
      title: "Images",
      id: 2,
    },
    {
      title: "Videos",
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

  const onClickHandler = () => {
    props.setShowAbout(true);
    document.querySelector("#logo").style.animationPlayState = "paused";
    document.querySelector("#circle").style.animationPlayState = "paused";
  };
  return (
    <div className="header">
      <div className="logo-container" onClick={onClickHandler}>
        <div id="logo">
          <span>N</span>
        </div>
        <span id="circle"></span>
      </div>

    
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
