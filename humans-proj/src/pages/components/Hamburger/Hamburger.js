import React, { useState } from "react";
import { Link } from "gatsby";
import "./Hamburger.css"

export default function Hamburger() {
    return (
        <nav role='navigation'>
            <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <Link id="menu-link" to="/home/Home/"><li>HOME</li></Link>
                    <Link id="menu-link" to="/feature-page/currently-featured/" style={{lineHeight: "4.6"}}><li>CURRENTLY FEATURED</li></Link>
                    <Link id="menu-link" to="/feature-page/feature-page/"><li>ALL FEATURED</li></Link>
                    <Link id="menu-link" to="/about-page/AboutPage/"><li>ABOUT</li></Link>
                    <Link id="menu-link" to="/nominate-page/nominate/"><li>NOMINATE</li></Link>
                    <Link id="menu-link" to="/contact-us/contact-us/" target="_blank"><li>CONTACT US</li></Link>
                </ul>
            </div>
        </nav>
    )
}