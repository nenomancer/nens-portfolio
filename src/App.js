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

  return (
    <Fragment>
      {showAbout && <About setShowAbout={setShowAbout} />}
      <header className="header">
        <div id="menu-button">
          <GiHamburgerMenu id="menu-icon" onClick={() => setShowAbout(true)} />
        </div>
        <span id="name">NENS</span>
      </header>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item active">
            <MdAutoAwesomeMosaic className="sidebar-icon" />
            <div className="hidden-sidebar">All</div>
          </li>
          <li className="sidebar-list-item active">
            <MdPhotoLibrary className="sidebar-icon" />
            <div className="hidden-sidebar">Images</div>
          </li>
          <li className="sidebar-list-item active">
            <MdVideoLibrary className="sidebar-icon" />
            <div className="hidden-sidebar">Video</div>
          </li>
          <li className="sidebar-list-item active">
            <MdLibraryMusic className="sidebar-icon" />
            <div className="hidden-sidebar">Audio</div>
          </li>
          <li className="sidebar-list-item active">
            <MdPerson className="sidebar-icon" />
            <div className="hidden-sidebar">About</div>
          </li>
        </ul>
      </aside>
      {/* <Sidebar setShowAbout={setShowAbout} onSetFilter={setFilterType} />
      <Gallery
        artwork={filteredTiles}
        viewHandler={viewHandler}
        showTileModal={showTileModal}
        setShowTileModal={setShowTileModal}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
      /> */}
    </Fragment>
  );
}

export default App;
