import React, {Component} from 'react'

'use strict'
export default class About extends Component {
	constructor(props) {
		super(props) 
		this.state = {}
	}

	render() {
		return(
			<div className="about-container">
				<h1>About </h1>
				<br />
				<p>This is a page about the application and to tell 
				a little bit of why it exists , how was it built
				and what does the develpoer want to achieve.
				It is pretty simple but the React.js implementation 
				makes it quite an acomplshiment. </p>
				<p>Some of the tools used are Webpack, React, Express, Bootstrap, Git
				open weather API, Node and npm</p>
				<p>Some links to the tools:</p>
				<div className="container">
					<div className="row">
						<div className="col-1 col-md-6">
							<ul className="list-1">
								<li>Git</li>
								<li>Express</li>
								<li>Webpack</li>
								<li>Node</li>
							</ul>
						</div>			
						<div className="col-2 col-md-6">
							<ul className="list-2">
								<li>npm</li>
								<li>Bootstrap</li>
								<li>Open weather API</li>
								<li>React</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
} 