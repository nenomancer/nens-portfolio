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
  const menuItems = [...document.querySelectorAll(".sidebar-list-item")];

  const menuClickHandler = (e) => {
    // closeMenu();
    // toggleMenu();
    toggleAbout("close");
    // SET FILTER TYPE BASED ON TEXT CONTENT OF MENU ITEM
    setFilterType(e.target.textContent.toLowerCase());
    // SET ACTIVE CLASS FOR CLICKED ITEM
    menuItems.forEach((item) => {
      if (item.textContent !== e.target.textContent) {
        item.classList.remove("active");
      } else {
        e.target.classList.add("active");
      }
    });
  };

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
  const aboutButton = document.querySelector("#about-list-item");

  // const toggleAbout = (open) => {
  //   if (open) {
  //     aboutContainer.classList.toggle("open");
  //     aboutCard.classList.toggle("open");
  //     document.querySelector(".gallery").classList.toggle("open");
  //     aboutButton.classList.toggle("about-btn-toggle");
  //   } else {
  //     aboutContainer.classList.remove("open");
  //     aboutCard.classList.remove("open");
  //     document.querySelector(".gallery").classList.remove("open");
  //     aboutButton.classList.remove("about-btn-toggle");
  //   }
  // };

  const toggleAbout = (state) => {
    if (state === "toggle") {
      aboutContainer.classList.toggle("open");
      document.querySelector(".gallery").classList.toggle("open");
      aboutButton.classList.toggle("about-btn-toggle");
    } else if (state === "close") {
      aboutContainer.classList.remove("open");
      document.querySelector(".gallery").classList.remove("open");
      aboutButton.classList.remove("about-btn-toggle");
    }
  };

  const aboutClickHandler = () => {
    // toggleAbout();
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
          className="sidebar-list-item"
          id="about-list-item"
          onClick={() => toggleAbout("toggle")}
        >
          <div className="list-item-icon">
            <MdInfo className="icon sidebar-icon" />
          </div>
          <div className="list-item-text">About</div>
        </div>
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
        <div>
          <div className="about-container">
            <div className="about-card">
              <div className="about-img"></div>
              <div className="about-content">
                {/* ABOUT SECTION  */}
                <div className="about-section">
                  <div className="about-title">
                    <h1>About Me</h1>
                  </div>
                  <p>
                    Hello there! My name is Nebojsa Kovacevik and I am a
                    passionate front-end developer, always interested in
                    learning and implementing new technologies, and improving my
                    workflow.
                  </p>
                  <p>
                    As a senior VFX artist and CG generalist for the past 6+
                    years, I have been tasked with problems of high complexity,
                    which required not only artistic skills, but logical
                    problem-solving, automation and optimization.
                  </p>
                  <p>
                    Aside from my extensive experience in VFX, I've done many
                    personal projects which require skills from other fields,
                    varying from front-end development, to hand-drawn 2D
                    animation.
                  </p>
                </div>

                {/* SERVICES SECTION  */}
                <div className="about-section">
                  <div className="about-title">
                    <h1>Services</h1>
                    <span></span>
                  </div>
                  <ul>
                    <li>Web Developoment</li>
                    <li>3D & Graphic Design</li>
                    <li>Animation & Motion Graphics</li>
                  </ul>
                  <ul>
                    <li>Web Developoment</li>
                    <li>3D & Graphic Design</li>
                    <li>Animation & Motion Graphics</li>
                  </ul>
                  {/* INTERESTS SECTION  */}

                  {/* <div className="right">
                    <div className="about-title">
                      <h1>Interests</h1>
                      <span></span>
                    </div>
                    <ul>
                      <li>Web Developoment</li>
                      <li>3D & Graphic Design</li>
                      <li>Animation & Motion Graphics</li>
                    </ul>
                  </div> */}
                </div>

                {/* SERVICES SECTION  */}
                <div className="about-section">
                  <div className="left">
                    <div className="about-title">
                      <h1>Experience</h1>
                      <span></span>
                    </div>
                    <ul>
                      <li>Web Developoment</li>
                      <li>3D & Graphic Design</li>
                      <li>Animation & Motion Graphics</li>
                    </ul>
                  </div>
                  {/* INTERESTS SECTION  */}

                  <div className="right">
                    <div className="about-title">
                      <h1>Interests</h1>
                      <span></span>
                    </div>
                    <ul>
                      <li>Web Developoment</li>
                      <li>3D & Graphic Design</li>
                      <li>Animation & Motion Graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Gallery
            artwork={filteredTiles}
            viewHandler={viewHandler}
            showTileModal={showTileModal}
            setShowTileModal={setShowTileModal}
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        </div>
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default App;
