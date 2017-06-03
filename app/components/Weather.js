import React, { Component } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import ErrorBox from './ErrorBox'
import { getTemp } from '../api/OpenWeatherMap'

'use strict'
export default class Weather extends Component {
	constructor(props) {
		super(props) 
		this.state = this.initialState()
	}

/*----------------------------------------------------------*/
	initialState = () => {
		return {
				isLoading: false,
				// location: ' ',
				// temp: ' ',
		} 
	}

/*----------------------------------------------------------*/
	/*The handleSearch will be RHT in the weatherForm
	component */
	handleSearch = (location) => {
		// Note setState in different stages
		this.setState({ isLoading: true, errorMessage: undefined})
		/*let that = this can be avoided
		 by arrow function's use of implicit binding*/
		getTemp(location).then( (temp) => {
			this.setState({ location: location, temp: temp, isLoading: false })
		/*Error handling callback*/
		}, (e) => {
			this.setState({isLoading: false, errorMessage: e.message})		
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
			return <WeatherMessage temp={temp} location={location}  />
		} 
	} 

/*----------------------------------------------------------*/
	renderError = () => {
		let {isLoading, location, temp, errorMessage } = this.state
		/*Error went from undefined to string */
		if(typeof errorMessage === 'string') 
			return( <ErrorBox /> )
	}

/*----------------------------------------------------------*/
	render() {
		return(
			<div className="weather-container">
				<h1 className="text-center">Get The Weather</h1>
				<WeatherForm onSearch={ this.handleSearch } />
				{this.renderMessage()}
				{this.renderError()}
			</div>
		)
	}
} 