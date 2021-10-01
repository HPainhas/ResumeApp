import React, { Fragment, useEffect } from 'react';
import logo from '../../assets/HPainhas_logo_medium.png';
import $ from 'jquery';

const Navbar = () => {
	useEffect(() => {
		$(function () {
			$(window).on('scroll', function () {
				if ($(window).scrollTop() > 56) {
					$('.navbar').addClass('bg-dark');
				} else {
					$('.navbar').removeClass('bg-dark');
				}
			});
		});
	}, []);

	return (
		<Fragment>
			<nav className='navbar'>
				<h1>
					<a href='/'>
						<img src={logo} alt='HPainhas Logo' />
					</a>
				</h1>
				<ul>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#portfolio'>Portfolio</a>
					</li>
					<li>
						<a href='#resume'>Resume</a>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default Navbar;
