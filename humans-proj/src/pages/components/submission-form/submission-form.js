import React, { Component } from "react";
import './submission-form.css';

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  
export default class SubmissionForm extends Component {
    constructor(props) {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            description: "",
            canContact: false,
            errors: {
                firstNameError: '',
                lastNameError: '',
                emailError: '',
                descriptionError: '',
                checkboxError: '',

            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.onClickSubmit = this.onClickSubmit.bind(this)
    }
    onClickSubmit(){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            errors:{
                firstNameError : (this.state.firstName.length < 1 ? '*Please enter first name!':''),
                lastNameError : (this.state.lastName.length < 1 ? '*Please enter last name!':''),
                checkboxError : (this.state.canContact ? '':'*Please check checkbox!'),
                emailError : (re.test(this.state.email) ? '' : '*Please enter a valid email address'),
                descriptionError : (this.state.description.length < 1 ? '*Please enter description!':'')

        }});
        console.log(this.state.errors)
    }
    handleChange(event) {
        const { name, value,id, type} = event.target
        type === "checkbox" ?
            this.setState({
                 [name]: id.checked 
            })
             :
            this.setState({
                [name]: false
            })
            let errors = this.state.errors;
            switch(name){
                case 'firstName':
                    errors.firstNameError = value.length < 1 ? '*Please enter first name!':'';
                    break;
                case 'lastName':
                    errors.lastNameError = value.length < 1 ? '*Please enter last name!':'';
                    break;
                case 'email':
                    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    errors.emailError = re.test(value) ? '' : '*Please enter a valid email address';
                    break;
                case 'description':
                    errors.descriptionError = value.length < 1 ? '*Please enter description!':'';
                    break;
                case 'canContact':
                    errors.checkboxError = id.checked ? '':'*Please check checkbox!';
                    break;
                default:
                    break;
    
            }
            this.setState({errors,[name]:value}, () => {
                console.log(errors)
            })
            
        }

    handleSubmit = async(e) =>{
       e.preventDefault();
       if (e.length>0){
           return false;
       }
       const form = e.target;
        
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

    render() {
        return (
            <div id="submission">
                <p id="intro">{this.props.intro}</p>

                <form name={this.props.form_name} method="post" id="text-fields" onSubmit={this.handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="form"/>
                    <p hidden>
                    <label>
                     Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                    </label>
                     </p>
                    <div id="spinner" style={{ float: "right" }}>
                        <img
                            id="picture"
                            src={this.props.image}
                            alt="women-diversity"
                        />
                        <div id="caption-border">
                            <figcaption id="caption">humans.</figcaption>
                        </div>
                    </div>
                    
                    <label>First Name</label>
                    <br style={{ lineHeight: "2" }} />
                    <textarea
                        name="firstName"
                        input type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange} required
                    />
                    <br style={{ lineHeight: "2" }} />

                    <label>Last Name</label>
                    <br style={{ lineHeight: "2" }} />
                    <textarea
                        name="lastName"
                        input type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange} required
                    />
                 
                    <br style={{ lineHeight: "2" }} />

                    <label htmlFor="email">Email</label>
                    <br style={{ lineHeight: "2" }} />
                    <input id = "email" 
                        name="email"
                        input type="email"
                        value={this.state.email}
                        onChange={this.handleChange} 
                        required pattern= "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"/>
                    
                
                    <br style={{ lineHeight: "2" }} />

                    <label>Description</label>
                    <br style={{ lineHeight: "2" }} />
                    <textarea
                        id="description-text-input"
                        name="description"
                        input type="text"
                        value={this.state.descripton}
                        onChange={this.handleChange} required
                    />
        
                    <br style={{ lineHeight: "2" }} />

                    {/* <div className="form-group form-checkbox"> */}
                        <input
                            type="checkbox"
                            id="can-contact-checkbox"
                            name="canContact"
                            //checked={this.state.canContact}
                            value={this.state.canContact}
                            onChange={this.handleChange} required
                        />
                        <label id="consent" for="can-contact-checkbox">I understand that this form is storing my submitted information so I can be contacted.</label>
                    {/* </div> */}
                  
                    <br style={{ lineHeight: "2" }} />
                    <button id="submit-button" input type="submit" onClick = {this.onClickSubmit}>SUBMIT</button>
                </form>
            </div>
        )
    }
}