import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1>React App</h1>
				<nav>
					<NavLink exact activeClassName="active" to="/">Home</NavLink>
					<NavLink exact activeClassName="active" to="/profile">Me</NavLink>
					<NavLink activeClassName="active" to="/profile/john">John</NavLink>
					<NavLink activeClassName="active" to="/demos/listbox">ListBox</NavLink>
				</nav>
			</header>
		);
	}
}
