import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';

const Portfolio = () => {
    return (
        <Fragment>
            {resumeData !== null ? (
                <section id='portfolio' className='section-container'></section>
            ) : null}
        </Fragment>
    );
};

export default Portfolio;
