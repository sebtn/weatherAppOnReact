import React, {Component}  from 'react'
import { Link } from 'react-router'

'use strict'
export default class Nav extends Component { 
	constructor(props) {
		super(props) 
		this.state = {}
	}
	render() {
		return(
			<div>
				<h2>Navabr Goes to hollywodd in here!</h2>
				<Link to='/'>Get Weather</Link>
				<Link to='/about'>About</Link>
			</div>
		) 
	}
}