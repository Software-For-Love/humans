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

// Temporary file to use redirects for currently featured page
import temp_file from "../../data/currently-featured.yaml";

/**
 * Featured data should be stored here based on the month and year that it matches to.
 * 
 * Every month should have an array containing an object that represents a featured person
 * which has an associated name, last name, title, description and image.
 * 
 * If integrating yaml files, instead just change this object so that it stores a collection of
 * dates which map to an array of yaml files
 * 
 * "Date1": [
 *      yaml_file1,
 *      yaml_file2,
 *      yaml_file3
 * ], "Date2": [...
 * 
 * Yaml files may have different names for their element mappings, you can update the featured people 
 * cards below to reflect the mapped names
 */

const featuredData =
{
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
        },
        {
            name: "Name",
            lastName: "LastName",
            title: "Journalist",
            desc: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.",
            img: img3
        }
    ],
    "2021 July": [
        {
            name: "Name",
            lastName: "LastName",
            title: "Journalist",
            desc: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.",
            img: img4
        },
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
        },
        {
            name: "Name",
            lastName: "LastName",
            title: "Journalist",
            desc: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.",
            img: img3
        }
    ]
}

export default function FeaturePage() {

    // Keeps track of the featured people visible on screen
    const [startDateIndex, setStartDateIndex] = useState(0);
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
        const len = lengths[startDateIndex];
        const newStartPeopleIndex = startPeopleIndex + 1;

        if (newStartPeopleIndex >= len) {

            setStartDateIndex((startDateIndex + 1) % lengths.length);
            setStartPeopleIndex(0);

        } else {

            setStartPeopleIndex(newStartPeopleIndex);

        }
    }

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
                                elements.push(Object.keys(featuredData).map((date, dateIndex) => {
                                    const objectData = featuredData[date];
                                    // Map all elements in the array to the specified date
                                    if (renderSize.current <= 0 || (dateIndex < startDateIndex && !repeat)) return <></>;
                                    return (
                                        <div class="featured-date">
                                            <div id="date-container">
                                                <h2 id="m2">{date}</h2>
                                            </div>
                                            <div class="featured-people">
                                                {
                                                    objectData.map((person, personIndex) => {
                                                        if (renderSize.current <= 0 || 
                                                            (dateIndex === startDateIndex && !repeat && personIndex < startPeopleIndex)) return <></>;
                                                        // Each array element is represented individually
                                                        renderSize.current--;
                                                        return (

                                                            // Each featured person card should reference a yaml file, read the comments above near the featuredData
                                                            // object as to how each yaml file should be handled

                                                            // This 'file' props being passed through the Link should be updated when yaml files are integrated.
                                                            // The 'file' should reference the featured person's yaml file.

                                                            <div class="pic" key={personIndex}>
                                                                <Link to="/feature-page/currently-featured/" state={{ file : temp_file }}>
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