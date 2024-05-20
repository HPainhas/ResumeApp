import React, { Fragment } from "react";
import CountriesApp from "../../assets/countries-app-screenshot.png";
import CurrencyConverterApp from "../../assets/currency-converter-app-screenshot.png";
import ResumeApp from "../../assets/resume-app-screenshot.png";
import DevSocializa from "../../assets/devsocializa-app-screenshot.png";
import { SiReact, SiKotlin, SiJavascript } from "react-icons/si";
import { DiAndroid, DiJava } from "react-icons/di";

const listOfRepos = [
	"currency-converter-app",
	"countries-app",
	"resume-app",
	"dev-socializa",
];

const Projects = ({ repos }) => {
	const repositories = filterReposByNames(repos, listOfRepos);

	return (
		<Fragment>
			<div className="portfolio-list">
				{repositories.map((repository) => {
					let imageSrc = "";
					let projectName = "";
					let languageIcon = "";
					let frameworkIcon = "";

					if (repository.language === "JavaScript") {
						languageIcon = (
							<SiJavascript size="2rem" color="#F7DF1E" />
						);
						frameworkIcon = <SiReact size="2rem" color="#61DBFB" />;
					} else if (repository.language === "Java") {
						languageIcon = <DiJava size="2rem" color="Orange" />;
						frameworkIcon = (
							<DiAndroid size="2rem" color="#9FC037" />
						);
					} else if (repository.language === "Kotlin") {
						languageIcon = <SiKotlin size="2rem" color="#A826E4" />;
						frameworkIcon = (
							<DiAndroid size="2rem" color="#9FC037" />
						);
					}

					if (repository.name === "dev-socializa") {
						imageSrc = DevSocializa;
						projectName = "Social Network App";
					} else if (repository.name === "resume-app") {
						imageSrc = ResumeApp;
						projectName = "Resume App";
					} else if (repository.name === "countries-app") {
						imageSrc = CountriesApp;
						projectName = "Countries App";
					} else if (repository.name === "currency-converter-app") {
						imageSrc = CurrencyConverterApp;
						projectName = "Currency Converter App";
					}

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
										<h3>{projectName}</h3>
									</a>
									<div className="left-10">
										{languageIcon}
									</div>
									<div className="left-10">
										{frameworkIcon}
									</div>
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

function filterReposByNames(repos, listOfRepos) {
	return repos.filter((repo) => listOfRepos.includes(repo.name));
}

export default Projects;
