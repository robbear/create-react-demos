import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import ListBoxDemo from '../routes/listboxdemo';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Route exact path="/" component={Home}/>
				<Route exact path="/profile/" component={Profile} />
				<Route path="/profile/:user" component={Profile} />
				<Route exact path="/demos/listbox" component={ListBoxDemo} />
			</div>
		);
	}
}
