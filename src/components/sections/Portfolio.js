import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';

const Portfolio = () => {
	return (
		<Fragment>
			{resumeData !== null ? (
				<section id='portfolio' className='portfolio'>
					<div className='portfolio-inner'>
						<h1>Portfolio Page</h1>
					</div>
				</section>
			) : null}
		</Fragment>
	);
};

export default Portfolio;
