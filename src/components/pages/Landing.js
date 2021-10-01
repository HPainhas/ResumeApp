import React, { Fragment } from 'react';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Portfolio from '../sections/Portfolio';
import resumeData from '../../assets/resume.json';

const Landing = () => {
	return (
		<Fragment>
			{resumeData !== null ? (
				<section id='home' className='landing'>
					<div className='dark-overlay'>
						<div className='landing-inner'>
							<h1>Landing Page</h1>
						</div>
					</div>
				</section>
			) : null}
			<About />
			<Portfolio />
			<Resume />
		</Fragment>
	);
};

export default Landing;
