import React, {Component} from 'react'

'use strict'
export default class WeatherMesaage extends Component {
	constructor(props) {
		super(props) 
		this.state = {}
	}

	render() {
		let {temp, location} = this.props
		return(
			<div>
				<br />
				<h4>It is { temp } °C in { location } </h4>
			</div>
		)
	}
} 