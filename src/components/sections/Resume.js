import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';

const Resume = () => {
    return (
        <Fragment>
            {resumeData !== null ? (
                <section id='resume' className='section-container'></section>
            ) : null}
        </Fragment>
    );
};

export default Resume;
