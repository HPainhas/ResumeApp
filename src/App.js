import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import resumeData from './assets/resume.json';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/pages/Landing';
import NotFound from './components/layout/NotFound';

import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route component={NotFound} />
				</Switch>
				<Footer resumeData={resumeData} />
			</Fragment>
		</Router>
	);
};

export default App;
