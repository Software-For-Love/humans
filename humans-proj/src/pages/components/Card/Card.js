import React from "react"
import "./Card.css"
import { SocialIcon } from 'react-social-icons';
import { Link } from 'gatsby';

export default class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = { src: null }
    }

    componentDidMount() {
        this.loadImage(this.props.person.photo)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.person.photo !== this.props.person.photo) {
            this.loadImage(this.props.person.photo)
        }
    }

    loadImage(name) {
        import(`../../../../static/images/${name}`)
            .then(image => {
                this.setState({ src: image.default })
            })
    }


    render() {
        return (
            <div id="card-wrapper">
                <div id="card">

                    {/* CARD IMAGE */}
                    <div id="card-img-div">
                        <img id="card-img" src={this.state.src} alt={this.props.person["photoalt"]} />
                    </div>

                    {/* CARD NAME */}
                    <div id="card-name-div-wrapper">
                        <div id="card-name-div">
                            <p id="card-name">{this.props.person["photoalt"]} </p>
                        </div>
                    </div>


                    {/* CARD ON-HOVER DESCRIPTION */}
                    <div id="middle">
                        <div id="overlay-wrapper">
                            <Link to="/feature-page/currently-featured/" state={{ file: this.props.person }} style={{ textDecoration: "none", color: "white" }}>
                                <div id="info-wrapper">
                                    <p className="overlay-text" id="overlay-name"> {this.props.person["first_name"] + " " + this.props.person["last_name"]} </p>
                                    <p className="overlay-text" id="overlay-job">{this.props.person["position"]}</p>
                                    <div id="overlay-desc-wrapper">
                                        <p className="overlay-text" id="overlay-desc">{this.props.person["description"]}</p>
                                    </div>
                                </div>
                            </Link>

                            <div id="card-links-wrapper">
                                <div id="card-links">
                                    {
                                        !this.props.person.socials ? <></> :

                                            this.props.person.socials.map(link => {
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
}