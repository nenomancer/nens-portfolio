import { useState } from "react";
import About from "./components/About/About";
import Container from "./components/Container/Container";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";

function App() {
  const artwork = [
    {
      id: "1",
      name: "earf",
      src: "gallery/earf.png",
      alt: "earf",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: "2",
      name: "pluto",
      src: "gallery/pluto.png",
      alt: "pluto",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: "3",
      name: "river",
      src: "gallery/river.jpg",
      alt: "river",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: "4",
      name: "philharmony",
      src: "gallery/philharmony.png",
      alt: "philharmony",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: "5",
      name: "earf",
      src: "gallery/earf.png",
      alt: "earf",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: "6",
      name: "pluto",
      src: "gallery/pluto.png",
      alt: "pluto",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: "7",
      name: "river",
      src: "gallery/river.jpg",
      alt: "river",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: "8",
      name: "philharmony",
      src: "gallery/philharmony.png",
      alt: "philharmony",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  // -------- IMAGE MODAL ---------
  const [showImageModal, setShowImageModal] = useState(false);
  const viewHandler = (e) => {
    setShowImageModal(true);
  };
  const [selectedImg, setSelectedImg] = useState({});

  const [showAbout, setShowAbout] = useState(false);
  const onShowAboutHandler = (e) => {
    setShowAbout(true);
  }

  return (
    <Container>
      {showAbout && <About />}
      <Header onShowAbout={onShowAboutHandler} />
      <Gallery
        artwork={artwork}
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
