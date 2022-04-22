import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import Header from "../components/Header/Header";
import HomeFrame from "../components/HomeFrame/HomeFrame";
import arrows from '../../../static/images/mainpage2line.png';
import featuredBackground from '../../../static/images/home-background.png'
import aboutBackground from '../../../static/images/home2-background.png'
import nominateBackground from '../../../static/images/home3-background.png'
import oldEntriesBackground from '../../../static/images/home4-background.png'
import "./Home.css";

const pageInfo = [
    ["FEATURED", '#FF98B1', featuredBackground, '/feature-page/currently-featured/'],
    ["ABOUT", '#FFA16C', aboutBackground, '/about-page/AboutPage/'],
    ["NOMINATE", '#CBEFFF', nominateBackground, '/nominate-page/nominate/'],
    ["OLD ENTRIES", '#F6B6B6', oldEntriesBackground, '/feature-page/feature-page/']
]

/**
 * Lets the user know what page is being highlighted
 * @param {index, color} props 
 * @returns a diagram of representation of what page is being highlighted
 */
function Pagination(props) {
    // WHEN INDEX CHANGES
    useEffect(() => {
        // CHANGE COLOR OF SLIDER
        var root = document.querySelector(':root')
        root.style.setProperty('--color', props.color)
    }, [props.index])

    return (
        <div>
            <div class="pindicator">
                <div class="bullet">
                    <div class="text" style={{ visibility: (props.index === 0) ? 'visible' : 'hidden' }}>Featured</div>
                    <span class="icon" style={{ backgroundColor: (props.index === 0) ? 'white' : props.color }}></span>
                </div>
                <div class="bullet">
                    <div class="text" style={{ visibility: (props.index === 1) ? 'visible' : 'hidden' }}>About</div>
                    <span class="icon" style={{ backgroundColor: (props.index === 1) ? 'white' : props.color }}></span>
                </div>
                <div class="bullet">
                    <div class="text" style={{ visibility: (props.index === 2) ? 'visible' : 'hidden' }}>Nominate</div>
                    <span class="icon" style={{ backgroundColor: (props.index === 2) ? 'white' : props.color }}></span>
                </div>
                <div class="bullet">
                    <div class="text" style={{ visibility: (props.index === 3) ? 'visible' : 'hidden' }}>Old Entries</div>
                    <span class="icon" style={{ backgroundColor: (props.index === 3) ? 'white' : props.color }}></span>
                </div>
            </div>
        </div>
    )
}

export default function Home() {

    const [index, setIndex] = useState(0)
    const [time, setTimeState] = useState(moment())
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [scrollHeight, setScrollHeight] = useState(0);

    // CHANGE SECONDS
    useEffect(() => {
        setInterval(() =>
            setTimeState(moment()), 1000);
    }, []);

    // CHANGE INDEX WHICH CHANGES COLORS AND SET PAUSE/PLAY ANIMATION
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                if (seconds === 3) {
                    setIndex(prevIndex => (prevIndex === 3) ? 0 : prevIndex + 1)
                    setSeconds(0)

                    // Prevents redirects when changing screens
                    const documentElement = document.documentElement;
                    setScrollHeight(documentElement.scrollHeight);
                    if (documentElement.clientHeight + documentElement.scrollTop >= documentElement.scrollHeight) {
                        window.scrollTo(0, documentElement.scrollHeight - documentElement.clientHeight - 5);
                    }
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    function toggle() {
        setIsActive(!isActive);
    }

    // REDIRECT TO FEATURE PAGE IF SCROLLING DOWN PAST BOTTOM OF PAGE
    const scrollRedirect = useCallback(e => {
        const documentElement = e.target.documentElement;
        const bottom = Math.abs(documentElement.scrollHeight - documentElement.scrollTop - documentElement.clientHeight);
        const nextScrollHeight = documentElement.scrollHeight;

        if (bottom <= 1) {
            if (nextScrollHeight === scrollHeight)
                window.location.replace(pageInfo[index][3]);
            else
                window.scrollTo(0, nextScrollHeight - documentElement.clientHeight - 5)
        }
        setScrollHeight(nextScrollHeight);
    }, [scrollHeight, index])

    // Reacts to when the bottom of the page is reached and then redirects to the specified url in scrollRedirect
    useEffect(() => {
        document.addEventListener('scroll', scrollRedirect, true);

        return () => document.removeEventListener('scroll', scrollRedirect, true);
    }, [scrollRedirect])

    return (
            <div id="home-page">
                <div id="home-background" style={{ backgroundImage: `url(${pageInfo[index][2]})` }}></div>
                <Header color={pageInfo[index][1]} />

                <div id="home-frame">
                    <div id="main-content-wrapper">
                        {/* SUBPAGE HEADER, PLAY/PAUSE BUTTON, HOMEFRAME */}
                        <div id="main-content">

                            {/* SUBPAGE HEADER AND PLAY/PAUSE BUTTON */}
                            <div id="titles-and-buttons">
                                {/* SUBPAGE HEADER */}
                                <p id="subpage-header">{pageInfo[index][0]}</p>

                                {/* PLAY/PAUSE BUTTON */}
                                <div id="play-and-pause">
                                    <button type="button" id="play-and-pause-btn" onClick={toggle}>
                                        {!isActive ? "\u25B6" : ("\u2758" + "\u2758")}
                                    </button>
                                </div>
                            </div>
                            <br style={{ lineHeight: "1.5" }} />

                            {/* SUBPAGE DIALOGUE AND IMAGE */}
                            <HomeFrame color={pageInfo[index][1]} index={index} />
                        </div>
                    </div>

                    {/* FOOTER (TIME, LEARN MORE, SLIDER) */}
                    <div id="main-footer-wrapper">
                        <div id="main-page-footer">
                            <footer id="non-mobile-design-home">
                                {/* TIME */}
                                <div id="footer-time">
                                    <p>{new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2] + ": " + time.format('HH:mm:ss')}<br />{time.format('L')}</p>
                                </div>

                                {/* LEARN MORE */}
                                <div id="learn-more" >
                                    <a href="/feature-page/feature-page/"><button id="learn-more-btn">Learn More</button></a>
                                    <img src={arrows} id="arrows" alt="Down Directional Arrows" />
                                </div>

                                {/* SLIDER */}
                                <div id="slider" >
                                    <Pagination color={pageInfo[index][1]} index={index} />
                                </div>
                            </footer>

                            {/* MOBILE DESIGN */}
                            <div id="mobile-design-home">
                                {/* LEARN MORE */}
                                <div id="learn-more" >
                                    <a href="/feature-page/feature-page/"><button id="learn-more-btn">Learn More</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}