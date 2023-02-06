import React from 'react'
import { Link } from "react-router-dom";

import './css/Navbar.css' 

function Navbar() {

        const body = document.body;
        let lastScroll = 0;
        console.log('lol'+body);

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            }

            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains("scroll-down")
            ) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }
            lastScroll = currentScroll;
        });


  return (
    <header>
        <div className="navbar-container">
            <a href="#home">
                <img className='logo' src="https://studentambassadors.microsoft.com/Assets/Badge/LevelAlpha160x143.png" alt="" />
            </a>
            <ul>
                <a href="#about"><li>About</li></a>
                <a href="#events"><li className='nav-events'>Events</li></a>
                <a href="#team"><li>Team</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
    </header>

    
  )
}

export default Navbar