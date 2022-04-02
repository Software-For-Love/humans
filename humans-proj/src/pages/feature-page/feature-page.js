import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";
import rightArrows from '../../../static/images/right-arrows.png';
import Card from "../components/Card/Card"

// Temporary file to use redirects for currently featured page
import yamdata from "../../data/all-features-page/all-featured.yaml"

export default function FeaturePage(props) {

    const featuredData = props.location.state && props.location.state.file ? props.location.state.file : yamdata;

    // filters featured people
    const [searchTerm, setSearchTerm] = useState('')

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

    return (
        <div id="feature-page">
            <Header />

            <div class="feature-container">
                <div class="square" id="afbar"></div>

                <div class="feature-search">
                    <div class="dropdown">
                        <button id="months">Month ↓</button>
                        <div class="dropdown_content">
                            {Object.keys(featuredData).map(item => <p> {item} </p>)}
                        </div>
                    </div>
                    <input id="search_bar" type="text" placeholder="Search name, stories..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                </div>

                <div id="featured-contents-wrapper">
                    <div class="arrow-container">
                        <button type="button" id="arrow-right" onClick={handleCarousel}><img src={rightArrows} alt="arrows" /></button>
                    </div>

                    <div id="featured-list-wrapper">
                        <div id="featured-contents">
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
                                                <>
                                                    <div id="featured-month-list">
                                                        {/* <p id="featured-date2">{id}</p> */}

                                                        <div id="featured-month-people">
                                                            {
                                                                objectData.filter((val) => {
                                                                    if (searchTerm == "" || val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                                        return val
                                                                    }
                                                                }).map((person, personIndex) => {
                                                                    if (renderSize.current <= 0 ||
                                                                        (ActivistIndex === startActivistIndex && !repeat && personIndex < startPeopleIndex)) return <></>;
                                                                    // Each array element is represented individually
                                                                    renderSize.current--;
                                                                    return (
                                                                        <div style={{display:"block"}}>
                                                                            <p id="featured-date2">{person.date}</p>
                                                                            <div id="featured-person">
                                                                                <Card id="featured-card" person={person} />
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        }))
                                        repeat = true;
                                    }
                                    return elements;
                                })()
                            }
                        </div>
                    </div>

                    <div class="arrow-container">
                        <button type="button" id="arrow" onClick={handleCarousel}><img src={rightArrows} alt="arrows" /></button>
                    </div>
                </div>

                <div class="square" id="nominatebar">
                    <div class="nominatebartxt">
                        <p> Didn't see your favourite human rights activist or social groups?</p>
                        <p>Write us a recommendation!</p>
                        <button type="button" id="nominate_button" onClick={() => { window.location.replace('/nominate-page/nominate/') }}>Nominate</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}