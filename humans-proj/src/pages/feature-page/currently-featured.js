import React from "react";
import Header from "../components/Header/Header";
import "./currently-featured.css";
import Footer from "../components/Footer/Footer";
import insta from '../../../static/images/insta_icon.png';
import facebook from '../../../static/images/facebook_icon.png';
import twitter from '../../../static/images/twitter_icon.png';
import internet from '../../../static/images/internet_icon.png';
import file_data from "../../data/currently-featured.yaml";
import _ from "lodash";

export default function CurrFeaturePage(props) {
    
    // If redirected from all featured page, use the file that was passed otherwise use the default file being imported
    const featured_data = props.location.state && props.location.state.file ? props.location.state.file : file_data;

    return (
        <div id="curr-feature-page">
            <Header />
            {
                props.location.state && props.location.state.file ?
                    <p><button id="Back_btn" onClick={() => { window.history.back() }}>BACK</button></p> :
                    <></>
            }

            <div id="short-description">

                <div id="featured-icon">
                    <div className="square" id="square1"></div>
                    <div className="square" id="square2"></div>
                    <img src={featured_data.photo} id="main_pic" className="photo-for-mainpage" alt={featured_data.photo_alt} />
                </div>

                <div id="featured-info">
                    <h1 id="main_text">{featured_data.first_name}{featured_data.last_name}</h1>
                    <p>
                        <button id="all_medias">
                            <a href={featured_data.socials.instagram}>
                                <img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Instagram" />&nbsp;
                            </a>
                            <a href={featured_data.socials.facebook}>
                                <img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Facebook" />
                            </a>
                            <a href={featured_data.socials.twitter}>
                                <img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Twitter" />
                            </a>
                            <a href={featured_data.socials.internet}>
                                <img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Internet" />
                            </a>
                        </button>
                    </p>
                    <p id="born">{featured_data.facts.birth}</p>
                    <p id="worth">{featured_data.facts.worth}</p>
                    <p id="partner">{featured_data.facts.partner}</p>
                    <p id="LG">{featured_data.position}</p>
                </div>
            </div>

            <div id="full-description">
                <p id="para1" className="para">{featured_data.description} </p>
                <p id="para2" className="para">{featured_data.description2}</p>
            </div>
            <Footer />
        </div>
    )
}