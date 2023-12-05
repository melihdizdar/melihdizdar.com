"use client";
import React from 'react';

export default function Skills() {
    return(
        <section id="skills" data-uk-height-viewport="offset-top:true;">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex-center uk-width-1-2 uk-margin-auto uk-grid-collapse" data-uk-grid>
                        <div className="uk-width-1-1 uk-text-center uk-text-large">
                            Skills
                        </div>
                    </div>
                </div>
            </div>
            {/*Mobile*/}
            <div className="uk-section uk-padding-remove-top uk-visible uk-hidden@m">
                <div className="uk-container">
                    <div className="uk-grid-collapse uk-flex-center uk-width-1-1 uk-margin-auto" data-uk-grid>
                        <div className="uk-width-1-1 uk-text-large uk-flex-center uk-margin-auto uk-grid-collapse uk-text-center uk-child-width-1-1" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay:300;">
                            <div>
                                <div className="uk-background-primary uk-tile uk-tile-small">
                                    <div>Markup Language</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:html;" className="uk-preserve" uk-tooltip="title: HTML; pos: bottom"></div>
                                        <div data-uk-icon="icon:css;" className="uk-preserve" uk-tooltip="title: CSS; pos: bottom"></div>
                                        <div data-uk-icon="icon:sass;" className="uk-preserve" uk-tooltip="title: SASS; pos: bottom"></div>
                                    </div>
                                </div>
                                <div className="uk-background-muted uk-tile uk-tile-small">
                                    <div>Software Language</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:javascript;" className="uk-preserve" uk-tooltip="title: JavaScript; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-background-primary uk-tile uk-tile-small">
                                    <div>UI Framework</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:tailwind;" className="uk-preserve" uk-tooltip="title: Tailwind; pos: bottom"></div>
                                        <div data-uk-icon="icon:uikitt;" className="uk-preserve" uk-tooltip="title: UIKit; pos: bottom"></div>
                                        <div data-uk-icon="icon:bootstrap;" className="uk-preserve" uk-tooltip="title: Bootstrap; pos: bottom"></div>
                                        <div data-uk-icon="icon:prime;ratio:0.015;" className="uk-preserve" uk-tooltip="title: Prime React; pos: bottom"></div>
                                    </div>
                                </div>
                                <div className="uk-background-muted uk-tile uk-tile-small">
                                    <div>JS Framework</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:react;" className="uk-preserve" uk-tooltip="title: React; pos: bottom"></div>
                                        <div data-uk-icon="icon:next;ratio:0.06;" className="uk-preserve" uk-tooltip="title: Next.js; pos: bottom"></div>
                                        <div data-uk-icon="icon:redux;ratio:0.015;" className="uk-preserve" uk-tooltip="title: React Redux; pos: bottom"></div>
                                        <div data-uk-icon="icon:jquery;ratio:0.4" className="uk-preserve" uk-tooltip="title: Jquery; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-background-primary uk-tile uk-tile-small">
                                    <div>Version Control</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:git;" className="uk-preserve" uk-tooltip="title: Git; pos: bottom"></div>
                                        <div data-uk-icon="icon:githubb;" className="uk-preserve" uk-tooltip="title: GitHub; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-background-muted uk-tile uk-tile-small">
                                    <div>Code Editor</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:vscode;" className="uk-preserve" uk-tooltip="title: Visual Studio Code; pos: bottom"></div>
                                        <div data-uk-icon="icon:vs;" className="uk-preserve" uk-tooltip="title: Visual Studio; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Desktop*/}
            <div className="uk-section uk-padding-remove-top uk-visible@m">
                <div className="uk-container">
                    <div className="uk-grid-collapse uk-flex-center uk-width-1-1 uk-margin-auto" data-uk-grid>
                        <div className="uk-width-1-1 uk-text-large uk-flex-center uk-margin-auto uk-grid-collapse uk-text-center uk-child-width-1-2" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay:300;">
                            <div>
                                <div className="uk-background-primary uk-tile uk-tile-small">
                                    <div>Markup Language</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:html;" className="uk-preserve" uk-tooltip="title: HTML; pos: bottom"></div>
                                        <div data-uk-icon="icon:css;" className="uk-preserve" uk-tooltip="title: CSS; pos: bottom"></div>
                                        <div data-uk-icon="icon:sass;" className="uk-preserve" uk-tooltip="title: SASS; pos: bottom"></div>
                                    </div>
                                </div>
                                <div className="uk-background-muted uk-tile uk-tile-small">
                                    <div>UI Framework</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:tailwind;" className="uk-preserve" uk-tooltip="title: Tailwind; pos: bottom"></div>
                                        <div data-uk-icon="icon:uikitt;" className="uk-preserve" uk-tooltip="title: UIKit; pos: bottom"></div>
                                        <div data-uk-icon="icon:bootstrap;" className="uk-preserve" uk-tooltip="title: Bootstrap; pos: bottom"></div>
                                        <div data-uk-icon="icon:prime;ratio:0.015;" className="uk-preserve" uk-tooltip="title: Prime React; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-background-muted uk-tile uk-tile-small">
                                    <div>Software Language</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:javascript;" className="uk-preserve" uk-tooltip="title: JavaScript; pos: bottom"></div>
                                    </div>
                                </div>
                                <div className="uk-background-primary uk-tile uk-tile-small">
                                    <div>JS Framework</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:react;" className="uk-preserve" uk-tooltip="title: React; pos: bottom"></div>
                                        <div data-uk-icon="icon:next;ratio:0.06;" className="uk-preserve" uk-tooltip="title: Next.js; pos: bottom"></div>
                                        <div data-uk-icon="icon:redux;ratio:0.015;" className="uk-preserve" uk-tooltip="title: React Redux; pos: bottom"></div>
                                        <div data-uk-icon="icon:jquery;ratio:0.4" className="uk-preserve" uk-tooltip="title: Jquery; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-background-primary uk-tile uk-tile-small">
                                    <div>Version Control</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:git;" className="uk-preserve" uk-tooltip="title: Git; pos: bottom"></div>
                                        <div data-uk-icon="icon:githubb;" className="uk-preserve" uk-tooltip="title: GitHub; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-background-muted uk-tile uk-tile-small">
                                    <div>Code Editor</div>
                                    <div className='uk-margin-small-top uk-flex uk-flex-center uk-flex-middle' style={{gap:'15px',}}>
                                        <div data-uk-icon="icon:vscode;" className="uk-preserve" uk-tooltip="title: Visual Studio Code; pos: bottom"></div>
                                        <div data-uk-icon="icon:vs;" className="uk-preserve" uk-tooltip="title: Visual Studio; pos: bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex-center uk-width-1-2 uk-margin-auto uk-grid-collapse" data-uk-grid>
                        <div className="uk-width-1-1 uk-text-center uk-text-large uk-text-uppercase" data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                            <a data-uk-icon="chevron-down" href="#projects" className="uk-dark" data-uk-scroll="offset:70"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
