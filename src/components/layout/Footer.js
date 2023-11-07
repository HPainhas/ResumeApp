import React, { Fragment } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/fontawesome-free-solid";

const Footer = () => {
	return (
		<Fragment>
			<footer>
				<FadeIn bottom>
					<section id="footer" className="section-container">
						<div className="scroll-up">
							<a className="smooth-scroll" href="#home">
								<FontAwesomeIcon icon={faChevronUp} size="2x" />
							</a>
						</div>
						<div className="social-container">
							<div className="top-10">
								<span className="barely-readable">
									&copy; 2023 by{" "}
								</span>
								<span className="full-name">
									Henrique Painhas
								</span>
								. All rights reserved.
							</div>
						</div>
					</section>
				</FadeIn>
			</footer>
		</Fragment>
	);
};

export default Footer;
