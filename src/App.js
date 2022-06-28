import { Fragment, useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
// import About from "./components/About/About";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";

// IMPORT SIDEBAR ICONS
import { GiHamburgerMenu } from "react-icons/gi";

import { MdInfo } from "react-icons/md";
import { MdPerson } from "react-icons/md";

// IMPORT HEADER ICONS
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import About from "./components/About";
import Aside from "./components/Sidebar";

// import variables from "./index.scss";

function App() {
  // GALLERY FILTER STATES

  const [galleryFilter, setGalleryFilter] = useState("all"); // This is for the top galleryFilter bar
  const [filteredTiles, setFilteredTiles] = useState([]); // This is for the ArtworkData tiles

  // FILTER THROUGH TILES BASED ON FILTER TYPE
  // useEffect(() => {
  //   galleryFilter === "all"
  //     ? setFilteredTiles(ArtworkData)
  //     : setFilteredTiles(
  //         ArtworkData.filter((item) => item.type.includes(galleryFilter))
  //       );
  // }, [galleryFilter]);

  useEffect(() => {
    if (galleryFilter === "all") {
      setFilteredTiles(ArtworkData);
    } else {
      console.log(galleryFilter);
      ArtworkData.map((tile) => {
        if (tile.type.includes(galleryFilter)) {
          tile.classList.add("visible");
        }
      });
    }
  }, [galleryFilter]);

  // IMAGE MODAL STATES
  const [showTileModal, setShowTileModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const [showAbout, setShowAbout] = useState(false);

  // SHOW IMAGE MODAL
  const viewHandler = () => {
    setShowTileModal(true);
  };

  // MAKE ARRAY OUT OF MENU ITEMS
  // const menuItems = [...document.querySelectorAll(".sidebar-list-item")];

  // const menuClickHandler = (e) => {
  //   // closeMenu();
  //   // toggleMenu();
  //   toggleAbout("close");
  //   // SET FILTER TYPE BASED ON TEXT CONTENT OF MENU ITEM
  //   setGalleryFilter(e.target.textContent.toLowerCase());
  //   // SET ACTIVE CLASS FOR CLICKED ITEM
  //   menuItems.forEach((item) => {
  //     if (item.textContent !== e.target.textContent) {
  //       item.classList.remove("active");
  //     } else {
  //       e.target.classList.add("active");
  //     }
  //   });
  // };

  const sidebar = document.querySelector(".sidebar");
  const listItemTexts = [...document.querySelectorAll(".list-item-text")];
  const listItemIcons = [...document.querySelectorAll(".list-item-icon")];

  let isMenuOpen = false;
  const openMenu = () => {
    sidebar.classList.add("sidebar-open");
    listItemTexts.forEach((text) => {
      text.classList.add("text-fade-in");
    });
    isMenuOpen = true;
  };
  const closeMenu = () => {
    // CLOSE MENU
    sidebar.classList.remove("sidebar-open");
    listItemTexts.forEach((text) => {
      text.classList.remove("text-fade-in");
    });
    isMenuOpen = false;
  };

  const toggleMenu = () => {
    if (!isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const aboutContainer = document.querySelector(".about-container");
  const aboutCard = document.querySelector(".about-card");
  const aboutButton = document.querySelector("#about-button");

  const toggleAbout = (state) => {
    if (state === "toggle") {
      aboutContainer.classList.toggle("open");
      // document.querySelector(".gallery").classList.toggle("open");
      aboutButton.classList.toggle("about-btn-toggle");
    } else if (state === "close") {
      aboutContainer.classList.remove("open");
      // document.querySelector(".gallery").classList.remove("open");
      aboutButton.classList.remove("about-btn-toggle");
    }
  };

  return (
    <div className="container">
      {/* {showAbout && <About setShowAbout={setShowAbout} />} */}
      <header className="header">
        <div className="header-button" onMouseUp={toggleMenu}>
          <GiHamburgerMenu className="icon" />
        </div>
        <span className="header-name">NENS</span>

        <div
          className="header-button"
          id="about-button"
          onClick={() => toggleAbout("toggle")}
        >
          <MdInfo className="icon sidebar-icon" />
        </div>
      </header>
      <main>
        <Sidebar ArtworkData={ArtworkData}/>
        {/* <About /> */}
        <Gallery
          artwork={ArtworkData}
          viewHandler={viewHandler}
          showTileModal={showTileModal}
          setShowTileModal={setShowTileModal}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      </main>
    </div>
  );
}

export default App;
