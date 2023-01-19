import React, { Fragment } from "react";
import CountriesApp from "../../assets/countries-app.png";
import ResumeApp from "../../assets/resume-app.jpg";
import DevSocializa from "../../assets/devsocializa-app.jpg";
import PokemonApp from "../../assets/pokemon-app.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faJsSquare,
	faJava,
	faReact,
	faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Projects = ({ repos }) => {
	return (
		<Fragment>
			<div className="portfolio-list">
				{repos.map((repository) => {
					let imageSrc = "";
					let languageColor = "";
					let frameworkColor = "";
					let iconLanguageSrc = "";
					let iconFrameworkSrc = "";

					if (repository.language === "JavaScript") {
						iconLanguageSrc = faJsSquare;
						iconFrameworkSrc = faReact;
						languageColor = "#F7DF1E";
						frameworkColor = "#61DBFB";
					} else if (repository.language === "Java") {
						iconLanguageSrc = faJava;
						iconFrameworkSrc = faAndroid;
						languageColor = "Orange";
						frameworkColor = "#9FC037";
					}

					if (repository.name === "dev-socializa-app")
						imageSrc = DevSocializa;
					else if (repository.name === "resume-app")
						imageSrc = ResumeApp;
					else if (repository.name === "pokemon-app")
						imageSrc = PokemonApp;
					else if (repository.name === "countries-app")
						imageSrc = CountriesApp;

					return (
						<div
							key={repository.id}
							className="row"
							data-aos="fade-right"
						>
							<div className="column">
								<a
									href={repository.html_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={imageSrc} alt="Repo Preview" />
								</a>
							</div>
							<div className="column">
								<div className="repo-name">
									<a
										href={repository.html_url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h3>{repository.name}</h3>
									</a>
									<FontAwesomeIcon
										icon={iconLanguageSrc}
										size="2x"
										color={languageColor}
										className="left-20"
									/>
									<FontAwesomeIcon
										icon={iconFrameworkSrc}
										size="2x"
										color={frameworkColor}
										className="left-20"
									/>
								</div>
								<p>{repository.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};

export default Projects;
