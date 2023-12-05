"use client";
import React from 'react';

export default function FrontProjectsCards(props) {
    const {frontCard} = props;
    return (
        <li key={frontCard._id}>
            <div className="uk-card uk-card-default custom-card uk-width-1-1 uk-child-width-1-1 uk-flex-center uk-margin-auto uk-height-large" data-uk-grid>
                <div className="uk-card-body uk-text-left">
                    <div className="uk-child-width-1-1" data-uk-grid>
                        <h4>{frontCard.header}</h4>
                        <small className="text-blue margin-top-small">{frontCard.lang}</small>
                        <p className="uk-text-emphasis margin-top-small">{frontCard.text}</p>
                    </div>
                    <div className="uk-position-bottom card-bottom">
                        <div className="neon-button uk-flex uk-flex-center">
                            <a href={frontCard.link} target='_blank' rel="noreferrer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Detail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
