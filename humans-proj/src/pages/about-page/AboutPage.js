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
                        <h2>What we do?</h2>
                        <ul>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                        </ul>
                    </div>
                    <div className="faq">
                        <h2>More About Software For Love</h2>
                        <ul>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                        </ul>
                    </div>
                </div>
                <div className="second-row">
                    <div className="faq">
                        <h2>Why we do it?</h2>
                        <ul>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                        </ul>
                    </div>
                    <div className="faq">
                        <h2>Why we do it?</h2>
                        <ul>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                        </ul>
                    </div>
                </div>

            </section>
            <Footer />
        </div>

    )
}