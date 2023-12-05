"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ir6g7oq', 'template_35w7158', form.current, 'user_qTijygrCJ9GOl8U9kgvzs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert("Your message has ben successfully sent!");
    }
    return (
        <section id="contact" data-uk-height-viewport="offset-top:true;">
            <div className="uk-section-small" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <div className="uk-width-2-1 uk-margin-auto uk-text-center uk-flex-center" data-uk-grid>
                    <div className="uk-width-1-1@m uk-padding-remove-left">
                        <div className="uk-text-large uk-margin-small-top uk-margin-small-bottom uk-text-bold uk-text-large">Contact</div>
                    </div>
                </div>
                <form className="uk-grid-small uk-width-1-4@m uk-margin-auto uk-flex-center uk-flex-middle" data-uk-grid ref={form} onSubmit={sendEmail}>
                    <div className="uk-width-1-1 uk-padding-small uk-padding-remove-right@m">
                        <label className="uk-form-label" htmlFor="flname">Name & Surname</label>
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                            <input className="uk-input" type="text" placeholder="enter your full name" id="flname" name="flname" autoComplete="off" required/>
                        </div>
                    </div>
                    <div className="uk-width-1-1 uk-padding-small uk-padding-remove-right@m">
                        <label className="uk-form-label" htmlFor="email">Email</label>
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" data-uk-icon="icon: mail"></span>
                            <input className="uk-input" type="email" placeholder="enter your email address" id="email" name="email" autoComplete="off" required/>
                        </div>
                    </div>
                    <div className="uk-width-1-1 uk-padding-small uk-padding-remove-right@m">
                        <label className="uk-form-label" htmlFor="subject">Subject</label>
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" data-uk-icon="icon: quote-right"></span>
                            <input className="uk-input" type="text" placeholder="enter your subject" id="subject" name="subject" autoComplete="off" required/>
                        </div>
                    </div>
                    <div className="uk-width-1-1 uk-padding-small uk-padding-remove-right@m">
                        <label className="uk-form-label" htmlFor="message">Message</label>
                        <textarea className="uk-textarea resize-none" rows="3" placeholder="enter your message" id="message" name="message" autoComplete="off" required></textarea>
                    </div>
                    <div className="uk-width-1-1 uk-flex uk-flex-center uk-padding uk-padding-remove-horizontal">
                        <button className="neon-button button-reset" type="submit">
                            <a>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </a>
                        </button>
                    </div>
                </form>
                <div className="uk-section uk-flex uk-flex-center">
                    <a href="#" data-uk-totop className="uk-dark" data-uk-scroll></a>
                </div>
            </div>
        </section>
    );
}
