import React, {Component} from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import {getTemp} from '../api/OpenWeatherMap'

'use strict'
export default class Weather extends Component {
	constructor(props) {
		super(props) 
		this.state = this.initialState()

		/*---------Bindings--------*/

	}

/*----------------------------------------------------------*/
	initialState = () => {
		return {
			isLoading: false,
			location: ' ',
			temp: ' '
		} 
	}

/*----------------------------------------------------------*/
	/*The handleSearch will be RHT in the weatherForm
	component */
	handleSearch = (location) => {
		// Note setState in different stages
		this.setState({isLoading: true})
		/*let that = this can be avoided
		 by arrow function use of implicit binding*/
		getTemp(location).then( (temp) => {
			this.setState({ location: location, temp: temp, isLoading: false })
		}, (errorMessage) => {
			alert('City not found ', errorMessage)	
			this.setState({isLoading: false})		
		})
	}
/*----------------------------------------------------------*/
/* Can be called as a js object directly 
	{this.renderMessage} */
	renderMessage = () => {
		let {isLoading, location, temp } = this.state
		if (isLoading) {
			return <h3>Fetching...</h3>
		} else if (temp && location) {
			return <WeatherMessage temp={ temp } location={ location } />
		}
	} 

/*----------------------------------------------------------*/
	render() {
		return(
			<div>
				<h3>GET WEATHER</h3>
				<WeatherForm onSearch={ this.handleSearch }></WeatherForm>
				{ this.renderMessage() }
			</div>
		)
	}
} 