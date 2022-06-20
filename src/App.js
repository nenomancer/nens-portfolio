import { Fragment, useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Sidebar from "./components/Sidebar/Sidebar";

// IMPORT SIDEBAR ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdPerson } from "react-icons/md";

// IMPORT HEADER ICONS
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";

import variables from "./index.scss";

function App() {
  // ---------- GALLERY FILTER ----------

  const [filterType, setFilterType] = useState("all"); // This is for the top filterType bar
  const [filteredTiles, setFilteredTiles] = useState([]); // This is for the ArtworkData tiles

  useEffect(() => {
    filterType === "all"
      ? setFilteredTiles(ArtworkData)
      : setFilteredTiles(
          ArtworkData.filter((item) => item.type.includes(filterType))
        ); // SETS WHICH TILES ARE VISIBLE
  }, [filterType]);

  // -------- IMAGE MODAL ---------
  const [showTileModal, setShowTileModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const [showAbout, setShowAbout] = useState(false);

  const viewHandler = () => {
    setShowTileModal(true);
  };

  // const onShowAboutHandler = () => {
  //   setShowAbout(true);
  // };
  const menuItems = document.querySelectorAll(".sidebar-list-item");
  const menuClickHandler = (e) => {
    e.stopPropagation();
    console.log(e.target.textContent);
    setFilterType(e.target.textContent.toLowerCase());
    for (let item of menuItems) {
      if (item.textContent === e.target.textContent) {
        e.target.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  };

  // console.log(variables.sidebarWidth);

  // variables.sidebarWidth = `${10}rem`;

  const sidebar = document.querySelector(".sidebar");
  const textItems = [...document.querySelectorAll('[data-text-display]')];

  function toggleTextItems() {
    for (let item of textItems) {
      item.style.classList.toggle('open-items');
    }
  }

  let sidebarOpen = false;
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.style.flexBasis = `${12}rem`;
      sidebarOpen = true;
      toggleTextItems();
    } else {
      sidebar.style.flexBasis = `${4}rem`;
      sidebarOpen = false;
    }
  }

  return (
    <Fragment>
      {showAbout && <About setShowAbout={setShowAbout} />}
      <header className="header">
        <div id="menu-button" onClick={toggleSidebar}>
          <GiHamburgerMenu id="menu-icon" />
        </div>
        <span id="name">NENS</span>
        <div className="icons">
          <GrInstagram />
          <GrLinkedin />
          <GrFacebook />
        </div>
      </header>
      <main>
        <aside className="sidebar open">
          <ul className="sidebar-list">
            <li className="sidebar-list-item active" onClick={menuClickHandler}>
              <MdAutoAwesomeMosaic className="sidebar-icon" />
              <div className="open-items" data-text-display>All</div>
            </li>
            <li className="sidebar-list-item " onClick={menuClickHandler}>
              <MdPhotoLibrary className="sidebar-icon" />
              <div className="open-items" data-text-display>Images</div>
            </li>
            <li className="sidebar-list-item " onClick={menuClickHandler}>
              <MdVideoLibrary className="sidebar-icon" />
              <div className="open-items" data-text-display>Videos</div>
            </li>
            <li className="sidebar-list-item " onClick={menuClickHandler}>
              <MdLibraryMusic className="sidebar-icon" />
              <div className="open-items" data-text-display>Audio</div>
            </li>
            <li className="sidebar-list-item ">
              <MdPerson className="sidebar-icon" />
              <div className="open-items" data-text-display>About</div>
            </li>
          </ul>
        </aside>
        {/* <Sidebar setShowAbout={setShowAbout} onSetFilter={setFilterType} /> */}
        <Gallery
          artwork={filteredTiles}
          viewHandler={viewHandler}
          showTileModal={showTileModal}
          setShowTileModal={setShowTileModal}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      </main>
      {/* <footer>Footer</footer> */}
    </Fragment>
  );
}

export default App;
