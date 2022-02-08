import React from "react";
import './Footer.css';
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon
} from "react-share";

export default function Footer() {

    const shareUrl = "https://www.softwareforlove.com/team"
    const quote = "Take a look at some Humans.\n"
    const hashtag = "#softwareforlove #humans\n\n"

    return (
        <footer id="footer">
            <div id="wrapper">
                <div id="footer-text">
                    <span id="footer-intro-non-mobile">Let more people know about</span> <span id="humans-text" style={{fontWeight: "bolder"}}>Humans</span>
                </div>
                <div id="web-social-div">
                    <div id="webSocialList">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                        <li id="share-icon">
                            <i className="fa fa-share-alt"></i>
                        </li>
                        <li className="list-icon" id="facebook-icon">
                            <FacebookShareButton id="button-icon" url={shareUrl} quote={quote} hashtag={hashtag}>
                                <FacebookIcon id="icon" size={50} round={true} iconFillColor="black" bgStyle={{ fill: "white" }} />
                            </FacebookShareButton>
                        </li>
                        <li className="list-icon" id="twitter-icon">
                            <TwitterShareButton id="button-icon" url={shareUrl} title={quote} hashtag={hashtag}>
                                <TwitterIcon id="icon" size={50} round={true} iconFillColor="black" bgStyle={{ fill: "white" }}/>
                            </TwitterShareButton>
                        </li>
                        <li className="list-icon" id="whatsapp-icon">
                            <WhatsappShareButton id="button-icon" url={shareUrl} title={quote + hashtag}>
                                <WhatsappIcon id="icon" size={50} round={true} iconFillColor="black" bgStyle={{ fill: "white" }} />
                            </WhatsappShareButton>
                        </li>
                    </div>
                </div>
            </div>
        </footer>
    )
}