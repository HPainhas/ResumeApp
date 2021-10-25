import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ resumeData: { contact, socialMedia } }) => {
    const socialLinks = socialMedia.map(network => {
        return (
            <a
                key={network.name}
                href={network.url}
                target='_blank'
                rel='noreferrer'
                className={network.classname}
            >
                <FontAwesomeIcon
                    icon={network.name === 'LinkedIn' ? faLinkedin : faGithub}
                    size='2x'
                />
            </a>
        );
    });

    return (
        <Fragment>
            {contact !== null && socialMedia !== null ? (
                <footer>
                    <FadeIn bottom>
                        <section id='footer' className='section-container'>
                            <div className='scroll-up'>
                                <a className='smooth-scroll' href='#home'>
                                    <FontAwesomeIcon
                                        icon={faChevronUp}
                                        size='2x'
                                    />
                                </a>
                            </div>
                            <div className='social-container'>
                                {/* <div>{socialLinks}</div> */}
                                <div className='top-10'>
                                    <span className='barely-readable'>
                                        &copy; 2021 by{' '}
                                    </span>
                                    <span className='full-name'>
                                        {contact.name}
                                    </span>
                                    . All rights reserved.
                                </div>
                            </div>
                        </section>
                    </FadeIn>
                </footer>
            ) : null}
        </Fragment>
    );
};

export default Footer;
