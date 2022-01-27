import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import Header from "../components/Header/Header";
import HomeFrame from "../components/HomeFrame/HomeFrame";
import arrows from '../../../static/images/mainpage2line.png';
import featuredBackground from '../../../static/images/home-background.png'
import aboutBackground from '../../../static/images/home2-background.png'
import teamBackground from '../../../static/images/home3-background.png'
import oldEntriesBackground from '../../../static/images/home4-background.png'
import "./Home.css";

const pageInfo = [
    ["FEATURED", '#FF98B1', featuredBackground],
    ["ABOUT", '#FFA16C', aboutBackground],
    ["TEAM", '#CBEFFF', teamBackground],
    ["OLD ENTRIES", '#F6B6B6', oldEntriesBackground],
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
                    <div class="text" style={{ visibility: (props.index === 2) ? 'visible' : 'hidden' }}>Team</div>
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

    const homePage = useRef(null);

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
    const scrollRedirect = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

        // Check if scrollTop still exists, otherwise scrolling is not available
        // Should then be handled by wheelRedirect instead.
        if (bottom && e.target.scrollTop != 0) { 
            window.location.replace('/feature-page/feature-page/');
        }
    }

    // Redirect feature in case the page is max height.
    const wheelRedirect = (e) => {
        const current = homePage.current;
        if (e.deltaY === 100 && current.scrollHeight == current.clientHeight) {
            window.location.replace('/feature-page/feature-page/');
        }
    }

    return (

        <div id="home-page" ref={homePage} onWheel={wheelRedirect} onScroll={scrollRedirect} style={{ backgroundImage: `url(${pageInfo[index][2]})`, overflowY: 'scroll' }}>
            <Header color={pageInfo[index][1]} />


            <div id="home-frame">
                {/* SUBPAGE HEADER, PLAY/PAUSE BUTTON, HOMEFRAME */}
                <div id="main-content">

                    {/* SUBPAGE HEADER AND PLAY/PAUSE BUTTON */}
                    <div id="titles-and-buttons">
                        {/* SUBPAGE HEADER */}
                        <p id="subpage-header">{pageInfo[index][0]}</p>

                        {/* PLAY/PAUSE BUTTON */}
                        <div id="play-and-pause">
                            <button type="button" id="play-and-pause-btn" style={{ fontSize: "36px" }} onClick={toggle}>
                                {!isActive ? "\u25B6" : ("\u2758" + "\u2758")}
                            </button>
                        </div>
                    </div>
                    <br style={{ lineHeight: "1.5" }} />

                    {/* SUBPAGE DIALOGUE AND IMAGE */}
                    <HomeFrame color={pageInfo[index][1]} index={index} />
                </div>

                {/* FOOTER (TIME, LEARN MORE, SLIDER) */}
                <div id="main-page-footer">
                    {/* TIME */}
                    <div id="footer-time">
                        <p>{time.format('HH:mm:ss')}<br />{"EST: " + time.format('L')}</p>
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
                </div>
            </div>
        </div>
    )
}