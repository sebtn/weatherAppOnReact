import React from 'react'
import ReactDOM from 'react-dom'

import Main from '././components/Main'
import Weather from '././components/Weather'
import About from '././components/About'
import { Route, Router, IndexRoute, 
				hashHistory, Link } from 'react-router'

'use strict'

ReactDOM.render(
	<Router history={ hashHistory }>
			<Route  path="/" component={ Main }>
				<Route  path="about" component={ About } />
				<IndexRoute component={ Weather } /> 
			</Route>
	</Router>,
	document.getElementById('root')
)

