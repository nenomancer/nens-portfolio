import { Fragment, useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
import About from "./components/About/About";
import Container from "./components/Container/Container";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";

function App() {
  // ---------- GALLERY FILTER ----------

  const [filterType, setFilterType] = useState("all"); // This is for the top filterType bar
  const [filteredTiles, setFilteredTiles] = useState([]); // This is for the ArtworkData tiles

  useEffect(() => {
    filterType === "all"
      ? setFilteredTiles(ArtworkData)
      : setFilteredTiles(
          ArtworkData.filter((item) => item.type === filterType)
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
      <Header setShowAbout={setShowAbout} onSetFilter={setFilterType} />
      <Gallery
        artwork={filteredTiles}
        viewHandler={viewHandler}
        showTileModal={showTileModal}
        setShowTileModal={setShowTileModal}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
      />
    </Fragment>
  );
}

export default App;
