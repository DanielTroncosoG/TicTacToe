import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResetButton extends Component {
	render() {
		return <button onClick={this.props.reset}>Reset</button>;
	}
}
ResetButton.propTypes = {
	reset: PropTypes.any
};
