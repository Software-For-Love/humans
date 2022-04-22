import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";
import rightArrows from '../../../static/images/right-arrows.png';
import Card from "../components/Card/Card"
import { useRef } from "react";

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
            uniqueID: 1,
            name: "Donald",
            lastName: "Duck",
            title: "Cranky Mage",
            previewDescription: "I am the magic behind the King.",
            img: "img1.png",
            links: [
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com",
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com"
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "donald duck cranky mage I am the magic behind the King 2021 August"
        },
        {
            uniqueID: 2,
            name: "G.G. \"Goofy\" Tooper Looper",
            lastName: "Goof",
            title: "Loyal Knight",
            previewDescription: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessings of peace.",
            img: "img2.png",
            links: [
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com"
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "G.G. Goofy Goof loyal knight I am the king's shield 2021 august"
        }
    ],
    "2021 July": [
        {
            uniqueID: 3,
            name: "Peter",
            lastName: "Pete Sr.",
            title: "Strong Rival",
            previewDescription: "The King shall not obstruct me.",
            img: "img3.png",
            links: [
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "Peter Pete Sr. Strong rival the king shall not obstruct me 2021 july"
        },
        {
            uniqueID: 4,
            name: "Mickey",
            lastName: "Mouse",
            title: "The King",
            previewDescription: "I travel the universes, looking for my friends.",
            img: "img 4.png",
            links: [
                "https://www.facebook.com",
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "mickey mouse the king I travel the universes looking for my friends 2021 july"
        }
    ],
    "2021 June": [
        {
            uniqueID: 5,
            name: "Minnie",
            lastName: "Mouse",
            title: "The Queen",
            previewDescription: "I rule the kingdom. I ensure the is safe.",
            img: "img1.png",
            links: [
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "minnie mouse the queen I rule the kingdom. I ensure the is safe 2021 june"
        },
        {
            uniqueID: 6,
            name: "Pluto",
            lastName: "The Dog",
            title: "Holder of Secrets",
            previewDescription: "I am the trustee of the King. There is no one the King trusts more.",
            img: "img2.png",
            links: [
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com"
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "pluto the dog holder of secrets I am the trustee of the King there is no the king trusts more 2021 june"
        }
    ]
}

export default function FeaturePage() {

    // filters featured people
    const [searchTerm, setSearchTerm] = useState('')
    
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
                            { Object.keys(featuredData).map(item => <p> {item} </p>)}
                        </div>
                    </div>
                    <input id="search_bar" type="text" placeholder="Search name, stories..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                </div>

                <div id="featured-contents-wrapper">
                    <div class="arrow-container">
                        <button type="button" class="arrow" id="arrow-right"><img src={rightArrows} alt="arrows" /></button>
                    </div>

                    <div id="featured-list-wrapper">
                        <div id="featured-contents2">
                            {
                                Object.keys(featuredData).map(date => {
                                    const objectData = featuredData[date];
                                    // Map n number of elements in the array to the specified date
                                    return (
                                        <>
                                            <div id="featured-month-list">
                                                <p id="featured-date2">{date}</p>
                                                <div id="featured-month-people">
                                                    {
                                                        objectData.filter((val) => {
                                                            if (searchTerm == "" || val.tags.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                                return val
                                                            }
                                                        }).map((person) => {
                                                            return (
                                                                <div id="featured-person2">
                                                                    <Card id="featured-card2" person={person} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div class="arrow-container">
                        <button type="button" class="arrow" id="arrow-left" onClick={handleCarousel}><img src={rightArrows} alt="arrows" /></button>
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

/**
 * 
 * import React, { useState, useEffect, useRef } from "react";
import { Link } from 'gatsby';
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";
import rightArrows from '../../../static/images/right-arrows.png';
import Card from "../components/Card/Card"
import { useRef } from "react";

// Temporary file to use redirects for currently featured page
import temp_file from "../../data/currently-featured.yaml";

/**
 * Featured data should be stored here based on the month and year that it matches to.
 * 
 * Every month should have an array containing an object that represents a featured person
 * which has an associated name, last name, title, description and image.
 * 
 * When integrating the yaml file, you can replace the object below with a yaml file like this
 * 
 * "yaml_date1": [
 *      yaml_section1,
 *      yaml_section2,
 *      yaml_section3
 * ], "yaml_date2": [...
 * 
 * The yaml file should ideally follow a similar structure where each person is mapped to a specific date
 * 
 * Yaml files may have different names for their element mappings, you can update the featured people 
 * cards below to reflect the mapped names
 

const featuredData =
{
    "2021 August": [
        {
            uniqueID: 1,
            name: "Donald",
            lastName: "Duck",
            title: "Cranky Mage",
            previewDescription: "I am the magic behind the King.",
            img: "img1.png",
            links: [
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com",
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com"
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "donald duck cranky mage I am the magic behind the King 2021 August"
        },
        {
            uniqueID: 2,
            name: "G.G. \"Goofy\" Tooper Looper",
            lastName: "Goof",
            title: "Loyal Knight",
            previewDescription: "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessings of peace.",
            img: "img2.png",
            links: [
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com"
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "G.G. Goofy Goof loyal knight I am the king's shield 2021 august"
        }
    ],
    "2021 July": [
        {
            uniqueID: 3,
            name: "Peter",
            lastName: "Pete Sr.",
            title: "Strong Rival",
            previewDescription: "The King shall not obstruct me.",
            img: "img3.png",
            links: [
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "Peter Pete Sr. Strong rival the king shall not obstruct me 2021 july"
        },
        {
            uniqueID: 4,
            name: "Mickey",
            lastName: "Mouse",
            title: "The King",
            previewDescription: "I travel the universes, looking for my friends.",
            img: "img 4.png",
            links: [
                "https://www.facebook.com",
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "mickey mouse the king I travel the universes looking for my friends 2021 july"
        }
    ],
    "2021 June": [
        {
            uniqueID: 5,
            name: "Minnie",
            lastName: "Mouse",
            title: "The Queen",
            previewDescription: "I rule the kingdom. I ensure the is safe.",
            img: "img1.png",
            links: [
                "https://www.facebook.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "minnie mouse the queen I rule the kingdom. I ensure the is safe 2021 june"
        },
        {
            uniqueID: 6,
            name: "Pluto",
            lastName: "The Dog",
            title: "Holder of Secrets",
            previewDescription: "I am the trustee of the King. There is no one the King trusts more.",
            img: "img2.png",
            links: [
                "https://www.instagram.com",
                "https://www.tiktok.com",
                "https://www.linkedin.com",
                "https://www.discord.com"
            ],
            mainDescription: "This is the really long description that is too be feautured on the currently featured page.",
            tags: "pluto the dog holder of secrets I am the trustee of the King there is no the king trusts more 2021 june"
        }
    ]
}

export default function FeaturePage() {

    // filters featured people
    const [searchTerm, setSearchTerm] = useState('')

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
                            { Object.keys(featuredData).map(item => <p> {item} </p>)}
                        </div>
                    </div>
                    <input id="search_bar" type="text" placeholder="Search name, stories..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                </div>

<<<<<< Updated upstream
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

                                                                {
                                                                    // The file that is being sent in the currently featured page should represent a similar structure
                                                                    // to one of the person sections in the yaml file, under a date
                                                                }

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
=======
                <div id="featured-contents-wrapper">
                    <div class="arrow-container">
                        <button type="button" class="arrow" id="arrow-right"><img src={rightArrows} alt="arrows" /></button>
                    </div>

                    <div id="featured-list-wrapper">
                        <div id="featured-contents2">
                            {
                                Object.keys(featuredData).map(date => {
                                    const objectData = featuredData[date];
                                    // Map n number of elements in the array to the specified date
                                    return (
                                        <>
                                            <div id="featured-month-list">
                                                <p id="featured-date2">{date}</p>
                                                <div id="featured-month-people">
                                                    {
                                                        objectData.filter((val) => {
                                                            if (searchTerm == "" || val.tags.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                                return val
                                                            }
                                                        }).map((person) => {
                                                            return (
                                                                <div id="featured-person2">
                                                                    <Card id="featured-card2" person={person} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
>>>>>>> Stashed changes
                    </div>

                    <div class="arrow-container">
                        <button type="button" class="arrow" id="arrow-left" onClick={handleCarousel}><img src={rightArrows} alt="arrows" /></button>
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
 */