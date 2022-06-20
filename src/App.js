import { Fragment, useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Sidebar from "./components/Sidebar/Sidebar";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdPerson } from "react-icons/md";

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

  const sidebar = document.querySelector(".sidebar");
  const listItemTexts = [...document.querySelectorAll(".list-item-text")];
  const listItemIcons = [...document.querySelectorAll(".list-item-icon")];
  let isMenuOpen = false;
  const toggleMenu = () => {
    listItemTexts.forEach((text, index) => {
      text.classList.toggle("text-fade-in");
    });
    if (!isMenuOpen) {
      // OPEN MENU
      sidebar.style.flexBasis = "12rem";

      isMenuOpen = true;
    } else {
      // CLOSE MENU
      sidebar.style.flexBasis = "5rem";
      // listItemTexts.forEach((text) => {
      //   text.classList.add("text-fade-in");
      // });
      isMenuOpen = false;
    }
  };

  return (
    <Fragment>
      {showAbout && <About setShowAbout={setShowAbout} />}
      <header className="header">
        <div id="menu-button" onClick={toggleMenu}>
          <GiHamburgerMenu id="menu-icon" />
        </div>
        <span id="name">NENS</span>
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
            <li className="sidebar-list-item" onClick={() => setShowAbout(true)}>
              <div className="list-item-icon">
                <MdInfo className="sidebar-icon" />
              </div>
              <div className="list-item-text">About</div>
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
