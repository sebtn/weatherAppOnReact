import React, {Component} from 'react'
import Nav from './Nav'

'use strict'
export default class Main extends Component {
	render() {
		return(
			<div>
				<Nav />

				<div className="row">

					<div className="col-sm-3 col-md-6 col-lg-4">
					</div>

					<div className="col-sm-6 col-md-6 col-lg-4 text-center">
					{this.props.children}
					</div>
					
					<div className="col-sm-3 col-md-6 col-lg-4">
					</div>

				</div>
			</div>
		)
	}
}
