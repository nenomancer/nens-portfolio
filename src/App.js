import { useEffect, useState } from "react";
import About from "./components/About/About";
import Container from "./components/Container/Container";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";

function App() {
  const artwork = [
    {
      id: "1",
      name: "earf",
      type: "photos",
      src: "gallery/earf.png",
      alt: "earf",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "",
    },
    {
      id: "2",
      name: "pluto",
      type: "videos",
      src: "gallery/pluto.png",
      alt: "pluto",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "wide",
    },
    {
      id: "3",
      name: "river",
      type: "photos",
      src: "gallery/river.jpg",
      alt: "river",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "tall",
    },
    {
      id: "4",
      type: "music",
      name: "philharmony",
      src: "gallery/philharmony.png",
      alt: "philharmony",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "wide tall",
    },
    {
      id: "5",
      type: "photos",
      name: "earf",
      src: "gallery/earf.png",
      alt: "earf",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "",
    },
    {
      id: "6",
      type: "videos",
      name: "pluto",
      src: "gallery/pluto.png",
      alt: "pluto",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "",
    },
    {
      id: "7",
      type: "photos",
      name: "river",
      src: "gallery/river.jpg",
      alt: "river",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "wide",
    },
    {
      id: "8",
      type: "videos",
      name: "philharmony",
      src: "gallery/philharmony.png",
      alt: "philharmony",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      gridSize: "tall",
    },
  ];

  // ---------- GALLERY FILTER ----------

  const [filter, setFilter] = useState("all");
  const [filteredTiles, setFilteredTiles] = useState([]);

  useEffect(() => {
    filter === "all"
      ? setFilteredTiles(artwork)
      : setFilteredTiles(artwork.filter((item) => item.type === filter));
  }, [filter]);

  const onSetFilterHandler = (e) => {
    setFilter(e.target.textContent.toLowerCase());
  
  };

  // -------- IMAGE MODAL ---------
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const [showAbout, setShowAbout] = useState(false);

  const viewHandler = (e) => {
    setShowImageModal(true);
  };

  const onShowAboutHandler = (e) => {
    setShowAbout(true);
  };

  return (
    <Container>
      {showAbout && <About />}
      <Header
        onShowAbout={onShowAboutHandler}
        onSetFilter={onSetFilterHandler}
      />
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
