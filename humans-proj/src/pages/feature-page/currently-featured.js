import React from "react";
import Header from "../components/Header/Header";
import "./currently-featured.css";
import Footer from "../components/Footer/Footer";
import photo from '../../../static/images/cf_picture.png';
import insta from '../../../static/images/insta_icon.png';
import facebook from '../../../static/images/facebook_icon.png';
import twitter from '../../../static/images/twitter_icon.png';
import internet from '../../../static/images/internet_icon.png';


export default function CurrFeaturePage() {
    return (
        <div id="curr-feature-page">
            <Header />
            <p><button id="Back_btn">BACK</button></p>

            <div id="short-description">

                <div id="featured-icon">
                    <div className="square" id="square1"></div>
                    <div className="square" id="square2"></div>
                    <img src={photo} id="main_pic" className="photo-for-mainpage" alt="Person" />
                </div>

                <div id="featured-info">
                    <h1 id="main_text">Name Here</h1>
                    <p>
                        <button id="all_medias">
                            <img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Instagram" />&nbsp;
                            <img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Facebook" />
                            <img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Twitter" />
                            <img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Internet" />
                        </button>
                    </p>
                    <p id="born">Key Fact 1 Here: Dolor sit amet</p>
                    <p id="worth">Key Fact 2 Here: Adipiscing elit</p>
                    <p id="partner">Key Fact 3 Here: Eiusmod tempor incididunt ut labore et</p>
                    <p id="LG">Type of Activist Here</p>
                </div>
            </div>

            <div id="full-description">
                    <p id="para1" className="para">Full Description Here ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="para2" className="para">Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at.</p>
                </div>
            <Footer />
        </div>
    )
}