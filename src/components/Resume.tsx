import React from 'react';

import { 
    resumeCareerItems,
    resumeEducationItems,
    resumeSkillItems,
} from '../data';

class Resume extends React.Component {
    render() {
        return (
            <section id="resume" className="s-resume target-section">
                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Career</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        {resumeCareerItems.map(item => (
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">{item.companyName}</h4>
                                    <p className="resume-block__header-meta">
                                        <span>{item.position}</span>
                                        <span className="resume-block__header-date">{item.duration}</span>
                                    </p>
                                </div>
                                <p>{item.jobDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Education</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        {resumeEducationItems.map(item => (
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">{item.schoolName}</h4>
                                    <p className="resume-block__header-meta">
                                        <span>{item.mayor}</span>
                                        <span className="resume-block__header-date">{item.duration}</span>
                                    </p>
                                </div>
                                <p>{item.eduDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Skills</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        <p>{resumeSkillItems.description}</p>
                        <ul className="skill-bars-fat">
                        {resumeSkillItems.skillSet.map(item => (
                            <li className="resume-block">
                                <div className={`progress percent${item.percentage}`}></div>
                                <strong>{item.skill}</strong>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Resume;