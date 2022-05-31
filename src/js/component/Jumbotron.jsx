import React from "react";

function Jumbotron() {
	return (
		<div className="jumbotron container">
			<h1 className="display-4">The story goes on</h1>
			<p className="lead">
				Real Madrid is crowned champion of the Champions League for the
				fourteenth time, defeating Liverpool by one goal to nil, taking
				twice as many titles as its closest rival in the European
				competition, AC Milan, with seven titles in said competition.
			</p>
			<hr className="my-4" />
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="https://www.youtube.com/watch?v=lIMokbMWz9o"
					role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
export default Jumbotron;
