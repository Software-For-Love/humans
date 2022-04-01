import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "./AboutPage.css";
import Footer from "../components/Footer/Footer";
import photo from '../../../static/images/about-us-claybanks.png';
import photo2 from '../../../static/images/Rectangle.png';
import rightArrows from '../../../static/images/right-arrows.png';
import leftArrows from '../../../static/images/left-arrows.png';

export default function AboutPage() {
    // Put images for carousel in this array
    const images = [photo, photo, photo];
    const [imageIndex, setImageIndex] = useState(0);

    // This is the default time before the image rotates
    const defaultTime = 7000;

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, defaultTime)
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    })

    const nextImage = () => {
        setImageIndex((imageIndex + 1) % images.length);
    }

    const prevImage = () => {
        if (imageIndex === 0) setImageIndex(images.length - 1);
        else setImageIndex(imageIndex - 1);
    }

    return (
        <div id="about-page">
            <Header />
            <section className="image-section">

                <button className="arrow-button" onClick={prevImage}>
                    <img src={leftArrows} alt=""/>
                </button>

                <div className="image-overlap">
                    <div className="carousel">
                        <div className="image-listing" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                            {
                                images.map((imageSrc, index) => {
                                    return (
                                        <img className="carousel-image" src={imageSrc} alt="" key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <img className="box" src={photo2} alt="" />
                </div>

                <button className="arrow-button" onClick={nextImage}>
                    <img src={rightArrows} alt=""/>
                </button>

            </section>

            <section className="questions">
                <div className="first-row">
                    <div className="faq">
                        <h2>What is Humans?</h2>
                        <ul>
                            <p className="info">Humans is a passion project through <br></br> which we will put a spotlight on the <br></br> heroes of our community that bring <br></br> about positive change in our society.</p>
                            
                        </ul>
                    </div>
                    <div className="faq">
                        <h2>About Software For Love</h2>
                        <ul>
                            <p className="info">Software For Love is a nonprofit <br></br> organization that provides software <br></br>solutions to other nonprofits and <br></br> charities.</p>
                        </ul>
                    </div>
                </div>
                <div className="second-row">
                    <div className="faq">
                        <h2>Why we do it?</h2>
                        <ul>
                        <p className="info">We are passionate about the <br></br>intersection of technology and <br></br> activism and this project is an ideal <br></br>way to execute it.</p>
                        </ul>
                    </div>
                    <div className="faq">
                        <h2>What can I do?</h2>
                        <ul>
                            <p className="info">If you have a hero that you believe <br></br>deserves this spotlight, fill out our <br></br><a href='/nominate-page/nominate/'>nominate form.</a></p>

                        </ul>
                    </div>
                </div>

            </section>
            <Footer />
        </div>

    )
}