/**
 * Weather App
 * Done: Complete getWeatherData() to return json response Promise
 * Done: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "962335ad9113f17c2b80b30d9ab4e767";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
  //HINT: Use template literals to create a url with input and an API key

  return fetch(`${URL}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    })

  //CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  return getWeatherData(city)
  .then((response)=> {
    showWeatherData(response)
  })
  .catch((error) => {
    console.log(error);
  })
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (response) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerText = response.name;
  console.log("temp: ", response.main.temp);
  document.getElementById("weather-type").innerText = response.weather[0].main;
  document.getElementById("temp").innerText = response.main.temp;
  console.log("Min temp: ", response.main.temp_min);
  document.getElementById("min-temp").innerText = response.main.temp_min;
  console.log("Max temp: ", response.main.temp_max);
  document.getElementById("max-temp").innerText = response.main.temp_max;
};
