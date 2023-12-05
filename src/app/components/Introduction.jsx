"use client";
import React from 'react';

export default function Introduction() {
    return (
        <section id="intro" data-uk-height-viewport="offset-top:true;">
            <div className="uk-container">
                <div className="uk-grid-collapse uk-flex-middle" data-uk-grid data-uk-height-viewport="offset-top:true;">
                    <div className="uk-width-1-2@m uk-flex uk-flex-center" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                        <img src="../assets/intro.png" alt='intro-img'></img>
                    </div>
                    <div className="uk-width-1-2@m uk-text-center" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                        <div className="uk-h3">Hi There, I am</div>
                        <div className="uk-h1 uk-margin-remove-top uk-text-bold text-blue">Melih Dizdar</div>
                        <div className="uk-margin-remove-top uk-h2 uk-text-bold">
                            <span>Front-End </span><span className="uk-h2 uk-text-bold text-blue">Developer</span>
                        </div>
                        <div className="text-center" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                            <a data-uk-icon="chevron-down" href="#resume" className="uk-dark" data-uk-scroll="offset:70"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
