import React from "react";

import avatarImage from '../assets/images/avatars/549736_452815301419013_1076128621_n.jpg';
// const pdfCV  = require(process.env.PUBLIC_URL+"/My_CV.pdf");

class About extends React.Component {
    render() {
        return (
            <section id="about" className="s-about target-section">
                <div className="row">
                    <div className="column large-3 tab-12">
                        <img className="s-about__pic" src={avatarImage} alt="About"/>
                    </div>
                    <div className="column large-9 tab-12 s-about__content">
                        <h3>About Me</h3>
                        <p>
                            I have more than five years of experience in desktop software development and embedded software development. 
                            My current desktop software development areas are data processing, UI application, 
                            inter-computer communication, and system control. 
                            I have experience in creating big and complex C++ base projects.
                            <br />
                            <br />
                            For desktop, mostly I used Qt SDK for build application with Linux platform and 
                            PostgreSQL for database handling. I do not mind if I use another IDE and platform, 
                            but these are my favorite.
                            <br />
                            <br />
                            Strong C and C++ programming skills, including low-level performance optimizations and memory management. 
                            I not only know how to make an application work, but also know how to make it work fast and smoothly.
                            <br />
                            <br />
                            Besides desktop software development, I also love to do web development, especially on the backend. 
                            I have not created an actual project in this area, 
                            but I have enough skill in backend stacks such as node.js (express) and python (Django).
                            <br />
                            <br />
                            I am a fast learner, honest, passionate about IT-related jobs, 
                            love to learn the latest technology.
                        </p>
                        <hr />
                        <div className="row s-about__content-bottom">
                            <div className="column w-1000-stack">
                                <h3>Contact Details</h3>
                                <p>
                                    Miftah Salam<br />
                                    MEL A11, Cilame, West Bandung<br />
                                    <a href="mailto:#0">salam.miftah@gmail.com</a>
                                </p>
                            </div>
                            <div className="column w-1000-stack">
                                <a href="/assets/My_CV.pdf" download="My_CV.pdf" className="btn btn--download">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        style={{
                                            fill: 'rgba(0,0,0,1)'
                                        }}
                                        >
                                            <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path>
                                            <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path>
                                        </svg>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;