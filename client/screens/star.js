import React from "react";
import Layout from "../components/Layout";

const Star = () => {
	return (
		<Layout>
			<div className="star" style={{ textAlign: "center" }}>
				<h3>Star this Project</h3>
				<div>
					<p>
						Star{" "}
						<a
							style={{
								display: "inline-block",
								backgroundColor: "#fff",
								padding: "2px 5px",
								textDecoration: "none",
								color: "#333",
								borderRadius: 4,
							}}
							href="https://github.com/zonayedpca/electron-gatsby-boilerplate"
						>
							This Project
						</a>
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Star;
