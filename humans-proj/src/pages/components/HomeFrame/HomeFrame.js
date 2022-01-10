import React, { useEffect } from "react"
import "./HomeFrame.css"
import featuredImg from '../../../../static/images/main_page_1_picture.png';
import aboutImg from '../../../../static/images/main_page_2_picture.png';
import teamAndOldEntryImg from '../../../../static/images/main_page_3_picture.png';

const subpageInfo = [
    ["FEATURED", "Discover this week’s featured human rights activist", featuredImg],
    ["ABOUT", "Learn about the message and the goal of this project", aboutImg],
    ["TEAM", "Nominate an activist to be featured on our website", teamAndOldEntryImg],
    ["OLD ENTRIES", "Look at the list of every previously featured activist", teamAndOldEntryImg]
];

export default function HomeFrame(props) {

    // CHANGE THE ROTATION OF THE PICTURE FRAME
    var thisIndex = props.index ? props.index : 0
    useEffect(() => {
        var rotation = document.querySelector(':root')

        if (props.index === 0) {
            rotation.style.setProperty('--frameRotate', '-3deg')
            rotation.style.setProperty('--imgRotate', '3deg')
        } else {
            rotation.style.setProperty('--frameRotate', '3deg')
            rotation.style.setProperty('--imgRotate', '-3deg')
        }
    }, [props.index])

    return (
        <div id="container">
            <div id="subpage-info">
                {/* <p id="subpage-header">{subpageInfo[thisIndex][0]}</p>

                PAUSE AND PLAY BUTTONS
                <div id="play-and-pause">
                    <button type="button" id="play-and-pause-btn" style={{ fontWeight: "revert", fontSize: "36px" }}>▷</button>
                    <button type="button" id="play-and-pause-btn" style={{ transform: "rotate(90deg)", fontWeight: "bolder", fontSize: "36px" }}>=</button>
                </div> */}

                <p id="subpage-description" style={{ color: props.color }}>{subpageInfo[thisIndex][1]}</p>
            </div>
            <div id="image">
                <div id="picture-frame" style={{ backgroundColor: props.color }}>
                    <img
                        id="picture"
                        src={subpageInfo[thisIndex][2]}
                        alt="welcome-photo"
                    />
                </div>
            </div>
        </div>
    )
}