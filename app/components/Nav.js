import React, {Component}  from 'react'
import { Link, IndexLink } from 'react-router'

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
				<IndexLink to='/' activeClassName="active">Get Weather</IndexLink>
				<IndexLink to='/about' activeClassName="active">About</IndexLink>
				<IndexLink to='/examples' activeClassName="active">Examples</IndexLink>
			</div>
		) 
	}
}