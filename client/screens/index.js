import React from "react";

import Layout from "../components/Layout";

import gatsbyLogo from "../assets/images/gatsby.svg";
import electronLogo from "../assets/images/electron.svg";
import Counter from "../components/Counter";

export default () => {
	return (
		<Layout>
			<div style={{ textAlign: "center" }}>
				<div>
					<img style={{ height: 60 }} alt="Gatsby Logo" src={gatsbyLogo} />
				</div>
				<div style={{ fontSize: 30, fontWeight: "bolder", lineHeight: "50px" }}>
					➕
				</div>
				<div>
					<img style={{ height: 45 }} alt="Electron Logo" src={electronLogo} />
				</div>
				<Counter />
				<p>Open Up file something</p>
			</div>
		</Layout>
	);
};
