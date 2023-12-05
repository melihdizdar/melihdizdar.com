"use client";
import React from 'react';
import frontProjectsData from '../data/frontProjectsData';
import fullProjectsData from '../data/fullProjectsData';
import FrontProjectsCards from './FrontProjectsCards';
import FStackProjectsCards from './FStackProjectsCards';

export default function Projects() {
    return(
        <section className="uk-background-primary" id="projects" data-uk-height-viewport="offset-top:true;">
            <div className="uk-section">
                <div className="uk-width-2-1 uk-margin-auto uk-text-center" data-uk-grid>
                    <div className="uk-width-1-1@m uk-padding-remove-left" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                        <div className="uk-text-large uk-margin-small-top uk-margin-small-bottom uk-text-bold uk-text-large uk-light">Projects</div>
                    </div>
                </div>
            </div>
            <div className="uk-container uk-container-large uk-overflow-hidden" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <div>
                    <ul className="uk-subnav uk-subnav-pill uk-flex uk-flex-center uk-light" data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium; swiping:false; " >
                        <li className="uk-active ">
                            <a href="#">Front-End</a>
                        </li>
                        <li>
                            <a href="#">Full-Stack</a>
                        </li>
                    </ul>
                    <ul className="uk-switcher uk-margin">
                        <li>
                            <div data-uk-slider="finite:true;">
                                <div className="uk-position-relative" tabIndex="-1">
                                    <div className="uk-slider-container">
                                        <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" data-uk-grid>
                                            {frontProjectsData.map((frontCard) => (
                                            <FrontProjectsCards key={frontCard._id} frontCard={frontCard}></FrontProjectsCards>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="uk-position-bottom-center uk-position-small uk-hidden">
                                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" data-uk-grid></ul>
                                    </div>
                                    <div className="uk-visible@m uk-light">
                                        <a className="uk-position-center-left-out  uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                        <a className="uk-position-center-right-out  uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div data-uk-slider="finite:true;">
                                <div className="uk-position-relative" tabIndex="-1">
                                    <div className="uk-slider-container">
                                        <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" data-uk-grid>
                                            {fullProjectsData.map((fstackCard) => (
                                            <FStackProjectsCards key={fstackCard._id} fstackCard={fstackCard}></FStackProjectsCards>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="uk-position-bottom-center uk-position-small uk-hidden">
                                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                                    </div>
                                    <div className="uk-visible@m uk-light">
                                        <a className="uk-position-center-left-out uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                                        <a className="uk-position-center-right-out uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="uk-container uk-flex uk-flex-center uk-position-relative uk-position-bottom" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <a data-uk-icon="chevron-down" href="#contact" className="uk-light" data-uk-scroll="offset:70"></a>
            </div>
        </section>
    );
}
