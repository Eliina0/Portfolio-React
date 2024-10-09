import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <p>&copy; {currentYear} Elina Tota. All Rights Reserved.</p>
            <div className="socials">
                <div className="socials">
                <a href="https://www.linkedin.com/in/elina-tota-2a232830a/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Eliina0" target="_blank">
                    <FaGithub />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
