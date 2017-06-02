import React, {Component} from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import {getTemp} from '../api/OpenWeatherMap'

'use strict'
export default class Weather extends Component {
	constructor(props) {
		super(props) 
		this.state = {}

		/*---------Bindings--------*/

	}

/*----------------------------------------------------------*/
	initialState = () => {
		return {
			location: 'Here',
			temp: null
		} 
	}

/*----------------------------------------------------------*/
	/*The handleSearch will be RHT in the weatherForm
	component */
	handleSearch = (location) => {
		/*let that = this can be avoided
		 by arrow function use of implicit binding*/
		getTemp(location).then( (temp) => {
			this.setState({ 
				location: location, temp: temp 
			})
		}, (errorMessage) => {
			alert('error ', errorMessage)			
		})

	}

/*----------------------------------------------------------*/
	render() {
		let {location, temp} = this.state
		return(
			<div>
				<h3>GET WEATHER</h3>
				<WeatherForm onSearch={ this.handleSearch }></WeatherForm>
				<WeatherMessage temp={ temp } location={ location } />
			</div>
		)
	}
} 