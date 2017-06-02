import React, {Component} from 'react'

'use strict'
export default class WeatherForm extends Component {
	constructor(props) {
		super(props) 
		this.state = {}
	}

/*----------------------------------------------------------*/
onFormSubmit = (event) => {
		let location = this.refs.location.value
		event.preventDefault()
		if(location.length > 0) {
			this.refs.location.value = ' '
			/* onSearch will be fired up to the parent,
			will be LH term on the component call 
			made by the parent 
			*/
			this.props.onSearch(location)
		} 
	}

/*----------------------------------------------------------*/
	render() {
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input ref="location" type="text" placeholder="Enter city name"></input><br/>
					<input type="submit" value="Get Weather"></input>
				</form>
			</div>
		)
	}
} 