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

const dadBtn = document.getElementById("dadButton"); 
const getDadJoke = () => axios.get("https://icanhazdadjoke.com/",{
    headers: {
      'Accept': 'application/json'
    }}
    ).then(dadCallback).catch(err => {console.log(err)})

//Add an event listener to the button so that when clicked the clicked function runs
dadBtn.addEventListener(`click`, getDadJoke);

const dadCallback = () => {
  // record a generic message and send it to Rollbar
  rollbar.log('Callback is working?')
}
app.listen(4000, () => console.log(`server running on 4000`))


