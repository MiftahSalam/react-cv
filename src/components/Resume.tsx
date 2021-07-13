import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <section id="#resume" className="s-resume target-section">
                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Career</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        <div className="resume-block">
                            <div className="resume-block__header">
                                <h4 className="h3">Upwork</h4>
                                <p className="resume-block__header-meta">
                                    <span>Freelancer</span>
                                    <span className="resume-block__header-date">April 2018 - Present</span>
                                </p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                            </p>
                        </div>
                        <div className="resume-block">
                            <div className="resume-block__header">
                                <h4 className="h3">SKM</h4>
                                <p className="resume-block__header-meta">
                                    <span>Software Engineer</span>
                                    <span className="resume-block__header-date">March 2012 - Present</span>
                                </p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                            </p>
                        </div>
                        <div className="resume-block">
                            <div className="resume-block__header">
                                <h4 className="h3">Facebook</h4>
                                <p className="resume-block__header-meta">
                                    <span>Software Engineer</span>
                                    <span className="resume-block__header-date">March 2012 - March 2016</span>
                                </p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Education</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        <div className="resume-block">
                            <div className="resume-block__header">
                                <h4 className="h3">Bandung Institute of Technology</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Bachelor of Physics</span>
                                        <span className="resume-block__header-date">July 2007 - October 2011</span>
                                    </p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Skills</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        <div className="resume-block">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                            </p>
                            <ul className="skill-bars-fat">
                                <li>
                                    <div className="progress percent70"></div>
                                    <strong>C</strong>
                                </li>
                                <li>
                                    <div className="progress percent70"></div>
                                    <strong>C++</strong>
                                </li>
                                <li>
                                    <div className="progress percent80"></div>
                                    <strong>Qt SDK</strong>
                                </li>
                                <li>
                                    <div className="progress percent40"></div>
                                    <strong>Javascript</strong>
                                </li>
                                <li>
                                    <div className="progress percent40"></div>
                                    <strong>Express js</strong>
                                </li>
                                <li>
                                    <div className="progress percent40"></div>
                                    <strong>HTML</strong>
                                </li>
                                <li>
                                    <div className="progress percent50"></div>
                                    <strong>Python</strong>
                                </li>
                                <li>
                                    <div className="progress percent50"></div>
                                    <strong>Django</strong>
                                </li>
                                <li>
                                    <div className="progress percent60"></div>
                                    <strong>Linux</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Resume;