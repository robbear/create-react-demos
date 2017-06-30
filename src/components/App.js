import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
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
				<Switch>
  				<Route exact path="/" component={Home}/>
  				<Route path="/profile/" user="me" component={Profile} />
  				<Route path="/profile/:user" component={Profile} />
				</Switch>
			</div>
		);
	}
}
