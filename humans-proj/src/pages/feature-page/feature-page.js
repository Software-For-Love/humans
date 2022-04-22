import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";
import rightArrows from '../../../static/images/right-arrows.png';
import Card from "../components/Card/Card"

// Temporary file to use redirects for currently featured page
import yaml_file from "../../data/all-features-page/all-featured.yaml"

export default function FeaturePage() {


export default function FeaturePage(props) {
    const featuredData = props.location.state && props.location.state.file ? props.location.state.file : yamdata;
    // Keeps track of the featured people visible on screen
    const [startActivistIndex, setStartActivistIndex] = useState(0);
    const [startPeopleIndex, setStartPeopleIndex] = useState(0);
    const [activistData, setActivistData] = useState({});

    // We can use a state variable to check whether something has been typed in the filter input
    const [filterText, setFilterText] = useState("");
    const [filteredContent, setFilteredContent] = useState([]);

    // These variables handle navigation between people
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

        const humans = yaml_file.Humans;
        const newActivistData = {};


        for (const human of humans) {
            if (newActivistData.hasOwnProperty(human.date)) {
                newActivistData[human.date].push(human);
            } else {
                newActivistData[human.date] = [human];
            }
        }

        setActivistData(newActivistData);

        let windowSize = window.innerWidth < 1025 ? 2 : 4;
        setSize(windowSize);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    function handleCarousel() {
        const currentActivistData = filterText === "" ? activistData : filteredContent;


        const dates = Object.keys(currentActivistData).sort((date1, date2) => {
            return new Date(date2) - new Date(date1);
        })


        // Increments the date and people indices to mimic a circular queue of content
        const date = dates[startDateIndex];
        const dateContent = currentActivistData[date];


        const newStartPeopleIndex = startPeopleIndex + 1;


        if (newStartPeopleIndex >= dateContent.length) {
            setStartDateIndex((startDateIndex + 1) % dates.length);
            setStartPeopleIndex(0);
        } else {
            setStartPeopleIndex(newStartPeopleIndex);
        }
    }

    function handleFilter(e) {
        // State changing function which will be used in the filtration process
        const newText = e.target.value;

        const newFilteredContent = {};
        let previousFilteredContent;

        // If the filter text increases in size, the filtered content list is contracted
        // Otherwise, it expands the filtered content list

        if (newText.length > filterText && filterText !== "")
            previousFilteredContent = filteredContent;
        else
            previousFilteredContent = activistData;


        for (const date in previousFilteredContent) {
            for (const human of previousFilteredContent[date]) {
                // Inputs activist data for every date available in the featured content
                if (matchesFilter(human.description, human.position, human.photo_alt, newText)) {
                    if (newFilteredContent.hasOwnProperty(human.date))
                        newFilteredContent[human.date].push(human);
                    else
                        newFilteredContent[human.date] = [human];
                }
            }
        }

        setStartDateIndex(0);
        setStartPeopleIndex(0);
        setFilterText(newText);
        setFilteredContent(newFilteredContent);
    }

    // Can change the parameters to match the appropriate filter
    function matchesFilter(description, position, photoAlt, text) {
        // Helper function when using the filtered content list
        // Should be edited with the appropriate filtration method
        return description.toLowerCase().includes(text.toLowerCase()) ||
            position.toLowerCase().includes(text.toLowerCase()) ||
            photoAlt.toLowerCase().includes(text.toLowerCase());
    }
// sort humans by month 
    return (
        <div id="feature-page">
            <Header />

            <div class="feature-container">
                <div class="square" id="afbar"></div>

                <div class="feature-search">
                    {/* <div class="dropdown">
                        <button id="months">Month ↓</button>
                        <div class="dropdown_content">
                            <p>January</p>
                        </div>
                    </div> */}
                    <input id="search_bar" type="text" placeholder="Search name, stories..." onChange={handleFilter}></input>
                </div>


                <div id="featured-list-and-arrow">
                    <div id="featured-contents-wrapper">
                        <div id="featured-list-wrapper">
                            <div id="featured-contents">
                                {
                                    (() => {
                                        renderSize.current = size;
                                        const elements = [];
                                        let repeat = false;

                                        if ((filterText.length > 0 && Object.keys(filteredContent).length === 0) || Object.keys(activistData).length === 0) return <></>;

                                        // Either get the yaml file data or the filtered content data depending on if a filter is present
                                        const currentActivistData = filterText.length > 0 ? filteredContent : activistData;

                                        // Sort the dates based on older dates being towards the end of the list
                                        const dates = Object.keys(currentActivistData).sort((date1, date2) => {
                                            return new Date(date2) - new Date(date1);
                                        })

                                        while (renderSize.current > 0) {
                                            elements.push(dates.map((date, dateIndex) => {
                                                const objectData = currentActivistData[date];
                                                // Map all elements in the array to the specified date

                                                // Ensures that the array starts from the specified start indices
                                                if (renderSize.current <= 0 || (dateIndex < startDateIndex && !repeat)) return <></>;

                                                // Ensures that the array does not go past the specified start indices on repeat
                                                // Additionally, ensures that the date does not display with no featured people
                                                if (repeat && (dateIndex > startDateIndex || dateIndex === startDateIndex && startPeopleIndex === 0)) {
                                                    renderSize.current = 0;
                                                    return <></>;

                                                }

                                                return (
                                                    <>
                                                        <div id="featured-month-list">
                                                            <p id="featured-date2">{date}</p>

                                                            <div id="featured-month-people">
                                                                {
                                                                    objectData.map((person, personIndex) => {
                                                                        if (renderSize.current <= 0 ||
                                                                            (dateIndex === startDateIndex && !repeat && personIndex < startPeopleIndex)) return <></>;

                                                                        // Ensures that the array does not go past the specified start indices on repeat
                                                                        if (repeat && dateIndex === startDateIndex && personIndex >= startPeopleIndex) {
                                                                            renderSize.current = 0;
                                                                            return <></>;
                                                                        }

                                                                        // Each array element is represented individually
                                                                        renderSize.current--;
                                                                        return (
                                                                            <div style={{ display: "block" }}>
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
