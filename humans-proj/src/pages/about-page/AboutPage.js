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
                        <h2 className="faqTitle">What is Humans?</h2>
                        <ul>
                            <p className="info">Humans is a project that was established through Software For Love (SFL), a not-for-profit organization that provides software solutions. Humans is an internal project that would spotlight activists within our respective communities. Each activist on this website is someone who goes out of their way to bring about positive change in our society. Humans gives activist a platform while also demonstrating our design and software development skills!</p>
                            
                        </ul>
                    </div>
                    <div className="faq">
                        <h2 className="faqTitle">About Software For Love</h2>
                        <ul>
                            <p className="info">Software For Love is a not for profit organization that provides software solutions to other nonprofits and charities in order to increase the social impact of these organizations.</p>
                        </ul>
                    </div>
                </div>
                <div className="second-row">
                    <div className="faq">
                        <h2 className="faqTitle">Why we do it?</h2>
                        <ul>
                        <p className="info">We are passionate about the intersection of technology and activism and this project is an ideal way to execute it. With the aim “spreading love through software” we aim to use our expert knowledge in UI/UX design, software development, and more, to help smaller organizations increase their digital image in an increasingly digital world.</p>
                        </ul>
                    </div>
                    <div className="faq">
                        <h2 className="faqTitle">What can I do?</h2>
                        <ul>
                            <p className="info">If you have an activist that you believe deserves this spotlight, fill out our <a href='/nominate-page/nominate/'>nomination form!</a></p>

                        </ul>
                    </div>
                </div>

            </section>
            <Footer />
        </div>

    )
}