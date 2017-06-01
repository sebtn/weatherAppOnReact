let express = require('express')

//create app
let app = express()

// expose the folder public, to run do: node server.js
app.use(express.static('public'))
app.listen(3000, serverExpressFn = () =>  {
	console.log('Express is up on port 3000')
})