import React from "react";
import "./About.css";
import AboutIcon from "./AboutIcon";

import { IoClose } from "react-icons/io5";

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
      info: "Excellent grasp of it's functions and capabilities",
      level: 10,
    },
    {
      type: "visual",
      name: "After Effects",
      icon: "icons/software/after-effects.png",
      info: "Very good grasp of it's functions and capabilities",
      level: 9,
    },
    {
      type: "visual",
      name: "Premiere Pro",
      icon: "icons/software/premiere.png",
      info: "Very good grasp of it's functions and capabilities",
      level: 8,
    },
    {
      type: "visual",
      name: "DaVinci",
      icon: "icons/software/davinci.png",
      info: "Excellent grasp of it's functions and capabilities",
      level: 10,
    },
    {
      type: "visual",
      name: "Blender",
      icon: "icons/software/blender.png",
      info: "Excellent grasp of it's functions and capabilities",
      level: 10,
    },
    {
      type: "visual",
      name: "Nuke",
      icon: "icons/software/nuke.png",
      info: "Excellent grasp of it's functions and capabilities",
      level: 10,
    },
  ];

  const audioIcons = [
    {
      type: "audio",
      name: "Ableton",
      icon: "icons/software/ableton.png",
      info: "Excellent grasp of it's functions and capabilities",
      level: 10,
    },
    {
      type: "audio",
      name: "Audacity",
      icon: "icons/software/audacity.png",
      info: "Excellent grasp of it's functions and capabilities",
      level: 10,
    },
    {
      type: "audio",
      name: "Maschine",
      icon: "icons/software/maschine.png",
      info: "Excellent grasp of it's functions and capabilities",
      level: 10,
    },
    {
      type: "audio",
      name: "Cubase",
      icon: "icons/software/cubase.png",
      info: "Very good grasp of it's functions and capabilities",
      level: 7,
    },
  ];

  const codeIcons = [
    {
      type: "code",
      name: "HTML5",
      icon: "icons/software/html.png",
      info: "Excellent grasp of it's functions and capabilities.",
      level: 10,
    },
    {
      type: "code",
      name: "CSS3",
      icon: "icons/software/css.png",
      info: "Excellent grasp of it's functions and capabilities.",
      level: 10,
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

    // for (let item of containers) {
    //   item === containers[index]
    //     ? item.querySelector("#info-content").style.transform = "translateX(0)"
    //     : item.querySelector("#info-content").style.transform = "translateX(-110%)";
    // }

    for (let item of containers) {
      item === containers[index]
        ? item.classList.add("open")
        : item.classList.remove("open");
    }
  };

  const clickCopyHandler = (e) => {
    alert(e.target.textContent);
    navigator.clipboard.writeText(e.target.textContent);
  };

  return (
    <div className="about">
      <div className="about-container">
        <IoClose id="close-button" onClick={() => props.setShowAbout(false)} />
        <div id="about-header">
          <img id="profile-pic" src="https://imgur.com/fLFzM2Y.png" alt="" />

          <div>
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
                  href="https://www.linkedin.com/in/nebojsa-kovacevik/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="basic-info social-icons" />
                  <span className="tooltip">
                    Click to visit LinkedIn profile
                  </span>
                </a>
                {/* </IconContext.Provider> */}
              </span>
              {/* <span id="copy-message">You copied</span> */}
            </span>
          </div>
        </div>

        {/* ABOUT  */}
        <div className="info-container open" onClick={() => toggleContainer(0)}>
          {/* NAME AND CONTACT INFO  */}
          <h1 id="info-header">About</h1>
          {/* ABOUT THIS WEBSITE  */}
          <span id="info-content">
            <h2>This Website</h2>
            <p>
              This has been my project for the last few months. I made it in
              order to practice my web development skills (mainly React and
              CSS), but also for me to have all my work in one place, in the
              highest quality possible.
            </p>
            <p>
              Professionally I am a senior VFX artist, but this portfolio is
              mainly a showcase of my other hobbies and interests: 3D renders,
              animations, generative art, sound design, etc.
            </p>
            <p>Feel free to contact me, and I hope you enjoy!</p>
          </span>
        </div>

        {/* WORK EXPERIENCE  */}
        <div className="info-container" onClick={() => toggleContainer(1)}>
          <h1 id="info-header">Work Experience</h1>
          <span id="info-content">
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
              problems of high complexity, which require not only artistic
              skills, but logical problem-solving, automation and optimization.
            </p>
            <p>
              My portfolio now consists of over 40 feature length films and
              popular TV shows, some of which are: Thor: Ragnarok, Black
              Panther, Guardians of the Galaxy, Spider man: Homecoming, Star
              Wars: The Last Jedi & The Rise of Skywalker, Alien: Covenant,
              X-Men: Apocalypse, Mission Impossible: Fallout, Ghost in the
              Shell, The Mandalorian, Star Trek: Discovery, etc.
            </p>
          </span>
        </div>

        {/* LATEST PROJECTS  */}
        <div className="info-container" onClick={() => toggleContainer(2)}>
          <h1 id="info-header">Latest Projects</h1>
          <span id="info-content">
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
              production, and also created unique procedural animations for all
              of the songs.
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
          </span>
        </div>
        {/* SKILLS */}
        <div
          className="info-container"
          id="skills-container"
          onClick={() => toggleContainer(3)}
        >
          <h1 id="info-header">Skills</h1>
          <span id="info-content">
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
          </span>
        </div>
      </div>
      <div className="backdrop" onClick={() => props.setShowAbout(false)}></div>
    </div>
  );
};

export default About;
