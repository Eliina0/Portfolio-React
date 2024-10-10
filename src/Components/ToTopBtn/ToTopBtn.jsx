import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import "./ToTopBtn.css";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  //console.log(isVisible);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const topFunction = () => {
    window.scroll(0, 0);
  };
  window.addEventListener("scroll", toggleVisibility);

  return (
    isVisible && (
      <button id="go-to-top" onClick={topFunction}>
        <FaArrowUpLong />
      </button>
    )
  );
};

export default ToTopBtn;
