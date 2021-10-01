import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ resumeData: { contact, socialMedia } }) => {
	const socialLinks = socialMedia.map((network) => {
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
					size='3x'
				/>
			</a>
		);
	});

	return (
		<Fragment>
			{contact !== null && socialMedia !== null ? (
				<footer>
					<FadeIn bottom>
						<div className='social-container'>
							<div>{socialLinks}</div>
							<div className='top-10'>
								<span className='barely-readable'>
									&copy; Copyright 2021 - Design by{' '}
								</span>
								<span className='bold'>{contact.name}</span>
							</div>
						</div>
					</FadeIn>
				</footer>
			) : null}
		</Fragment>
	);
};

export default Footer;
