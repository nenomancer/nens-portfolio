import React from "react";
import "./About.css";
import AboutIcon from "./AboutIcon";
import AboutSkills from "./AboutSkills";

const About = (props) => {
  const socialIcons = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/nebojsa.kovacevik/",
      icon: "icons/social/facebook.png",
      info: "My Facebook profile",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/loopmaster.n/",
      icon: "icons/social/instagram.png",
      info: "My Instagram profile",
    },
    {
      name: "Github",
      link: "https://github.com/nenomancer",
      icon: "icons/social/github.png",
      info: "My Github profile",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/nebojsa-kovacevik-5a923515a/",
      icon: "icons/social/linkedin.png",
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
      name: "maschine",
      icon: "icons/software/maschine.png",
      info: "NUKE: Expert level knowledge of all it's capabilities",
      level: 10,
    },
  ];

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__left">
          <div className="about__picture">
            <img src="gallery/profile-pic.jpg" alt="" />
          </div>
          <h2>Contact</h2>
          {socialIcons.map((icon) => (
            <AboutIcon icon={icon}/>
          ))}
          {/* <AboutSkills title="Contact" icons={socialIcons} /> */}

          <h2>Skills</h2>
          <h3>Visual</h3>
          {visualIcons.map((icon) => (
            <AboutIcon icon={icon}/>
          ))}
          {/* <AboutSkills title="Skills" icons={visualIcons} /> */}

          <h3>Audio</h3>
          {/* <AboutSkills title="Skills" icons={audioIcons} /> */}

          <h3>Code</h3>
          {/* <AboutSkills title="Skills" icons={visualIcons} /> */}
          {/* <div className="about__skills">
            <h2>Skills:</h2>
            <img
              className="about__skills-icons"
              src="icons/software/photoshop.png"
              alt="Photoshop"
            />
            <img
              className="about__skills-icons"
              src="icons/software/photoshop.png"
              alt="Photoshop"
            />
            <h4>Visual</h4>
            <h4>Audio</h4>
            <h4>Code</h4>
          </div> */}
        </div>
        <div className="about__right">
          <div className="about__info">
            {/* <h1 className="about__h2">About Me</h1> */}
            <h1>Nebojsa Kovacevik</h1>
            <p>
              This website has been my project for the last few months. I made
              it in order to sharpen my web development skills (mainly React and
              CSS), but also for me to have all my work in one place, in the
              highest quality possible.
            </p>
            <p>
              Professionally I am a senior VFX artist, but this is mainly a
              showcase of my hobbies and interests: 3D renders, animations,
              generative art, sound design, etc.
            </p>
            <p>Feel free to contact me, and I hope you enjoy!</p>
          </div>
        </div>
      </div>
      <div
        className="about__backdrop"
        onClick={() => props.setShowAbout(false)}
      ></div>
    </div>
  );
};

export default About;
