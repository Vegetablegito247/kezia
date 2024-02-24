import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="nav_cont">
                <div className="nav_logo">
                    <h3>Kezia.MC</h3>
                </div>
                <div className="nav_list">
                    <div className="close_nav">
                        <IoCloseSharp />
                    </div>
                    <ul className="nav_links">
                        <li>
                            <NavLink>
                                <span>Services</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span>Gallery</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span>About us</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span>Testimonials</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span>Book an appointment</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span>Contact me</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav_burger">
                    <GiHamburgerMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar