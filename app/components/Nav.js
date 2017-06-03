import React, { Component }  from 'react'
import { Link, IndexLink } from 'react-router'

'use strict'
export default class Nav extends Component { 
	constructor(props) {
		super(props) 
		this.state = {}
	}

/*----------------------------------------------------------*/
	onSearch = (event) => {
		event.preventDefault()
		let location = this.refs.searchBar.value
		let encodedLocation = encodeURIComponent(location)
		if(location.length > 0) {
			this.refs.searchBar.value = ' '
			/* Re-route to the encoded location by adding it 
			to and updating the GET request. Fired up, gets
			handled in the parent by componentDidMount*/
			window.location.hash = '#/?location=' + encodedLocation
		}
	}

/*----------------------------------------------------------*/
	render() {
		return(
			<div className="nav-container" id="navContainer">
				<nav className="nav justify-content-center">
					<li className="nav-item">
						<IndexLink className="nav-link disabled">Weather App Built on React.js</IndexLink>	
					</li>
					<li className="nav-item title">
						<IndexLink className="nav-link active" to='/' >Get Weather</IndexLink>
					</li>
					<li className="nav-item title">
						<IndexLink className="nav-link active" to='/about' >About</IndexLink>
					</li>
					<li className="nav-item title">
						<IndexLink className="nav-link active" to='/examples' >Examples</IndexLink>
					</li>			
					<form className="form-inline" onSubmit={this.onSearch}>
						<input ref="searchBar" className="form-control" type="text" placeholder="Search Weather By City" />
						<button className="btn btn-primary" type="submit">Get Weather</button>
					</form>			
				</nav>	
			</div>
		) 
	}
}