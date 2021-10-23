import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';
import HenriqueProfilePic from '../../assets/Henrique_resume_picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/fontawesome-free-solid';

const About = () => {
    return (
        <Fragment>
            {resumeData !== null ? (
                <section id='about' className='section-container'>
                    <div className='about'>
                        <div className='container'>
                            <div className='about-inner'>
                                <div className='left'>
                                    <div className='image'>
                                        <img
                                            src={HenriqueProfilePic}
                                            alt='placeholder'
                                        />
                                        <div
                                            className='main'
                                            style={{
                                                backgroundImage: `url(${HenriqueProfilePic})`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='title'>
                                        <span>About Me</span>
                                        <h3>{resumeData.bioHeader}</h3>
                                    </div>
                                    <div className='text'>
                                        <p>{resumeData.bio}</p>
                                    </div>
                                    <div className='button'>
                                        <a
                                            href='/HPainhas_Resume.pdf'
                                            target='_blank'
                                            rel='noreferrer'
                                            download
                                        >
                                            <FontAwesomeIcon
                                                icon={faFilePdf}
                                                size='1x'
                                                className='icon'
                                            />
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </Fragment>
    );
};

export default About;
