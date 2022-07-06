import React from "react";
import "../scss/Sidebar.scss";

import { MdAutoAwesomeMosaic } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";

const Sidebar = (props) => {
  const menuItems = [...document.querySelectorAll(".sidebar-list-item")];
  const galleryTiles = [...document.querySelectorAll(".tile__container")];

  const menuClickHandler = (e) => {
    const menuTitle = e.target.innerText;

    if (menuTitle.toLowerCase() === "all") {
      for (let tile of galleryTiles) {
        tile.classList.remove("hidden");
      }
    } else {
      props.ArtworkData.forEach((tile, index) => {
        if (!tile.type.includes(menuTitle.toLowerCase())) {
          galleryTiles[index].classList.add("hidden");
        } else {
          galleryTiles[index].classList.remove("hidden");
        }
      });
      // props.ArtworkData.map((tile, index) => {

      // });
    }

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
        <li className="sidebar-list-item active" onClick={menuClickHandler}>
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
