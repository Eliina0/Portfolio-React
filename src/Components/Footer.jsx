import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; <span id="year"></span> Elina Tota. All Rights Reserved.</p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/elina-tota-2a232830a/" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://github.com/Eliina0" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-github'></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
