import React from "react";
import "./About.css";
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

  const skillsIcons = [
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
      info: "Additional info perhaps",
      level: 9,
    },
    {
      type: "visual",
      name: "Premiere Pro",
      icon: "icons/software/premiere.png",
      info: "Additional info perhaps",
      level: 8,
    },
    {
      type: "visual",
      name: "DaVinci",
      icon: "icons/software/davinci.png",
      info: "Additional info perhaps",
      level: 10,
    },
    {
      type: "visual",
      name: "Blender",
      icon: "icons/software/blender.png",
      info: "Additional info perhaps",
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

          <AboutSkills title="Contact" icons={socialIcons} />

          <AboutSkills title="Skills" icons={skillsIcons} />
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
            <h2 className="about__h2">About Me</h2>
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
