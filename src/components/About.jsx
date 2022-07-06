import React from "react";
import "../scss/About.scss";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const About = (props) => {
  const clickCopyHandler = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
  };

  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-img"></div>
        <div className="about-content">
          <div className="about-section">
            <h1 className="name">Nebojsa Kovacevik</h1>
            <div className="contact-info">
              <span className="info">
                <span className="basic-info" onClick={clickCopyHandler}>
                  nebojsa.kovacevik@gmail.com
                </span>
              </span>
              <span className="info">
                <span className="basic-info" onClick={clickCopyHandler}>
                  +389 71 909 352
                </span>
              </span>
              <span className="info">Skopje, Macedonia</span>
              <span className="info">
                <a
                  href="https://github.com/nenomancer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="basic-info social-icons" />
                </a>
                <a
                  href="https://www.instagram.com/loopmaster.n/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="basic-info social-icons" />
                </a>
                <a
                  href="https://www.facebook.com/nebojsa.kovacevik/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="basic-info social-icons" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nebojsa-kovacevik/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="basic-info social-icons" />
                </a>
              </span>
            </div>
            <div className="about-title">
              <p>About Me</p>
            </div>
            <p>
              Hello there! My name is <strong>Nebojsa Kovacevik</strong> and I
              am a passionate front-end developer, always interested in learning
              and implementing new technologies.
            </p>
            <p>
              As a senior VFX artist and CG generalist for the past 6+ years, I
              have been tasked with problems of high complexity, which required
              not only artistic skills, but logical problem-solving, automation
              and optimization.
            </p>
            <p>
              Aside from my extensive experience in VFX, I've done many personal
              projects which require skills from other fields, varying from
              front-end development, to hand-drawn 2D animation.
            </p>
          </div>

          <div className="about-section">
            <div className="about-title">
              <p>Skills</p>
            </div>
            <ul className="skills">
              <li className="skill">Javascript</li>
              <li className="skill">React</li>
              <li className="skill">Sass</li>
              <li className="skill">Web Design</li>
              <li className="skill">Motion Graphics</li>
              <li className="skill">Graphic Design</li>
            </ul>
          </div>

          <div className="about-section" id="experience">
            <div className="about-title">
              <p>Experience</p>
            </div>
            <div className="experience-block">
              <p id="workplace">
                FX3X STUDIO
                <span>2018-2021</span>
                <span id="circle"></span>
              </p>
              <ul>
                <p id="work-position">VFX Compositing Artist</p>
                <li>Chroma keying and background replacement</li>
                <li>Color correction and grading</li>
                <li>Compositing elements into a scene</li>
                <li>
                  Projects include: Shazam, Detective Pikachu, Aladdin,
                  Godzilla, Spiderman: Far From Home, Doolittle, Sonic the
                  Hedgehog, Star Trek: Discovery, Star Trek: Picard, Men in
                  Black: International...
                </li>
              </ul>
            </div>
            <div className="experience-block">
              <p id="workplace">
                FX3X STUDIO
                <span>2015-2018</span>
                <span id="circle"></span>
              </p>
              <ul>
                <span id="circle"></span>
                <p id="work-position">VFX Paint Artist</p>
                <li>Removal of unnecessary elements in a shot</li>
                <li>Reconstruction of hidden elements/background in a shot</li>
                <li>
                  Projects include: X-Men: Apocalypse, Ghost in the Shell,
                  Alien: Covenant, Star Wars: The Last Jedi, Black Panther,
                  Deadpool 2, Passengers, Aquaman, Spiderman: Homecoming,
                  Mission Impossible: Fallout, Jurassic World, Venom...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
