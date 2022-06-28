import React from "react";
import "../scss/Sidebar.scss";

import { MdAutoAwesomeMosaic } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";

const Sidebar = (props) => {
  const menuItems = [...document.querySelectorAll(".sidebar-list-item")];

  const menuClickHandler = (e) => {
    const menuTitle = e.target.innerText;
    if (menuTitle === "all") {
      console.log(`EVENT IS ${menuTitle}`);
      // props.ArtworkData.map((tile) => {

      // })
      return;
    } else {
      props.ArtworkData.map((tile) => {
        // console.log(`TILE TYPE: ${tile.type}`);
        // console.log(`TILE CLASSLIST: ${tile.type}, EVENT: ${e.target.innerText}`);
        if (tile.type.includes(menuTitle.toLowerCase())) {
          console.log(`TILE: ${tile}`);
        }
      });
    }
    // closeMenu();
    // toggleMenu();
    // props.toggleAbout("close");
    // SET FILTER TYPE BASED ON TEXT CONTENT OF MENU ITEM
    // props.setGalleryFilter(e.target.textContent.toLowerCase());
    // SET ACTIVE CLASS FOR CLICKED ITEM
    menuItems.forEach((item) => {
      if (item.textContent !== e.target.textContent) {
        item.classList.remove("active");
      } else {
        e.target.classList.add("active");
      }
    });
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li
          className="sidebar-list-item active"
          onClick={menuClickHandler}
        >
          <div className="list-item-icon">
            <MdAutoAwesomeMosaic className="icon sidebar-icon" />
          </div>
          <div className="list-item-text active">All</div>
        </li>
        <li className="sidebar-list-item " onClick={menuClickHandler}>
          <div className="list-item-icon">
            <MdPhotoLibrary className="icon sidebar-icon" />
          </div>
          <div className="list-item-text">Images</div>
        </li>
        <li className="sidebar-list-item " onClick={menuClickHandler}>
          <div className="list-item-icon">
            <MdVideoLibrary className="icon sidebar-icon" />
          </div>
          <div className="list-item-text">Videos</div>
        </li>
        <li className="sidebar-list-item " onClick={menuClickHandler}>
          <div className="list-item-icon">
            <MdLibraryMusic className="icon sidebar-icon" />
          </div>
          <div className="list-item-text">Audio</div>
        </li>
        {/* <li
              className="sidebar-list-item"
              id="about-list-item"
              onClick={() => toggleAbout("toggle")}
            >
              <div className="list-item-icon">
                <MdInfo className="icon sidebar-icon" />
              </div>
              <div className="list-item-text">About</div>
            </li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
