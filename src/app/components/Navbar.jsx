"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../redux/reducers/localeSlice';
import { fetchProjects } from '../redux/reducers/projectsSlice';

export default function Navbar() {
    const dispatch = useDispatch();
    const locale = useSelector((state) => state.locale);
    const [currentLang, setCurrentLang] = useState(locale);
    const changeLanguage = (language) => {
        setCurrentLang(language);
        dispatch(setLocale('tr'));
        dispatch(fetchProjects(language));
    }
    return(
        <header data-uk-sticky>
            <nav className="uk-navbar-container uk-background-primary uk-navbar-sticky uk-position-relative" data-uk-navbar data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item uk-link-reset uk-text-large"><a href="#intro" data-uk-scroll="offset:70">MD.</a></div>
                </div>
                <div className="uk-navbar-right">
                    <div className="uk-navbar-item">
                        <a className="uk-link-reset uk-text-large" data-uk-icon="menu" data-uk-toggle="target: #offcanvas-nav"></a>
                    </div>
                    <div className='uk-navbar-item language-select'>
                        <button type="button">{currentLang}</button>
                        <div class="uk-card uk-card-default" uk-drop="mode: click">
                            <ul>
                                <li className={currentLang === "tr" ? 'active' : ''}><a className='uk-link-reset' onClick={() => changeLanguage('tr')}>TR</a></li>
                                <li className={currentLang === "en" ? 'active' : ''}><a className='uk-link-reset' onClick={() => changeLanguage('en')}>EN</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="offcanvas-nav" data-uk-offcanvas="overlay: true; flip:true; esc-close:false;">
                        <button className="uk-offcanvas-close uk-text-large" type="button" data-uk-close></button>
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            <ul className="uk-nav uk-nav-default uk-nav-center uk-margin-auto-vertical uk-text-large">
                                <li><a href="#intro" data-uk-scroll="offset:70">Home</a></li>
                                <li><a href="#resume" data-uk-scroll="offset:70">Resume</a></li>
                                <li><a href="#skills" data-uk-scroll="offset:70">Skills</a></li>
                                <li><a href="#projects" data-uk-scroll="offset:70">Projects</a></li>
                                <li><a href="#contact" data-uk-scroll="offset:70">Contact</a></li>
                            </ul>
                            <div className="uk-flex uk-flex-center uk-flex-middle uk-light uk-hidden@m">
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="github" href="https://github.com/melihdizdar"></a></div>
                                <div className="uk-padding-small uk-padding-remove-horizontal"><a data-uk-icon="icon:codepen; ratio:0.5;" href="https://codepen.io/melihdizdar/pens/showcase"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="linkedin" href="https://www.linkedin.com/in/melihdizdar/"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="whatsapp" href="tel:+905331438293"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="twitter" href="https://twitter.com/melihdizdarr"></a></div>
                                <div className="uk-padding-small uk-padding-remove-vertical"><a data-uk-icon="instagram" href="https://www.instagram.com/melihdizdarr/"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
