import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Main from '././components/Main'


const { Route, Router, IndexRoute, hashHistory } =  require('react-router')

ReactDOM.render(
	<Router history={hashHistory}>
			<Route  path="/" component={Main}>

			</Route>
	</Router> ,
	document.getElementById('root')
)

