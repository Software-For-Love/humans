import React from "react";
import Header from "../components/Header/Header";
import "./AboutPage.css";
import "antd/dist/antd.css";
import Footer from "../components/Footer/Footer";
import photo from '../../../static/images/about-us-claybanks.png';
import photo2 from '../../../static/images/Rectangle.png';
import { Carousel } from "antd";

export default function AboutPage() {
    // Put images for carousel in this array
    const images = [photo, photo, photo];
    const carousel = React.createRef();

    const nextImage = () => {
        carousel.current.next();
    }

    const prevImage = () => {
        carousel.current.prev();
    }

    return (
        <div id="about-page">
            <Header />
            <section className="image-section">
                <div className="image-slider">

                    <button className="arrow-button" onClick={prevImage}>
                        <h1 className="small-arrow">&lt;</h1>
                        <h1 className="big-arrow">&lt;</h1>
                    </button>

                    <div className="image-overlap">
                        <Carousel ref={carousel} dots={false} autoplay>
                            {
                                images.map((imageSrc, index) => {
                                    return (
                                        <div className="image-overlap" key={index}>
                                            <img className="changeable-image" src={imageSrc} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                        <img className="box" src={photo2} alt="" />
                    </div>

                    <button className="arrow-button" onClick={nextImage}>
                        <h1 className="big-arrow">&gt;</h1>
                        <h1 className="small-arrow">&gt;</h1>
                    </button>

                </div>
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