import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1>React App</h1>
				<nav>
					<Link className="active" to="/">Home</Link>
					<Link className="active" to="/profile">Me</Link>
					<Link className="active" to="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
