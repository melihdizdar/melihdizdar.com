"use client";
import React from 'react';

export default function FStackProjectsCards(props) {
    const {fstackCard} = props;
    return (
        <li key={fstackCard.id}>
            <div className="uk-card uk-card-default custom-card uk-width-1-1 uk-child-width-1-1 uk-flex-center uk-margin-auto uk-height-large" data-uk-grid>
                <div className="uk-card-body uk-text-left">
                    <div className="uk-child-width-1-1" data-uk-grid>
                        <h4>{fstackCard.Title}</h4>
                        <small className="text-blue margin-top-small">{fstackCard.Language}</small>
                        <p className="uk-text-emphasis margin-top-small">{fstackCard.Description}</p>
                    </div>
                    <div className="uk-position-bottom card-bottom">
                        <div className="neon-button uk-flex uk-flex-center">
                            <a href={fstackCard.URL}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Detay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
