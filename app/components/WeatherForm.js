import React, {Component} from 'react'

'use strict'
export default class WeatherForm extends Component {
	constructor(props) {
		super(props) 
		this.state = {}
	}

	render() {
		return(
			<div>
				<form action="">
					<input type="text" placeholder="Enter city name"></input><br/>
					<input type="submit" value="Get Weather"></input>
				</form>
			</div>
		)
	}
} 