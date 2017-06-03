import React, { Component } from 'react'

'use strict'
export default class WeatherForm extends Component {
	constructor(props) {
		super(props) 
		this.state = {}
	}

/*----------------------------------------------------------*/
onFormSubmit = (event) => {
		event.preventDefault()
		let location = this.refs.location.value
		if(location.length > 0) {
			this.refs.location.value = ' '
			/* onSearch will be fired up to the parent,
			will be LH term on the component call 
			made by the parent Weather */
			this.props.onSearch(location)
		} 
	}

/*----------------------------------------------------------*/
	render() {
		return(
			<div className="weather-form">
				<form onSubmit={this.onFormSubmit}>
					<input className="form-control" ref="location" type="text" placeholder="Search Weather By City"></input><br/>
					<button className="btn btn-primary" type="submit"> Get Weather </button>
				</form>
			</div>
		)
	}
} 