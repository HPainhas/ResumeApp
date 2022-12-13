import React, { Fragment } from "react";
import resumeData from "../../assets/resume.json";
import Skills from "../layout/Skills";

const Skill = () => {
	return (
		<Fragment>
			{resumeData !== null ? (
				<section id="skill" className="section-container">
					<div className="skills">
						<div className="container">
							<div className="skills-inner">
								<div className="left">
									<div className="title">
										<h3>
											I have high skills in developing and
											programming
										</h3>
									</div>
									<div className="text">
										<p>
											Currently, I'm working as a Software
											Engineer at Toast, the all-in-1
											restaurant POS software company,
											soaking up as much knowledge and
											practice as I can in an attempt to
											get better at my role and advance in
											my career. My main task on the
											payments experience team is to
											continue to improve, maintain, and
											contribute to the payments workflow
											in our POS app.
										</p>
									</div>
								</div>
								<div className="right">
									<div className="skill-progress">
										<Skills
											skills={
												resumeData.developmentSkills
											}
										/>
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

export default Skill;
