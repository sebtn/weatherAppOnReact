import React, {Component} from 'react'

'use strict'
export default class WeatherMesaage extends Component {

	render() {
		let {temp, location} = this.props
		return(
			<div>
				<br />
				<h4> it is { temp } °C in { location } </h4>
			</div>
		)
	}
} 