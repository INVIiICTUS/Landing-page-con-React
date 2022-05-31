import React from "react";
function Footer() {
	return (
		<div>
			<footer
				className="footer  bg-dark container-fluid d-flex justify-content-center align-items-center"
				/* style="height: 150px" */
				style={{ height: "150px" }}>
				<p className="text-white fw-bold">
					Copyright © Your Website 2022
				</p>
			</footer>
		</div>
	);
}
export default Footer;
