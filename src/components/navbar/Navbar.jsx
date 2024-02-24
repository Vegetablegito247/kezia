import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import './navbar.css';

function Navbar() {
    // Opening side menu
    const [openBar, setOpenBar] = useState(false);
    const handleMenu = () => {
        setOpenBar(!openBar);
    }

    // Handling function to scroll to each section
    const scrollToSection = (idTag) => {
        const element = document.getElementById(idTag);
        element.scrollIntoView({ behavior: 'smooth' });
        if(openBar) {
            setOpenBar(!openBar);
        };
    };

    return (
        <nav>
            <div className="nav_cont">
                <div className="nav_logo">
                    <h3>Kezia.MC</h3>
                </div>
                <div className={openBar ? "nav_list active" : "nav_list"}>
                    <div className="close_nav" onClick={handleMenu}>
                        <IoCloseSharp />
                    </div>
                    <ul className="nav_links">
                        <li>
                            <NavLink onClick={() => scrollToSection('about')}>
                                <span>About Me</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('service')}>
                                <span>Services</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('engagement')}>
                                <span>Collaborations</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('gallery')}>
                                <span>Gallery</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('specialty')}>
                                <span>Specialty</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('testimonial')}>
                                <span>Testimonials</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('contact')}>
                                <span>Contact me</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav_burger" onClick={handleMenu}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar