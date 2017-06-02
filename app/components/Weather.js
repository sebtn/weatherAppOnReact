import React, {Component} from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'

'use strict'
export default class Weather extends Component {
	constructor(props) {
		super(props) 
		this.state = {}
	}

	render() {
		return(
			<div>
				<h3>GET WEATHER</h3>
				<WeatherForm></WeatherForm>
				<WeatherMessage></WeatherMessage>
			</div>
		)
	}
} 