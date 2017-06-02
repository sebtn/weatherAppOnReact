import React, {Component} from 'react'
import Nav from './Nav'

'use strict'
export default class Main extends Component {
	constructor(props) {
		super(props)
		this.state ={}
	}
	render() {
		return(
			<div>
				<Nav />
				<h2>Defined in Main.js</h2>
				{this.props.children}
			</div>
		)
	}
}
