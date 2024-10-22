import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/aboutMe"}>About</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link to={"/contactMe"}>Contact</Link>
        </li>
      </ul>
      <div className="mobile-navbar" id="mobile-navbar" onClick={toggleMenu}>
        {menuOpen ? <IoClose /> : <IoMenu />}
      </div>
    </header>
  );
};

export default Header;
