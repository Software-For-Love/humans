import React, { useState, useEffect } from "react"
import "./Card.css"
import { SocialIcon } from 'react-social-icons';
import { Link } from 'gatsby';

export default function Card(props) {

    const [src, setSrc] = useState(null);

    useEffect(() => {
        loadImage(props.person.photo)
    }, [props])

    function loadImage(name) {
        import(`../../../../static/images/${name}`)
            .then(image => {
                setSrc(image.default)
            })
    }

    return (
        <div id="card-wrapper">
            <div id="card">

                {/* CARD IMAGE */}
                <div id="card-img-div">
                    <img id="card-img" src={src} alt={props.person["photo_alt"]} />
                </div>

                {/* CARD NAME */}
                <div id="card-name-div-wrapper">
                    <div id="card-name-div">
                        <p id="card-name">{props.person["photo_alt"]} </p>
                    </div>
                </div>


                {/* CARD ON-HOVER DESCRIPTION */}
                <div id="middle">
                    <div id="overlay-wrapper">
                        <Link to="/feature-page/currently-featured/" state={{ file: props.person }} style={{ textDecoration: "none", color: "white" }}>
                            <div id="info-wrapper">
                                <p className="overlay-text" id="overlay-name"> {props.person.first_name + " " + props.person.last_name} </p>
                                <p className="overlay-text" id="overlay-job">{props.person.position}</p>
                                <div id="overlay-desc-wrapper">
                                    <p className="overlay-text" id="overlay-desc">{props.person.description}</p>
                                </div>
                            </div>
                        </Link>

                        <div id="card-links-wrapper">
                            <div id="card-links">
                                {
                                    !props.person.socials ? <></> :

                                        props.person.socials.map(link => {
                                            return (
                                                <div id="card-icon-list">

                                                    <SocialIcon id="card-icon" url={link}
                                                        fgColor="black"
                                                        bgColor="white"
                                                        target={"_blank"}
                                                        style={{ width: "40px", height: "40px", margin: "10px" }}
                                                    />
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}