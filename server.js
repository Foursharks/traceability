const express = require('express')
const app = express()
app.use(express.static(`${__dirname}/public`))
require('dotenv').config() 
const {ROLLBAR_ACCESS_TOKEN} = process.env

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.listen(4000, () => console.log(`server running on 4000`))


