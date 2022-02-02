import React, { useState } from "react";
import { Link } from "gatsby";
import Hamburger from "../Hamburger/Hamburger";
import handPhoto from '../../../../static/images/SFL-humans-logo.png';
import './Header.css'

export default function Header(props) {
    const activeLink = {
        borderBottom: "2px solid",
        borderColor: props.color,
        paddingBottom: "1vh"
    }

    const [hamheaderOpen, setHamheaderOpen] = useState(false)

    const toggleHamheader = () => {
        setHamheaderOpen(!hamheaderOpen)
    }

    return (
        <div id="header-wrapper">
            <navbar id="header">
                <div id="logo-and-title">
                    <img
                        id="hand-image"
                        src={handPhoto}
                        alt="hand-holding-SFL"
                    />
                    <Link to="/home/Home/" id="title"><h1>HUMANS</h1></Link>
                </div>

                <div id="nav-menu">
                    <div id="link-wrapper">
                        <Link to="/home/Home/" id="header-link" activeStyle={activeLink}>HOME</Link>
                    </div>

                    <div id="link-wrapper">
                        <div id="dropdown">
                            <Link id="header-link" activeStyle={activeLink}>FEATURED<span style={{ fontSize: "15px", marginLeft: "5px" }}>{"\u25bc"}</span></Link>
                            <div id="dropdown-content">
                                <hr /> <Link to="/feature-page/currently-featured/" id="dropdown-link">CURRENTLY FEATURED</Link>
                                <hr /> <Link to="/feature-page/feature-page/" id="dropdown-link" style={{paddingBottom:"15px"}}>ALL FEATURED</Link>
                            </div>
                        </div>
                    </div>

                    <div id="link-wrapper">
                        <Link to="/about-page/AboutPage/" id="header-link" activeStyle={activeLink}>ABOUT</Link>
                    </div>

                    <div id="link-wrapper">
                        <Link to="/nominate-page/nominate/" id="header-link" activeStyle={activeLink}>NOMINATE</Link>
                    </div>

                    <div id="link-wrapper">
                        <Link to="/contact-us/contact-us/" id="header-link" activeStyle={activeLink}>CONTACT US</Link>
                    </div>
                </div>

                <div className="hamheader" onClick={ toggleHamheader }>
                    <Hamburger />
                </div>
            </navbar>
        </div>
    )
}