import React, {Component} from 'react'

export default class ErrorBox extends Component {
	render()  {
		return (
			<div className="alert alert-danger" role="alert">
				<strong>Oh snap!</strong> Change a name of the city up and try submitting again.
			</div>
		)
	}
}
