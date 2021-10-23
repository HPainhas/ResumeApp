import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';

const Resume = () => {
    return (
        <Fragment>
            {resumeData !== null ? (
                <section id='resume' className='section-container'>
                    <div className='resume'>
                        <div className='container'>
                            <div className='position-relative'>
                                <div className='title'>
                                    <span>Resume</span>
                                    <h3>My Background</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </Fragment>
    );
};

export default Resume;
