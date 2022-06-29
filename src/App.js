import { Fragment, useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
// import About from "./components/About/About";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";

// IMPORT SIDEBAR ICONS

import { MdPerson } from "react-icons/md";

// IMPORT HEADER ICONS
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import About from "./components/About";
import Aside from "./components/Sidebar";
import Header from "./components/Header";

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

  return (
    <div className="container">
      {/* {showAbout && <About setShowAbout={setShowAbout} />} */}
      <Header />
      <main>
        <Sidebar ArtworkData={ArtworkData} />
        <About />
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
