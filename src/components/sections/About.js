import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';

const About = () => {
	return (
		<Fragment>
			{resumeData !== null ? (
				<section id='about' className='about'>
					<div className='about-inner'>
						<h1>About Page</h1>
					</div>
				</section>
			) : null}
		</Fragment>
	);
};

export default About;
