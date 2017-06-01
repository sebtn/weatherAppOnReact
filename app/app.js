import React from 'react'
import ReactDOM from 'react-dom'

import Main from '././components/Main'

'use strict'
const { Route, Router, IndexRoute, hashHistory } =  require('react-router')

ReactDOM.render(
	<Router history={hashHistory}>
			<Route  path="/" component={Main}>

			</Route>
	</Router>,
	document.getElementById('root')
)

