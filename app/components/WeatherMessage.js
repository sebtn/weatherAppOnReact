import React, {Component} from 'react'

'use strict'
export default class WeatherMesaage extends Component {

	render() {
		let {temp, location} = this.props
		return(
			<div className="message-container">
				<h3> It is { temp } °C in { location } </h3>
			</div>
		)
	}
} 