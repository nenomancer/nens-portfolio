import React from "react";
import "./About.css";
import AboutIcon from "./AboutIcon";

import { IoClose } from "react-icons/io5";

import { IconContext } from "react-icons";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const About = (props) => {
  // const socialIcons = [
  //   {
  //     name: "Facebook",
  //     link: "https://www.facebook.com/nebojsa.kovacevik/",
  //     icon: "icons/social/facebook-brands.svg",
  //     info: "My Facebook profile",
  //   },
  //   {
  //     name: "Instagram",
  //     link: "https://www.instagram.com/loopmaster.n/",
  //     icon: "icons/social/instagram.svg",
  //     info: "My Instagram profile",
  //   },
  //   {
  //     name: "Github",
  //     link: "https://github.com/nenomancer",
  //     icon: "icons/social/github.svg",
  //     info: "My Github profile",
  //   },
  //   {
  //     name: "LinkedIn",
  //     link: "https://www.linkedin.com/in/nebojsa-kovacevik-5a923515a/",
  //     icon: "icons/social/linkedin.svg",
  //     info: "My LinkedIn profile",
  //   },
  // ];

  const visualIcons = [
    {
      type: "visual",
      name: "Photoshop",
      icon: "icons/software/photoshop.png",
      info: "Adobe Photoshop. Extensive knowledge.",
      level: 10,
    },
    {
      type: "visual",
      name: "After Effects",
      icon: "icons/software/after-effects.png",
      info: "After Effects: Advanced knowledge ",
      level: 9,
    },
    {
      type: "visual",
      name: "Premiere Pro",
      icon: "icons/software/premiere.png",
      info: "Premier Pro: Very good knowledge of most of it's functions",
      level: 8,
    },
    {
      type: "visual",
      name: "DaVinci",
      icon: "icons/software/davinci.png",
      info: "Davinci Resolve: Excellent grasp of all it's functions",
      level: 10,
    },
    {
      type: "visual",
      name: "Blender",
      icon: "icons/software/blender.png",
      info: "Blender: Excellent grasp of all it's functions",
      level: 10,
    },
    {
      type: "visual",
      name: "Nuke",
      icon: "icons/software/nuke.png",
      info: "NUKE: Excellent grasp of all it's functions",
      level: 10,
    },
  ];

  const audioIcons = [
    {
      type: "audio",
      name: "ableton",
      icon: "icons/software/ableton.png",
      info: "Ableton: Excellent grasp of all it's functions",
      level: 10,
    },
    {
      type: "audio",
      name: "audacity",
      icon: "icons/software/audacity.png",
      info: "Audacity: Excellent grasp of all it's functions",
      level: 10,
    },
    {
      type: "audio",
      name: "maschine",
      icon: "icons/software/maschine.png",
      info: "Maschine: Excellent grasp of all it's functions",
      level: 10,
    },
    {
      type: "audio",
      name: "cubase",
      icon: "icons/software/cubase.png",
      info: "Cubase: Excellent grasp of all it's functions",
      level: 10,
    },
  ];

  const codeIcons = [
    {
      type: "code",
      name: "HTML5",
      icon: "icons/software/html.png",
      info: "HTML5: Excellent grasp of all it's functions.",
    },
  ];
  const toggleContainer = (index) => {
    const containers = document.getElementsByClassName("info-container");

    // for (let item of containers) {
    //   if (item === containers[index]) {
    //     item.style.height = "max-content";
    //     item.style.overflow = "visible";
    //   } else {
    //     item.style.height = "4rem";
    //     item.style.overflow = "hidden";
    //   }
    // }

    for (let item of containers) {
      item === containers[index]
        ? item.classList.add("open")
        : item.classList.remove("open");
    }
  };

  const clickCopyHandler = (e) => {
    console.log(e.target.textContent);
    navigator.clipboard.writeText(e.target.textContent);
  };

  return (
    <div className="about">
      <div className="container">
        <button id="close-button" onClick={() => props.setShowAbout(false)}>
          <IoClose />
        </button>
        <div id="top-container">
          <img id="profile-pic" src="https://imgur.com/fLFzM2Y.png" alt="" />

          <div id="name-container">
            <h1 id="name">NEBOJSA KOVACEVIK</h1>
            <span id="basic-info-container">
              <span>
                <span className="basic-info" onClick={clickCopyHandler}>
                  nebojsa.kovacevik@gmail.com
                </span>{" "}
                | <span className="tooltip">Click to copy email adress</span>
              </span>{" "}
              <span>
                <span className="basic-info" onClick={clickCopyHandler}>
                  {" "}
                  +389 71 909 352
                </span>{" "}
                | <span className="tooltip">Click to copy phone number</span>
              </span>{" "}
              <span className="basic-info">Skopje, Macedonia</span> |{" "}
              <span>
                {/* <IconContext.Provider value={{ className: "basic-info" }}> */}
                <a
                  href="https://www.facebook.com/nebojsa.kovacevik/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="basic-info social-icons" />
                  <span className="tooltip">
                    Click to visit Facebook profile
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/loopmaster.n/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="basic-info social-icons" />
                  <span className="tooltip">
                    Click to visit Instagram profile
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nebojsa-kovacevik-5a923515a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="basic-info social-icons" />
                  <span className="tooltip">Linkiding</span>
                </a>
                {/* </IconContext.Provider> */}
              </span>
            </span>
          </div>
        </div>

        {/* ABOUT  */}
        <div className="info-container open" onClick={() => toggleContainer(0)}>
          {/* NAME AND CONTACT INFO  */}
          <h1>About</h1>
          {/* ABOUT THIS WEBSITE  */}
          <h2>This Website</h2>
          <p>
            This has been my project for the last few months. I made it in order
            to practice my web development skills (mainly React and CSS), but
            also for me to have all my work in one place, in the highest quality
            possible.
          </p>
          <p>
            Professionally I am a senior VFX artist, but this portfolio is
            mainly a showcase of my other hobbies and interests: 3D renders,
            animations, generative art, sound design, etc.
          </p>
          <p>Feel free to contact me, and I hope you enjoy!</p>
        </div>

        {/* WORK EXPERIENCE  */}
        <div className="info-container" onClick={() => toggleContainer(1)}>
          <h1>Work Experience</h1>
          <h2>
            VFX Artist,{" "}
            <a
              href="https://fx3x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FX3X
            </a>{" "}
            <span>02.2016-12.2021</span>
          </h2>
          <p>
            As a senior VFX artist and CG generalist, I have been tasked with
            problems of high complexity, which require not only artistic skills,
            but logical problem-solving, automation and optimization.
          </p>
          <p>
            My portfolio now consists of over 40 feature length films and
            popular TV shows, some of which are: Thor: Ragnarok, Black Panther,
            Guardians of the Galaxy, Spider man: Homecoming, Star Wars: The Last
            Jedi & The Rise of Skywalker, Alien: Covenant, X-Men: Apocalypse,
            Mission Impossible: Fallout, Ghost in the Shell, The Mandalorian,
            Star Trek: Discovery, etc.
          </p>
        </div>

        {/* LATEST PROJECTS  */}
        <div className="info-container" onClick={() => toggleContainer(2)}>
          <h1>Latest Projects</h1>
          <h2>
            <a
              href="https://www.youtube.com/watch?v=3UDbgvsJYYU&list=PLR4U_V3XMRwsrO7vh8wcn_OJRIUfNjd7Z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neizbruseni Kamenja
            </a>
            <span>Sound Production / 3D Animation</span>
          </h2>
          <p>
            A half length album consisting of seven tracks. I worked on the
            production, and also created unique procedural animations for all of
            the songs.
          </p>

          <h2>
            <a
              href="https://www.youtube.com/watch?v=VF8CRfzoeGY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vrvot na Trkaloto
            </a>
            <span>Mixed 3D & 2D Animation</span>
          </h2>
          <p>
            A looping animation for a single. The environment is modeled and
            animated in 3D, while the two characters are 2D hand-animated. All
            of it was made in Blender.
          </p>
        </div>
        {/* SKILLS */}
        <div
          className="info-container"
          id="skills-container"
          onClick={() => toggleContainer(3)}
        >
          <h1>Skills</h1>
          <h2>Visual</h2>
          <div className="skills-container">
            {visualIcons.map((icon, index) => (
              <AboutIcon icon={icon} key={index} />
            ))}
          </div>
          <h2>Audio</h2>
          <div className="skills-container">
            {audioIcons.map((icon, index) => (
              <AboutIcon icon={icon} key={index} />
            ))}
          </div>
          <h2>Code</h2>
          <div className="skills-container">
            {codeIcons.map((icon, index) => (
              <AboutIcon icon={icon} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="backdrop" onClick={() => props.setShowAbout(false)}></div>
    </div>
  );
};

export default About;
