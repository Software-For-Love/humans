import React, { Component } from "react";
import './submission-form.css';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

let link = class {
    constructor(platform, url) {
        this.platform = platform;
        this.url = url;
    }

    setPlatform(platform) {
        this.platform = platform;
    }

    setUrl(url) {
        this.url = url;
    }

    getPlatform() {
        return this.platform;
    }

    getUrl() {
        return this.url;
    }
}

export default class SubmissionForm extends Component {
    constructor(props) {
        super()
        this.state = {
            nominatorName: "",
            email: "",
            nomineeName: "",
            description: "",
            canContact: false,
            socialMediaLinks: [
                new link("Linkedin", ""),
                new link("Instagram", ""),
                new link("Tiktok", ""),
                new link("", "")
            ],
            // This represents the amount of fixed social media links we want in the links above
            socialMediaRequirements: 3,
            errors: {
                nominatorNameError: '',
                nomineeNameError: '',
                emailError: '',
                descriptionError: '',
                checkboxError: '',

            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.handleLinkPlatformChange = this.handleLinkPlatformChange.bind(this)
        this.handleLinkUrlChange = this.handleLinkUrlChange.bind(this)
        this.handleNewLink = this.handleNewLink.bind(this)
        this.handleLinkRemove = this.handleLinkRemove.bind(this)
    }

    onClickSubmit() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            errors: {
                nominatorNameError: (this.state.nominatorName.length < 1 ? '*Please enter a name!' : ''),
                nomineeNameError: (this.state.nomineeName.length < 1 ? '*Please enter a name!' : ''),
                checkboxError: (this.state.canContact ? '' : '*Please check checkbox!'),
                emailError: (re.test(this.state.email) ? '' : '*Please enter a valid email address'),
                descriptionError: (this.state.description.length < 1 ? '*Please enter description!' : '')

            }
        });

        // console.log(this.state.errors)
    }
    handleChange(event) {
        const { name, value, id, type } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: id.checked
            })
            :
            this.setState({
                [name]: false
            })
        let errors = this.state.errors;
        switch (name) {
            case 'nominatorName':
                errors.nominatorNameError = value.length < 1 ? '*Please enter first name!' : '';
                break;
            case 'nomineeName':
                errors.nomineeNameError = value.length < 1 ? '*Please enter a name!' : '';
                break;
            case 'email':
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                errors.emailError = re.test(value) ? '' : '*Please enter a valid email address';
                break;
            case 'description':
                errors.descriptionError = value.length < 1 ? '*Please enter description!' : '';
                break;
            case 'canContact':
                errors.checkboxError = id.checked ? '' : '*Please check checkbox!';
                break;
            default:
                break;

        }
        this.setState({ errors, [name]: value }, () => {
            // console.log(errors)
        })

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (e.length > 0) { return false; }
        const form = e.target;

        console.log(this.state);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state,
            }),
        })

            .catch((error) => alert(error));
    }

    handleLinkUrlChange(e, index) {
        const links = [...this.state.socialMediaLinks];
        links[index].setUrl(e.target.value);
        this.setState({ socialMediaLinks: links })
    }

    handleLinkPlatformChange(e, index) {
        const links = [...this.state.socialMediaLinks];
        links[index].setPlatform(e.target.value);
        this.setState({ socialMediaLinks: links })
    }

    handleNewLink() {
        const links = [...this.state.socialMediaLinks];
        links.push(new link("", ""));
        this.setState({ socialMediaLinks: links })
    }

    handleLinkRemove(index) {
        let links = [...this.state.socialMediaLinks];
        links = links.slice(0, index).concat(links.slice(index + 1));
        this.setState({ socialMediaLinks: links })
    }

    render() {
        return (
            <div id="submission">
                <p id="intro">{this.props.intro}</p>

                <form name={this.props.form_name} method="post" id="text-fields" onSubmit={this.handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="form" />
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                        </label>
                    </p>
                    <div id="form-image-container" style={{ float: "right" }}>
                        <img
                            id="picture"
                            src={this.props.image}
                            alt="submission-form-img"
                        />
                        <div id="caption-border">
                            <figcaption id="caption" for="picture">humans.</figcaption>
                        </div>
                    </div>

                    <div className="personTag"><h3 className="personTitle">Nominator Information</h3></div>

                    <div>
                        <label>Name *
                            <br style={{ lineHeight: "2" }} />
                            <textarea
                                name="nominatorName"
                                input type="text"
                                value={this.state.nominatorName}
                                onChange={this.handleChange} required
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            />
                        </label>

                        <br style={{ lineHeight: "2" }} />

                        <label htmlFor="email">Email *
                            <br style={{ lineHeight: "2" }} />
                            <input id="textarea"
                                name="email"
                                input type="email"
                                value={this.state.nominatorEmail}
                                onChange={this.handleChange}
                                required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            /></label>

                    </div>

                    <div className="personTag"><h3 className="personTitle">Nominee Information</h3></div>

                    <div>
                        <label>Name *
                            <br style={{ lineHeight: "2" }} />
                            <textarea
                                name="nomineeName"
                                input type="text"
                                value={this.state.nomineeFirstName}
                                onChange={this.handleChange} required
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            /></label>

                        <br style={{ lineHeight: "2" }} />

                        <label>Social Media
                            <div className="socialMediaLinks">
                                {
                                    this.state.socialMediaLinks.map((link, index) => {
                                        return (
                                            <div id="textarea" name = {link.getPlatform()} className="linkDisplay">
                                                <input className="linkName" name = {link.getPlatform()} value={link.getPlatform()}
                                                    placeholder="Add platform..."
                                                    disabled={index < this.state.socialMediaRequirements}
                                                    onChange={(e) => this.handleLinkPlatformChange(e, index)} />

                                                <div className="linkInputContainer">
                                                    <input value={link.getUrl()} name = {link.getUrl}className="linkInput"
                                                        onChange={(e) => this.handleLinkUrlChange(e, index)} />
                                                    {
                                                        index < this.state.socialMediaRequirements ?
                                                            <></> :
                                                            <input type="button" value="&#128473;" className="linkClose"
                                                                onClick={() => this.handleLinkRemove(index)} />
                                                    }
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </label>

                        <div className="addLink">
                            <input type="button"
                                value="Add..."
                                className="addLinkButton"
                                onClick={this.handleNewLink}
                            />
                        </div>
                    </div>

                    <div id="description-text">
                        <label>Why Should They Be Featured? *
                            <br style={{ lineHeight: "2" }} />
                            <textarea
                                id="description-text-input"
                                name="description"
                                input type="text"
                                value={this.state.descripton}
                                onChange={this.handleChange} required
                            /></label>
                    </div>

                    <br style={{ lineHeight: "2" }} />

                    <div id="form-checkbox">
                        <input
                            type="checkbox"
                            id="can-contact-checkbox"
                            name="canContact"
                            value={this.state.canContact}
                            onChange={this.handleChange} required
                        />
                        <label id="consent" for="can-contact-checkbox">I understand that this form is storing my submitted information so I can be contacted. *</label>
                    </div>
                    <h5 className="asteriskWarning">Fields marked with an asterisk (*) are required</h5>

                    <button class="submit_button" id="submit-button" input type="submit" onClick={this.onClickSubmit}>SUBMIT</button>


                </form>
            </div>
        )
    }
}
