import React, { Component } from 'react'
import { Link } from 'react-router'
'use strict'
export default class Examples extends Component {
	constructor(props) {
		super(props) 
		this.state = {}
	}

	render() {
		return(
			<div className="examples-container">
				<h1> Examples </h1>
				<p>Some examples Locations to try out</p>
				<ul>
					<li>
						<Link to='/?location=Montreal'>Montreal, Qc</Link>
					</li>
					<li>
						<Link to='/?location=Rio'>Rio, Bz</Link>
					</li>
					<li>
						<Link to='/?location=London'>London, Uk</Link>
					</li>
				</ul>
			</div>
		)
	}
} 