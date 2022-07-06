import { useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";

// IMPORT HEADER ICONS
import About from "./components/About";
import Header from "./components/Header";

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
      ArtworkData.forEach((tile) => {
        if (tile.type.includes(galleryFilter)) {
          return tile.classList.add("visible");
        }
      });
    }
  }, [galleryFilter]);

  // IMAGE MODAL STATES
  const [showTileModal, setShowTileModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});

  // SHOW IMAGE MODAL
  const viewHandler = () => {
    setShowTileModal(true);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Sidebar
          ArtworkData={ArtworkData}
          setGalleryFilter={setGalleryFilter}
        />
        <About />
        <Gallery
          artwork={ArtworkData}
          viewHandler={viewHandler}
          showTileModal={showTileModal}
          setShowTileModal={setShowTileModal}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          filteredTiles={filteredTiles}
        />
      </main>
    </div>
  );
}

export default App;
