import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';
import {
    SiPerl,
    SiJava,
    SiJavascript,
    SiMysql,
    SiReact,
    SiRedux,
    SiGit,
    SiFirebase,
} from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';
import { BiCodeAlt } from 'react-icons/bi';

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
                                    <h3>
                                        Put resume's dictionary definition here
                                    </h3>
                                </div>
                                <div className='row education'>
                                    <div className='three columns header-col'>
                                        <h1>
                                            <span>Education</span>
                                        </h1>
                                    </div>
                                    <div className='nine columns main-col'>
                                        <div className='row item'>
                                            <div className='twelve columns'>
                                                <div>
                                                    <h3>
                                                        The Ohio State
                                                        University
                                                    </h3>
                                                    <p className='degree'>
                                                        B.S. in Computer and
                                                        Information Sciences
                                                        <span>•</span>
                                                        <em className='date'>
                                                            May 2020
                                                        </em>
                                                    </p>
                                                    <p className='focus'>
                                                        Focus
                                                        <span>:</span>
                                                        <span
                                                            style={{
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            Software Engineering
                                                        </span>
                                                    </p>
                                                    <p className='deans'>
                                                        Member of the Dean's
                                                        List
                                                        <span>:</span>
                                                        <span
                                                            style={{
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            5 times
                                                        </span>
                                                    </p>
                                                    <p className='gpa'>
                                                        GPA
                                                        <span>:</span>
                                                        <span
                                                            style={{
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            3.28
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row work'>
                                    <div className='three columns header-col'>
                                        <h1>
                                            <span>Work Experience</span>
                                        </h1>
                                    </div>
                                    <div className='nine columns main-col'>
                                        <div className='row item'>
                                            <div className='twelve columns'>
                                                <div>
                                                    <h3>
                                                        eRetailing Associates
                                                    </h3>
                                                    <p className='work-info'>
                                                        Software Engineer /
                                                        Android Engineer
                                                        <span>•</span>
                                                        <em className='date'>
                                                            May 2019 - Present
                                                        </em>
                                                    </p>
                                                    <p className='work-info'>
                                                        My tasks on the
                                                        e-commerce team include:
                                                        continue to improve the
                                                        in-house Android
                                                        application I developed
                                                        which monitors all of
                                                        our order processing
                                                        workflow, handles the
                                                        inventory system
                                                        accuracy, and allows the
                                                        production team to
                                                        receive inbound goods
                                                        efficiently; writing
                                                        software to enhance our
                                                        inventory management
                                                        system and handle
                                                        errors; help with the
                                                        design of the new
                                                        warehouse labeling
                                                        system; among other
                                                        tasks.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3
                                                        style={{
                                                            display: 'inline',
                                                            marginRight: '10px',
                                                        }}
                                                    >
                                                        Vyra
                                                    </h3>
                                                    <span>
                                                        (tentative startup)
                                                    </span>
                                                    <p className='work-info'>
                                                        Co-Found and CTO
                                                        <span>•</span>
                                                        <em className='date'>
                                                            January 2020 -
                                                            December 2020
                                                        </em>
                                                    </p>
                                                    <p>
                                                        Let’s face it. Typical
                                                        coding challenges and
                                                        white board questions
                                                        just aren’t cutting it
                                                        anymore. We need tools
                                                        that allow companies to
                                                        assess candidates on
                                                        skills that matter.
                                                        Introducing Vyra. My two
                                                        friends and I tried to
                                                        build a startup that
                                                        would allow tech
                                                        companies to interview
                                                        candidates through real
                                                        work scenarios. The
                                                        platform included a
                                                        built-in calendar,
                                                        dashboard, candidate
                                                        management tools, real
                                                        time screen sharing,
                                                        real time note taking,
                                                        among other features.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row skill'>
                                    <div className='three columns header-col'>
                                        <h1>
                                            <span>Technical Skills</span>
                                        </h1>
                                    </div>
                                    <div className='nine columns main-col'>
                                        <div className='row item'>
                                            <div className='twelve columns'>
                                                <div className='technical-skills'>
                                                    {resumeData.technicalSkills.map(
                                                        skill => {
                                                            let icon = null;

                                                            switch (
                                                                skill.name
                                                            ) {
                                                                case 'JavaScript':
                                                                    icon = (
                                                                        <SiJavascript
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Java':
                                                                    icon = (
                                                                        <SiJava
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Perl':
                                                                    icon = (
                                                                        <SiPerl
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'SQL':
                                                                    icon = (
                                                                        <SiMysql
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Android':
                                                                    icon = (
                                                                        <DiAndroid
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'React':
                                                                    icon = (
                                                                        <SiReact
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Redux':
                                                                    icon = (
                                                                        <SiRedux
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Git':
                                                                    icon = (
                                                                        <SiGit
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Firebase':
                                                                    icon = (
                                                                        <SiFirebase
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                default:
                                                                    icon = (
                                                                        <BiCodeAlt
                                                                            size='2rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                            }

                                                            return (
                                                                <div
                                                                    key={
                                                                        skill.name
                                                                    }
                                                                    className='tech-skill'
                                                                >
                                                                    {icon}
                                                                    <p>
                                                                        {
                                                                            skill.name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
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

export default Resume;
