import { Fragment, useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
// import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Sidebar from "./components/Sidebar/Sidebar";

// IMPORT SIDEBAR ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdPerson } from "react-icons/md";

// IMPORT HEADER ICONS
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";

import variables from "./index.scss";

function App() {
  // GALLERY FILTER STATES

  const [filterType, setFilterType] = useState("all"); // This is for the top filterType bar
  const [filteredTiles, setFilteredTiles] = useState([]); // This is for the ArtworkData tiles

  // FILTER THROUGH TILES BASED ON FILTER TYPE
  useEffect(() => {
    filterType === "all"
      ? setFilteredTiles(ArtworkData)
      : setFilteredTiles(
          ArtworkData.filter((item) => item.type.includes(filterType))
        );
  }, [filterType]);

  // IMAGE MODAL STATES
  const [showTileModal, setShowTileModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const [showAbout, setShowAbout] = useState(false);

  // SHOW IMAGE MODAL
  const viewHandler = () => {
    setShowTileModal(true);
  };

  // MAKE ARRAY OUT OF MENU ITEMS
  const menuItems = document.querySelectorAll(".sidebar-list-item");
  const menuClickHandler = (e) => {
    e.stopPropagation();
    // SET FILTER TYPE BASED ON TEXT CONTENT OF MENU ITEM
    setFilterType(e.target.textContent.toLowerCase());
    for (let item of menuItems) {
      // SET ACTIVE CLASS FOR CLICKED ITEM
      if (item.textContent === e.target.textContent) {
        e.target.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  };

  const sidebar = document.querySelector(".sidebar");
  const listItemTexts = [...document.querySelectorAll(".list-item-text")];
  const listItemIcons = [...document.querySelectorAll(".list-item-icon")];
  let isMenuOpen = false;
  const toggleMenu = () => {
    
    if (!isMenuOpen) {
      // OPEN MENU
      sidebar.style.flexBasis = "14rem";
      listItemTexts.forEach((text, index) => {
        text.classList.add("text-fade-in");
      });
      isMenuOpen = true;
    } else {
      // CLOSE MENU
      sidebar.style.flexBasis = "5rem";
      listItemTexts.forEach((text) => {
        text.classList.remove("text-fade-in");
      });
      isMenuOpen = false;
    }
  };

  const closeSidebar = () => {
    listItemTexts.forEach((text, index) => {
      text.classList.remove("text-fade-in");
    });
    sidebar.style.flexBasis = "5rem";
  };

  const aboutClickHandler = () => {
    closeSidebar();
    setShowAbout(true);
  };
  return (
    <Fragment>
      {/* {showAbout && <About setShowAbout={setShowAbout} />} */}
      <header className="header">
        <div id="menu-button" onClick={toggleMenu}>
          <GiHamburgerMenu id="menu-icon" />
        </div>
        <span id="name">NENS</span>
        {/* <div className="icons">
          <GrInstagram />
          <GrLinkedin />
          <GrFacebook />
        </div> */}
      </header>
      <main>
        <aside className="sidebar">
          <ul className="sidebar-list">
            <li className="sidebar-list-item active" onClick={menuClickHandler}>
              <div className="list-item-icon">
                <MdAutoAwesomeMosaic className="sidebar-icon" />
              </div>
              <div className="list-item-text active">All</div>
            </li>
            <li className="sidebar-list-item " onClick={menuClickHandler}>
              <div className="list-item-icon">
                <MdPhotoLibrary className="sidebar-icon" />
              </div>
              <div className="list-item-text">Images</div>
            </li>
            <li className="sidebar-list-item " onClick={menuClickHandler}>
              <div className="list-item-icon">
                <MdVideoLibrary className="sidebar-icon" />
              </div>
              <div className="list-item-text">Videos</div>
            </li>
            <li className="sidebar-list-item " onClick={menuClickHandler}>
              <div className="list-item-icon">
                <MdLibraryMusic className="sidebar-icon" />
              </div>
              <div className="list-item-text">Audio</div>
            </li>
            <li className="sidebar-list-item" onClick={aboutClickHandler}>
              <div className="list-item-icon">
                <MdInfo className="sidebar-icon" />
              </div>
              <div className="list-item-text">About</div>
            </li>
          </ul>
        </aside>
        {/* <div className="about-container">
          <div className="card">
            About
          </div>
        </div> */}
        <Gallery
          artwork={filteredTiles}
          viewHandler={viewHandler}
          showTileModal={showTileModal}
          setShowTileModal={setShowTileModal}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          closeSidebar={closeSidebar}
        />
      </main>
      {/* <footer>Footer</footer> */}
    </Fragment>
  );
}

export default App;
