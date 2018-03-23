// Init weather object
const weather = new Weather('Boston', 'MA');

// Init UI
const ui = new UI();

// weather.changeLocation('Miami', 'FL');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}




