import React, {Component} from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'

'use strict'
export default class Weather extends Component {
	constructor(props) {
		super(props) 
		this.state = this.initialState()
	}

/*----------------------------------------------------------*/
	initialState = () => {
		return {
			location: 'miami',
			temp: 88
		} 
	}

/*----------------------------------------------------------*/
	/*The handleSearch will be RHT in the weatherForm
	component */
	handleSearch =  (location) => {
		this.setState({ location: location, temp: 25 })
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