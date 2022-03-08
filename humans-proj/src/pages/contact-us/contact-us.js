import React from 'react';
import './contact-us.css';
import SubmissionForm from '../components/submission-form/contact-form';
import photo from '../../../static/images/contact-us-side-photo.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Contact_Us() {
    return (
        <div id="contact-us-page">
            <Header />
            <SubmissionForm
                intro="Do you have a message, question, or concern? Contact us with the form below and our team will get in touch with you as soon as possible!"
                form_name="contact-us-page"
                image={photo}
            />
            <Footer />
        </div>
    )
}