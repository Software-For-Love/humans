import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { SocialIcon } from 'react-social-icons';
import "./currently-featured.css";
import Footer from "../components/Footer/Footer";
import file_data from "../../data/currently-featured.yaml";

export default function CurrFeaturePage(props) {

    // If redirected from all featured page, use the file that was passed otherwise use the default file being imported
    const [img, setImg] = useState(null);
    const [socialsLength, setSocialsLength] = useState(1);
    const featured_data = props.location.state && props.location.state.file ? props.location.state.file : file_data;

    useEffect(() => {
        function loadImage(name) {
            import(`../../../static/images/${name}`)
                .then(image => {
                    setImg(image.default);
                })
        }

        if (featured_data) {
            loadImage(featured_data.photo);
            setSocialsLength(featured_data.socials.length);
        }
    }, [featured_data])

    return (
        <div id="curr-feature-page">
            <Header />
            {
                props.location.state && props.location.state.file ?
                    <p><button id="Back_btn" onClick={() => { window.history.back() }}>BACK</button></p> :
                    <></>
            }

            <div id="short-description">

                <div id="featured-icon">
                    <div className="square" id="square1"></div>
                    <div className="square" id="square2"></div>
                    <img src={img} id="main_pic" className="photo-for-mainpage" alt={featured_data.photo_alt} />
                </div>

                <div id="featured-info">
                    <h1 id="main_text">{featured_data.first_name}{featured_data.last_name}</h1>
                    <p>
                        <button id="all_medias" style={{ gridTemplateColumns: `repeat(${socialsLength}, 1fr)` }}>
                            {
                                featured_data.socials.map(link => {
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
                        </button>
                    </p>
                    <p id="LG">{featured_data.position}</p>
                </div>
            </div>

            <div id="full-description">
                <p id="para1" className="para">{featured_data.description} </p>
                <p id="para2" className="para">{featured_data.description2.support}</p>
                <p id="para2" className="para">{featured_data.description2.organization}</p>
            </div>
            <Footer />
        </div>
    )
}