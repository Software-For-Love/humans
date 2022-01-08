import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import HomeFrame from "../components/HomeFrame/HomeFrame";
import arrows from '../../../static/images/mainpage2line.png';
import featuredBackground from '../../../static/images/home-background.png'
import aboutBackground from '../../../static/images/home2-background.png'
import teamBackground from '../../../static/images/home3-background.png'
import oldEntriesBackground from '../../../static/images/home4-background.png'
import "./Home.css";

var currentDate = new Date()
var date = String(currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear())

const colors = [
    '#FF98B1',
    '#FFA16C',
    '#CBEFFF',
    '#F6B6B6'
];

const background = [
    featuredBackground,
    aboutBackground,
    teamBackground,
    oldEntriesBackground
];

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
                    <span class="icon"></span>
                </div>
                <div class="bullet">
                    <div class="text" style={{ visibility: (props.index === 1) ? 'visible' : 'hidden' }}>About</div>
                    <span class="icon"></span>
                </div>
                <div class="bullet">
                    <div class="text" style={{ visibility: (props.index === 2) ? 'visible' : 'hidden' }}>Team</div>
                    <span class="icon"></span>
                </div>
                <div class="bullet">
                    <div class="text" style={{ visibility: (props.index === 3) ? 'visible' : 'hidden' }}>Old Entries</div>
                    <span class="icon"></span>
                </div>
            </div>
        </div>
    )
}

export default function Home() {

    const [currentDate, setDateState] = useState(new Date());
    const [index, setIndex] = useState(0)

    // CHANGE SECONDS
    useEffect(() => {
        setInterval(() =>
            setDateState(new Date()), 1000);
    }, []);

    // CHANGE INDEX WHICH CHANGES COLORS
    useEffect(() => {
        setInterval(() =>
            setIndex(prevIndex => (prevIndex === 3) ? 0 : prevIndex + 1), 4000);
    }, []);

    // REDIRECT TO FEATURE PAGE IF SCROLLING DOWN PAST BOTTOM OF PAGE
    const scrollRedirect = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
            window.location.replace('/feature-page/feature-page/');
        }
     }

    return (

        <div id="home-page" onScroll={scrollRedirect} style={{ backgroundImage: `url(${background[index]})`, overflowY: 'scroll' }}>
            <Header color={colors[index]} />
            
            <div id="home-frame">

                {/* PAUSE AND PLAY BUTTONS */}
                <div id="play-and-pause">
                    <button type="button" id="play-and-pause-btn" style={{ fontWeight: "revert", fontSize: "36px" }}>▷</button>
                    <button type="button" id="play-and-pause-btn" style={{ transform: "rotate(90deg)", fontWeight: "bolder", fontSize: "36px" }}>=</button>
                </div>

                <br style={{ lineHeight: "3.5" }} />
                {/* TEXT AND PICTURE */}
                <HomeFrame color={colors[index]} index={index} />

                {/* FOOTER (TIME, LEARN MORE, SLIDER) */}
                <div id="main-page-footer">
                    {/* TIME */}
                    <div id="footer-time">
                        <p>{currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()}<br /> {"RST: " + date}</p>
                    </div>

                    {/* LEARN MORE */}
                    <div id="learn-more" >
                        <a href="/feature-page/feature-page/"><button id="learn-more-btn">Learn More</button></a>
                        <img src={arrows} id="arrows" alt="Down Directional Arrows" />
                    </div>

                    {/* SLIDER */}
                    <div id="slider" >
                        <Pagination color={colors[index]} index={index}/>
                    </div>

                </div>
            </div>
        </div>
    )
}