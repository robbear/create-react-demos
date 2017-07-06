import React, { Component } from 'react';
import './style.css';

export default class ElementContainer extends Component {

	render() {
		return (
			<div className="element_container">
				<h1>{this.props.title}</h1>
				<h3>{this.props.description}</h3>
				{this.props.children}
			</div>
		);
	}
}
