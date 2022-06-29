import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdInfo } from "react-icons/md";

import "../scss/Header.scss"

const Header = (props) => {
  const sidebar = document.querySelector(".sidebar");
  const listItemTexts = [...document.querySelectorAll(".list-item-text")];
  const listItemIcons = [...document.querySelectorAll(".list-item-icon")];

  const aboutContainer = document.querySelector(".about-container");
  const aboutCard = document.querySelector(".about-card");
  const aboutButton = document.querySelector("#about-button");

  const toggleAbout = (state) => {
    if (state === "toggle") {
      aboutContainer.classList.toggle("open");
      // document.querySelector(".gallery").classList.toggle("open");
      aboutButton.classList.toggle("about-btn-toggle");
    } else if (state === "close") {
      aboutContainer.classList.remove("open");
      // document.querySelector(".gallery").classList.remove("open");
      aboutButton.classList.remove("about-btn-toggle");
    }
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
      <div className="header-button" onMouseUp={toggleMenu}>
        <GiHamburgerMenu className="icon" />
      </div>
      <span className="header-name">NENS</span>

      <div
        className="header-button"
        id="about-button"
        onClick={() => toggleAbout("toggle")}
      >
        <MdInfo className="icon sidebar-icon" />
      </div>
    </header>
  );
};

export default Header;
