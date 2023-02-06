import React from 'react'
import "./css/Footer.css"

export default function Footer() {
  return (
    <section id='contact' className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <h3>MLSA Faisalabad</h3>
                <p>Lorem ipsum dolor, sit amet<br />consectetur adipisicing elit.</p>
                <p>+92 345 6789023</p>
            </div>
            <div className="footer-centre">
                <h3>Useful Links</h3>
                <ul>
                    <li><i class="fa-solid fa-chevron-right"></i><a href="#about">About</a></li>
                    <li><i class="fa-solid fa-chevron-right"></i><a href="#events">Events</a></li>
                    <li><i class="fa-solid fa-chevron-right"></i><a href="#team">Team</a></li>
                    <li><i class="fa-solid fa-chevron-right"></i><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-right">
                <h3>Our Socials</h3>
                <ul>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-solid fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>&copy; All Rights Reserved. <span>@MLSA Faisalabad</span></p>
        </div>
    </section>
  )
}
