import { Fragment, useEffect, useState } from "react";
import { ArtworkData } from "./ArtworkData";
// import About from "./components/About/About";
// import Gallery from "./components/Gallery/Gallery";
// import Header from "./components/Header/Header";
import "../src/sass/styles.scss";
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
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const [showAbout, setShowAbout] = useState(false);

  const viewHandler = () => {
    setShowModal(true);
  };

  // const onShowAboutHandler = () => {
  //   setShowAbout(true);
  // };

  // ------ NEW STUFF --------

  const [isActive, setIsActive] = useState();
  const navItems = document.querySelectorAll("a");

  const navClickHandler = (e) => {
    console.log(`event: ${e}`);
    for (let item of navItems) {
    }
  };

  // for (let item of navItems) {
  //   item.addEventListener("mousedown", navClickHandler);
  // }

  return (
    <Fragment>
      <div className="navbar">
        <h1>NENS</h1>
        <nav>
          <a href="#home" onMouseDown={navClickHandler}>
            Home
          </a>
          <a href="#about" className="active">
            About
          </a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          {/* <div className="highlight"></div> */}
        </nav>
        {/* <ul className="nav">
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
        </ul> */}
      </div>
      <div className="main-section">
        <div className="left">
          <img src="https://i.imgur.com/xpeKyE5.jpg" />
        </div>

        {/* ---------------- RIGHT SECTION --------------  */}
        <div className="right">
          {/* ---------- SECTION HOME ----------------  */}
          <section id="home">
            <div>
              <h1>Nebojsa Kovacevik</h1>
              <span></span>
              <h3>A solution for all your creative problems.</h3>
              <div className="btn btn-accent">Get in Touch</div>
              <div className="btn">Download CV</div>
            </div>
          </section>
          {/* ------ SECTION ABOUT -------  */}
          <section id="about">
            <div className="content">
              <h3>About Me</h3>
              <div className="content-left">
                <p>
                  Hi there! My name's Neno, I am a senior VFX artist with over 6
                  years of experience working in the movie industry. My tasks
                  someting someting creative and logical problems.
                </p>
                <p>
                  As a passionate problem-solver, I used automation in my
                  everyday work, as well as optimizing the procedures, and
                  organizing my projects for easy readability.
                </p>
              </div>
              <div className="content-right">
                <ul>
                  <li>
                    Name: <span>Nebojsa Kovacevik</span>
                  </li>
                  <li>
                    Email: <span>nebojsa.kovacevik@gmail.com</span>
                  </li>
                  <li>
                    Phone: <span>+389 71 909 352</span>
                  </li>
                  <li>
                    Location: <span>Skopje, Macedonia</span>
                  </li>
                </ul>

                {/* <ul>
                  <li>
                    <div className="item">
                      <span className="item-left">Name:</span>
                      <span className="item-right">Nebojsa Kovacevik</span>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="item-left">Adress:</span>
                      <span className="item-right">Skopje, Macedonia</span>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="item-left">Email:</span>
                      <span className="item-right">
                        nebojsa.kovacevik@gmail.com
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="item-left">Phone:</span>
                      <span className="item-right">+389 71 909 352</span>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="content">
              <div className="content-left">
                <h3>Services</h3>
                <ul>
                  <li>Front-end Development</li>
                  <li>3D & Graphic Design</li>
                  <li>Animation</li>
                  <li>Sound Design</li>
                </ul>
              </div>
              <div className="content-right">
                <h3>Interests</h3>
                <ul>
                  <li>Drawing & Animation</li>
                  <li>Music & Audio Production</li>
                  <li>Automation & Procedural somethin</li>
                  <li>Photography</li>
                </ul>
              </div>
            </div>

            <div className="content">
              <div className="content-left">
                <h3>Programming</h3>
                <ul>
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="content-right">
                <h3>Design</h3>
                <ul>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </section>
          {/* ----------- SECTION SERVICES ----------  */}

          {/* ---------- SECTION CREATIVE PORTFOLIO ------------ */}
          <section id="portfolio">
            <h3>Portfolio</h3>
            <ul>
              <li>All</li>
              <li>Visual</li>
              <li>Audio</li>
              <li>Code</li>
            </ul>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
