import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div
			style={{
				padding: "100px 20px",
				textAlign: "center",
				backgroundColor: "#f8f9fa",
				height: "100vh",
			}}
		>
			<h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
				404 Page Not Found
			</h1>
			<p style={{ fontSize: "24px", marginBottom: "30px" }}>
				Oops! The page you're looking for doesn't exist.
			</p>
			<Link
				to="/"
				style={{
					fontSize: "20px",
					color: "#007bff",
					textDecoration: "none",
				}}
			>
				Go back home
			</Link>
		</div>
	);
};

export default NotFound;
