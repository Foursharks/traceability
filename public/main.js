
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