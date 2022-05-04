import React, { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const tags = ["blender", "3d"];

  // const removeDuplicates = (index) => {
  //   tags.map((tag) => {
  //     if
  //   })
  // }

  // tags.push(
  //   ArtworkData.map((artwork, index) => {
  //     return artwork.tags;
  //   })
  // );

  // for (let i=1; i<=ArtworkData.length; i++) {
  //   tags.push(ArtworkData[i])
  // }

  // tags[0].forEach((tag) => {
  //   return tag.join();
  // })

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
        <img src="gallery/nens-logo.png" alt="nens-logo" />
      </div>
      {/* <div className="logo">
        <span className="logo-main">N</span>
        <span className="logo-sub">ebojsa Kovacevik</span>
      </div> */}
      <ul className="nav-items">
        {navItems.map((navItem, index) => {
          return (
            <li key={navItem.id} className="nav-item">
              <a
                href="#"
                className={index === selectedIndex ? "active" : ""}
                onClick={() => {
                  setSelectedIndex(index);
                  props.onSetFilter(navItem.title.toLowerCase());
                }}
              >
                {navItem.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
