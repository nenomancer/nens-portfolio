import React from "react";
import "./About.css";
import AboutIcon from "./AboutIcon";

import { IconContext } from "react-icons";

import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const About = (props) => {
  const socialIcons = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/nebojsa.kovacevik/",
      icon: "icons/social/facebook-brands.svg",
      info: "My Facebook profile",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/loopmaster.n/",
      icon: "icons/social/instagram.svg",
      info: "My Instagram profile",
    },
    {
      name: "Github",
      link: "https://github.com/nenomancer",
      icon: "icons/social/github.svg",
      info: "My Github profile",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/nebojsa-kovacevik-5a923515a/",
      icon: "icons/social/linkedin.svg",
      info: "My LinkedIn profile",
    },
  ];

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
      info: "Premier Pro: Very good knowledge of most of it's capabilities",
      level: 8,
    },
    {
      type: "visual",
      name: "DaVinci",
      icon: "icons/software/davinci.png",
      info: "Davinci Resolve: Expert level knowledge of all it's capabilities",
      level: 10,
    },
    {
      type: "visual",
      name: "Blender",
      icon: "icons/software/blender.png",
      info: "Blender: Expert level knowledge of all it's capabilities",
      level: 10,
    },
    {
      type: "visual",
      name: "Nuke",
      icon: "icons/software/nuke.png",
      info: "NUKE: Expert level knowledge of all it's capabilities",
      level: 10,
    },
  ];

  const audioIcons = [
    {
      type: "audio",
      name: "ableton",
      icon: "icons/software/ableton.png",
      info: "Ableton: Expert level knowledge of all it's capabilities",
      level: 10,
    },
    {
      type: "audio",
      name: "audacity",
      icon: "icons/software/audacity.png",
      info: "NUKE: Expert level knowledge of all it's capabilities",
      level: 10,
    },
    {
      type: "audio",
      name: "maschine",
      icon: "icons/software/maschine.png",
      info: "NUKE: Expert level knowledge of all it's capabilities",
      level: 10,
    },
    {
      type: "audio",
      name: "cubase",
      icon: "icons/software/cubase.png",
      info: "NUKE: Expert level knowledge of all it's capabilities",
      level: 10,
    },
  ];

  const toggleContainer = (index) => {
    const containers = document.getElementsByClassName("info-container");

    for (let item of containers) {
      item === containers[index]
        ? item.classList.toggle("open")
        : item.classList.remove("open");
      containers[index].classList.toggle("open");
    }
  };

  return (
    <div className="about">
      <div className="container">
        <div className="right">
          <div id="main-container" className="info-container">
            {/* NAME AND CONTACT INFO  */}
            <img
              id="profile-pic"
              src="https://i.imgur.com/fLFzM2Y.png"
              alt=""
            />

            <span>
              <h1 id="name">NEBOJSA KOVACEVIK</h1>
              <div id="basic-info">
                <p>
                  nebojsa.kovacevik@gmail.com | +389 71 909 352 | Skopje,
                  Macedonia
                </p>
                {socialIcons.map((icon, index) => (
                  <AboutIcon icon={icon} key={index} />
                ))}
              </div>
              {/* ABOUT THIS WEBSITE  */}
              <p>
                This website has been my project for the last few months. I made
                it in order to sharpen my web development skills (mainly React
                and CSS), but also for me to have all my work in one place, in
                the highest quality possible.
              </p>
              <p>
                Professionally I am a senior VFX artist, but this is mainly a
                showcase of my hobbies and interests: 3D renders, animations,
                generative art, sound design, etc.
              </p>
              <p>Feel free to contact me, and I hope you enjoy!</p>
            </span>
          </div>
          <div
            className="info-container open"
            onClick={() => toggleContainer(1)}
          >
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
          </div>

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
              A half length album, project on which all seven songs were
              produced by me. I also created unique procedural animations for
              all of the songs, making elements of the animations react to
              certain frequencies.
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
              On this project I was given a concept art for the overall look, so
              I can create an animation which will loop throughout the song.
              Firstly, I hand animated the two characters using Blender's Grease
              Pencil, making sure to give them a different walking style. I then
              created and animated the scene using Blender's 3D capabilities,
              making some of the elements react to certain frequencies of the
              song.
            </p>
          </div>

          <div
            className="info-container"
            id="skills-container"
            onClick={() => toggleContainer(3)}
          >
            <h1>Skills</h1>
            <div className="skills-container">
              <h2>Visual</h2>
              {visualIcons.map((icon, index) => (
                <AboutIcon icon={icon} key={index} />
              ))}
            </div>
            <div className="skills-container">
              <h2>Audio</h2>
              {audioIcons.map((icon, index) => (
                <AboutIcon icon={icon} key={index} />
              ))}
            </div>
            <div className="skills-container"></div>
          </div>
        </div>
      </div>
      <div className="backdrop" onClick={() => props.setShowAbout(false)}></div>
    </div>
  );
};

export default About;
