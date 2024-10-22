import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import logo from "../Assets/logo.png";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="logoET"> //ET </h1>
      <ul id="menuList" className={menuOpen ? "open" : ""}>
        <li>
          <a href="#hero"> Home</a>
        </li>
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#skills"> Skills</a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
      <div className="mobile-navbar" id="mobile-navbar" onClick={toggleMenu}>
        {menuOpen ? <IoClose /> : <IoMenu />}
      </div>
    </header>
  );
};

export default Header;
