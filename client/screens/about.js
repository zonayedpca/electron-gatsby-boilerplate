import React from "react";

import Layout from "../components/Layout";

const About = () => {
	return (
		<Layout>
			<div className="about" style={{ padding: 25, textAlign: "center" }}>
				<p>
					Simple Minimal Electron Gatsby Boilerplate. Create new BrowserWindow
					easily and speed up your development experience. Also included
					Automatic Linting, Redux, TravisCI Configuration and GitHub Release.
				</p>
			</div>
		</Layout>
	);
};

export default About;
