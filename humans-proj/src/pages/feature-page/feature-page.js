import React from "react";
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";
import img1 from "../../../static/images/img1.png";
import img2 from "../../../static/images/img2.png";
import img3 from "../../../static/images/img3.png";
import img4 from "../../../static/images/img 4.png";
import insta from '../../../static/images/insta_icon.png';
import facebook from '../../../static/images/facebook_icon.png';
import twitter from '../../../static/images/twitter_icon.png';
import internet from '../../../static/images/internet_icon.png';

export default function FeaturePage() {
    return (
        <div id="feature-page">
            <Header />
            <div class="square" id="afbar"></div>
            <div class="dropdown">
                <button id="months">Month ↓</button>
                <div class="dropdown_content">
                    <p>January</p>
                    <p>Feburary</p>
                    <p>March</p>
                    <p>April</p>
                    <p>May</p>
                    <p>June</p>
                    <p>July</p>
                    <p>August</p>
                    <p>September</p>
                    <p>October</p>
                    <p>November</p>
                    <p>December</p>
                </div>
            </div>
            <input id="search_bar" type="text" placeholder="Search name, stories..."></input>
            <h2 id="m1">2021 August</h2>
            <h2 id="m2">2021 July</h2>
            <div class="pic1">
                <button><img id="img1" src={img1}/></button>
                <div class="square" id="namerec1"></div>
                <p id="name1">Name Lastname</p>
                <div class="pic1det">
                    <div class="square" id="details1"></div>
                    <p id="pic1head">Name Lastname</p>
                    <div class="pic1des">
                        <p>Journalist</p>
                        <br></br>
                        <p>"We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace."</p>
                        <p><button id="all_medias1"><img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Photo"/>&nbsp;<img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Photo"/><img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Photo"/><img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Photo"/></button></p>
                    </div>
                </div>
            </div>

            <div class="pic2">
                <button><img id="img2" src={img2}/></button>
                <div class="square" id="namerec2"></div>
                <p id="name2">Name Lastname</p>
                <div class="pic2det">
                    <div class="square" id="details2"></div>
                    <p id="pic2head">Name Lastname</p>
                    <div class="pic2des">
                        <p>Journalist</p>
                        <br></br>
                        <p>"We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace."</p>
                        <p><button id="all_medias2"><img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Photo"/>&nbsp;<img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Photo"/><img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Photo"/><img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Photo"/></button></p>
                    </div>
                </div>
            </div>

            <div class="pic3">
                <button><img id="img3" src={img3}/></button>
                <div class="square" id="namerec3"></div>
                <p id="name3">Name Lastname</p>
                <div class="pic3det">
                    <div class="square" id="details3"></div>
                    <p id="pic3head">Name Lastname</p>
                    <div class="pic3des">
                        <p>Journalist</p>
                        <br></br>
                        <p>"We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace."</p>
                        <p><button id="all_medias3"><img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Photo"/>&nbsp;<img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Photo"/><img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Photo"/><img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Photo"/></button></p>
                    </div>
                </div>
            </div>

            <div class="pic4">
                <button><img id="img4" src={img4}/></button>
                <div class="square" id="namerec4"></div>
                <p id="name4">Name Lastname</p>
                <div class="pic4det">
                    <div class="square" id="details4"></div>
                    <p id="pic4head">Name Lastname</p>
                    <div class="pic4des">
                        <p>Journalist</p>
                        <br></br>
                        <p>"We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace."</p>
                        <p><button id="all_medias4"><img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Photo"/>&nbsp;<img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Photo"/><img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Photo"/><img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Photo"/></button></p>
                    </div>
                </div>
            </div>

            <p><button type="button" id="arrow1">&gt;</button></p>
            <p><button type="button" id="arrow2">&gt;</button></p>

            <div class="square" id="nominatebar">
            <div class="nominatebartxt">
                <p> Didn't see your favourite human rights activist or social groups?</p>
                <p>Write us a recommendation!</p>
                <button type="button" id="nominate_button">Nominate</button>
            </div>
            </div>
            <Footer />
        </div>
    )
}