import React, { useState, useEffect, useRef } from "react";
import { Link } from 'gatsby';
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
import yamdata from "../../data/all-features-page/all-features.yaml"


export default function FeaturePage(props) {
    const featuredData = props.location.state && props.location.state.file ? props.location.state.file : yamdata;
    // Keeps track of the featured people visible on screen
    const [startActivistIndex, setStartActivistIndex] = useState(0);
    const [startPeopleIndex, setStartPeopleIndex] = useState(0);

    // These variables handle navigation between people
    const [lengths, setLengths] = useState([]);
    const [size, setSize] = useState(4);
    const renderSize = useRef(0);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1025) {
                setSize(2);
            } else if (window.innerWidth >= 1025) {
                setSize(4);
            }
        }

        let windowSize = window.innerWidth < 1025 ? 2 : 4;
        setSize(windowSize);

        const currentLengths = [];
       
        for (const featuredPeople in featuredData) {
            const len = featuredData[featuredPeople].length;
            currentLengths.push(len);
        }

        setLengths(currentLengths);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    function handleCarousel() {

        // Increments the beginning index
        const len = lengths[startActivistIndex];
        const newStartPeopleIndex = startPeopleIndex + 1;

        if (newStartPeopleIndex >= len) {

            setStartActivistIndex((startActivistIndex + 1) % lengths.length);
            setStartPeopleIndex(0);

        } else {

            setStartPeopleIndex(newStartPeopleIndex);

        }
    }
// sort humans by month 
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
                        (() => {
                            renderSize.current = size;
                            const elements = [];
                            let repeat = false;

                            while (renderSize.current > 0) {
                                elements.push(Object.keys(featuredData).map((id, ActivistIndex) => {
                                    const objectData = featuredData[id];
                                    // Map all elements in the array to the specified date
                                    if (renderSize.current <= 0 || (ActivistIndex < startActivistIndex && !repeat)) return <></>;
                                    return (
                                        <div class="featured-date">
                                            <div id="date-container">
                                                <h2 id="m2">{id}</h2>
                                            </div>
                                            <div class="featured-people">
                                                {
                                                    objectData.map((person, personIndex) => {
                                                        if (renderSize.current <= 0 || 
                                                            (ActivistIndex === startActivistIndex && !repeat && personIndex < startPeopleIndex)) return <></>;
                                                        // Each array element is represented individually
                                                        renderSize.current--;
                                                        return (
                                                            // This 'file' props being passed through the Link should be updated when yaml files are integrated.
                                                            // The 'file' should reference the featured person's yaml file.
                                                            <div class="pic" key={personIndex}>
                                                                <Link to="/feature-page/feature-page/" state={{ file : yamdata}}>
                                                                <button class="person-btn"><img id="img" src={person.photo} alt={person.photo_alt} /></button>
                                                                <div class="square" id="namerec"></div>
                                                                <div id="name">{person.first_name} {person.last_name}</div>
                                                                <div class="picdet">
                                                                    <div class="square" id="details"></div>
                                                                    <p id="pichead">{person.first_name + " " + person.last_name}</p>
                                                                    <div class="picdes">
                                                                        <p>{person.position}</p>
                                                                        <br></br>
                                                                        <p>{person.description}</p>
                                                                        <p>{person.description2.support}</p>
                                                                        <p>{person.description2.organization}</p>
                                                                        <p><button id="featured_medias">
                                                                            <img src={person.socials.instagram} id="insta_pic" className="photo-for-mainpage" alt="insta" />&nbsp;
                                                                            <img src={person.socials.facebook} id="facebook_pic" className="photo-for-mainpage" alt="facebook" />
                                                                            <img src={person.socials.twitter} id="twitter_pic" className="photo-for-mainpage" alt="twitter" />
                                                                            <img src={person.socials.internet} id="internet_pic" className="photo-for-mainpage" alt="internet" />
                                                                        </button></p>
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                }))
                                repeat = true;
                            }
                            return elements;
                        })()
                    }

                    <div class="arrow-container">
                        <button type="button" id="arrow" onClick={handleCarousel}><img src={rightArrows} alt="arrows" /></button>
                    </div>

                </div>
                <div class="square" id="nominatebar">
                    <div class="nominatebartxt">
                        <p> Didn't see your favourite human rights activist or social groups?</p>
                        <p>Write us a recommendation!</p>
                        <button type="button" id="nominate_button" onClick={() => {window.location.replace('/nominate-page/nominate/')}}>Nominate</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}