import React, { Component } from "react";
import "/workspace/TicTacToe/src/styles/Announcement.scss";
import PropTypes from "prop-types";

export default class Announcement extends Component {
	render() {
		return (
			<div className={this.props.winner ? "visible" : "hidden"}>
				<h2>Winner</h2>
			</div>
		);
	}
}
Announcement.propTypes = {
	winner: PropTypes.any
};
