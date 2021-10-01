import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';

const Resume = () => {
	return (
		<Fragment>
			{resumeData !== null ? (
				<section id='resume' className='resume'>
					<div className='resume-inner'>
						<h1>Resume Page</h1>
					</div>
				</section>
			) : null}
		</Fragment>
	);
};

export default Resume;
