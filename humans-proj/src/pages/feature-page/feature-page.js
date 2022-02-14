import React from "react";
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";
import img1 from "../../../static/images/img1.png";
import img2 from "../../../static/images/img2.png";
import img3 from "../../../static/images/img3.png";
import img4 from "../../../static/images/img 4.png";
import rightArrows from '../../../static/images/right-arrows.png';
import insta from '../../../static/images/insta_icon.png';
import facebook from '../../../static/images/facebook_icon.png';
import twitter from '../../../static/images/twitter_icon.png';
import internet from '../../../static/images/internet_icon.png';

/**
 * Featured data should be stored here based on the month and year it matches to
 * 
 * Every month should have an array containing an object that represents a featured person
 * which has an associated name, last name, title, description and image
 * 
 * In the future, this data will likely be stored on the backend and should be accessed from there.
 * Data should still have a similar structure.
 */

const featuredData = {
    "2021 August": [
        {
            name: "Name",
            lastName: "LastName",
            title: "Journalist",
            desc: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.",
            img: img1
        },
        {
            name: "Name",
            lastName: "LastName",
            title: "Journalist",
            desc: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.",
            img: img2
        }
    ],
    "2021 July": [
        {
            name: "Name",
            lastName: "LastName",
            title: "Journalist",
            desc: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.",
            img: img3
        },
        {
            name: "Name",
            lastName: "LastName",
            title: "Journalist",
            desc: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.",
            img: img4
        }
    ]

}

export default function FeaturePage() {

    return (
        <div id="feature-page">
            <Header />
            <div class="feature-container">
                <div class="square" id="afbar"></div>
                <div class="feature-search">
                    <div class="dropdown">
                        <button id="months">Month ↓</button>
                        <div class="dropdown_content">
                            <p>January</p>
                            <p>Feburary</p>
                            <p>March</p>
                            <p>April</p>
                            <p>May</p>
                            <p>June</p>
                            <p>July</p>
                            <p>August</p>
                            <p>September</p>
                            <p>October</p>
                            <p>November</p>
                            <p>December</p>
                        </div>
                    </div>
                    <input id="search_bar" type="text" placeholder="Search name, stories..."></input>
                </div>

                <div class="featured-contents">
                    {
                        Object.keys(featuredData).map(date => {
                            const objectData = featuredData[date];
                            // Map n number of elements in the array to the specified date
                            return (
                                <div class="featured-date">
                                    <div id="date-container">
                                        <h2 id="m2">{date}</h2>
                                        <button type="button" id="arrow-small"><img src={rightArrows} alt="arrows" /></button>
                                    </div>
                                    <div class="featured-people">
                                        {
                                            objectData.map((person, index) => {
                                                // Each array element is represented individually

                                                return (
                                                    <div class="pic" key={index}>
                                                        <button class="person-btn"><img id="img" src={person.img} alt="person" /></button>
                                                        <div class="square" id="namerec"></div>
                                                        <div id="name">{person.name} {person.lastName}</div>
                                                        <div class="picdet">
                                                            <div class="square" id="details"></div>
                                                            <p id="pichead">{person.name + " " + person.lastName}</p>
                                                            <div class="picdes">
                                                                <p>{person.title}</p>
                                                                <br></br>
                                                                <p>{person.desc}</p>
                                                                <p><button id="featured_medias">
                                                                    <img src={insta} id="insta_pic" className="photo-for-mainpage" alt="insta" />&nbsp;
                                                                    <img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="facebook" />
                                                                    <img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="twitter" />
                                                                    <img src={internet} id="internet_pic" className="photo-for-mainpage" alt="internet" />
                                                                </button></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )


                        })
                    }

                    <div class="arrow-container">
                        <button type="button" id="arrow"><img src={rightArrows} alt="arrows" /></button>
                    </div>

                </div>
                <div class="square" id="nominatebar">
                    <div class="nominatebartxt">
                        <p> Didn't see your favourite human rights activist or social groups?</p>
                        <p>Write us a recommendation!</p>
                        <button type="button" id="nominate_button">Nominate</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}