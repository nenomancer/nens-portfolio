import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdInfo } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import "../scss/Header.scss";

const Header = (props) => {
  const sidebar = document.querySelector(".sidebar");
  const listItemTexts = [...document.querySelectorAll(".list-item-text")];
  const listItemIcons = [...document.querySelectorAll(".list-item-icon")];

  const aboutContainer = document.querySelector(".about-container");
  const aboutCard = document.querySelector(".about-card");

  const [openAbout, closeAbout] = [
    ...document.querySelectorAll(".about-button"),
  ];


  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAbout = () => {
    aboutContainer.classList.toggle("open");
    openAbout.classList.toggle("active-button");
  };

  let isMenuOpen = false;
  const openMenu = () => {
    sidebar.classList.add("sidebar-open");
    listItemTexts.forEach((text) => {
      text.classList.add("text-fade-in");
    });
    isMenuOpen = true;
  };
  const closeMenu = () => {
    // CLOSE MENU
    sidebar.classList.remove("sidebar-open");
    listItemTexts.forEach((text) => {
      text.classList.remove("text-fade-in");
    });
    isMenuOpen = false;
  };

  const toggleMenu = () => {
    if (!isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };
  return (
    <header className="header">
      <div id="toggle-menu" className="header-button" onMouseUp={toggleMenu}>
        <GiHamburgerMenu className="icon" />
      </div>
      <span className="header-name">NENS</span>

      <div className="header-button" id="about-button" onClick={toggleAbout}>
        <MdInfo className="icon about-button" id="open-about" />
        <div className="toggle-bar"></div>
        {/* <IoClose className="icon about-button" id="close-about" /> */}
      </div>
    </header>
  );
};

export default Header;
