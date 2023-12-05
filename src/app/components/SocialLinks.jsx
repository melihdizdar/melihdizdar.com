"use client";
import React from 'react';

export default function SocialLinks() {
    return (
        <section className="uk-position-absolute uk-position-fixed uk-flex uk-flex-middle uk-visible@s" data-uk-height-viewport>
            <div className="uk-flex uk-flex-column uk-flex-middle uk-text-muted uk-padding-small uk-padding-remove-horizontal social-icon" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="github" href="https://github.com/melihdizdar"></a></div>
                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="icon:codepen; ratio:0.5;" href="https://codepen.io/melihdizdar/pens/showcase"></a></div>
                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="linkedin" href="https://www.linkedin.com/in/melihdizdar/"></a></div>
                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="whatsapp" href="tel:+905331438293"></a></div>
                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="twitter" href="https://twitter.com/melihdizdarr"></a></div>
                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="instagram" href="https://www.instagram.com/melihdizdarr/"></a></div>
            </div>
        </section>
    );
}
