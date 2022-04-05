import { useEffect, useState } from "react";
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
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const [showAbout, setShowAbout] = useState(false);

  const viewHandler = () => {
    setShowImageModal(true);
  };

  const onShowAboutHandler = () => {
    setShowAbout(true);
  };

  return (
    <Container>
      {showAbout && <About />}
      <Header onShowAbout={onShowAboutHandler} onSetFilter={setFilterType} />
      <Gallery
        artwork={filteredTiles}
        viewHandler={viewHandler}
        showImageModal={showImageModal}
        setShowImageModal={setShowImageModal}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
      />
      
    </Container>
  );
}

export default App;
