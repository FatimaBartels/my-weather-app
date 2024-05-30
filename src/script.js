// this function displaying the result of the city and temperature
function displayResult(response) {
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = `${response.data.city}`;
  let temperature = Math.round(response.data.temperature.current);
  let currentTemperature = document.querySelector("#display-current-temp");
  currentTemperature.innerHTML = temperature;
}

// API with the search default value of the city
function searchDefault(city) {
  let apiKey = "f80c43e79144055afb51f7885ft48o7e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayResult);
}

// input city in search box
function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#enter-city-input");
  let city = inputCity.value;
  searchDefault(city);
}

searchDefault("Brussel");

// showing current date and time in the app
function currentDate(date) {
  let currentHr = date.getHours();
  let currentMins = date.getMinutes();
  let day = date.getDay();

  // make the time with one value to 2 values with 0 infront
  if (currentMins < 10) {
    currentMins = `0${currentMins}`;
  }

  if (currentHr < 10) {
    currentHr = `0${currentHr}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[day];
  return `${currentDay} ${currentHr}:${currentMins}`;
}

// submitting the city input on the search box
let formSearch = document.querySelector("#search-form");
formSearch.addEventListener("submit", searchCity);

// when clicking the button search getting the right city
let searchBtn = document.querySelector("#submit-btn");
searchBtn.addEventListener("click", searchCity);

// the current date and time
let currentDateTime = document.querySelector("#current-date-time");
let dateTime = new Date();

currentDateTime.innerHTML = currentDate(dateTime);
