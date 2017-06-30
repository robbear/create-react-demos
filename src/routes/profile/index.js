import React, { Component } from 'react';
import './style.css';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: Date.now(),
      count: 10,
      user: props.match.params.user ? props.match.params.user : "me"
    };
  }

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	render() {
		return (
			<div className="profile">
				<h1>Profile: {this.state.user}</h1>
				<p>This is the user profile for a user named {this.state.user}.</p>

				<div>Current time: {new Date(this.state.time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {this.state.count} times.
				</p>
			</div>
		);
	}
}
