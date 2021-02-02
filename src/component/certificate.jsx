import React from "react";

import myImage from "../img/certificate.jpg";
import PropTypes from "prop-types";

export default class Certificate extends React.Component {
	render() {
		return (
			<div
				id="certificate-container"
				className="content-containers container text-center mt-5">
				<h1 id="Certificate" className={this.props.bounceLeft}>
					Certificate
				</h1>


				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden rounded">
						<img
							className={"img-fluid rounded float-left" + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>

					</div>


	
                    <div className="col-12 col-lg-6 hidden rounded">
						<img
							className={"img-fluid rounded float-right" + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>

					</div>

				</div>
			</div>
		);
	}
}

Certificate.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
