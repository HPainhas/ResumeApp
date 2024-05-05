import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/pages/Landing";
import NotFound from "./components/layout/NotFound";
import MobileNavbar from "./components/layout/MobileNavbar";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
	AOS.init({
		delay: 200,
		duration: 1000,
		once: false,
		mirror: true,
	});
	AOS.refresh();

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar />
							<MobileNavbar />
							<Landing />
							<Footer />
						</>
					}
				/>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
