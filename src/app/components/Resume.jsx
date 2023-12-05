"use client";
import React from 'react';

export default function Resume() {
    return(
        <section className="uk-section-xsmall uk-background-primary" id="resume" data-uk-height-viewport="offset-top:true;">
            <div>
                <div className="uk-width-2-1 uk-margin-auto uk-text-center" data-uk-grid>
                    <div className="uk-width-1-1@m uk-padding-remove-left" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                        <div className="uk-text-large uk-margin-small-top uk-margin-small-bottom uk-text-bold uk-light">Resume</div>
                    </div>
                </div>
            </div>
            <div className="uk-grid-medium uk-width-1-3@m uk-flex-center uk-margin-auto" data-uk-grid>
                <div className="timeline" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                    <ul data-uk-scrollspy="target: > li; cls: uk-animation-fade; delay:300;">
                        <li>
                            <span>January 2022 - Current</span>
                            <div className="content">
                                <h3>Clockwork Agency</h3>
                                <p>Front-End Developer</p>
                            </div>
                        </li>
                        <li>
                            <span>September 2021 - Current</span>
                            <div className="content">
                                <h3>Anadolu University</h3>
                                <p>Licentiate degree, Management Information Systems</p>
                            </div>
                        </li>
                        <li>
                            <span>September 2018 - June 2020</span>
                            <div className="content">
                                <h3>Sakarya University of Applied Sciences</h3>
                                <p>Associate's degree, Computer Programming</p>
                            </div>
                        </li>
                        <li>
                            <span>September 2013 - June 2017</span>
                            <div className="content">
                                <h3>İMMİB Erkan Avcı Vocational and Technical Anatolian High School</h3>
                                <p>High School Degree, Information Iechnologies - Web Design</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="uk-flex uk-flex-center" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <a data-uk-icon="chevron-down" href="#skills" className="uk-light" data-uk-scroll="offset:70" data-uk-scrollspy="cls: uk-animation-fade; delay:300;"></a>
            </div>
        </section>
    );
}
