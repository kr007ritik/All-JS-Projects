const cityNameInput = document.getElementById("cityNameInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");

getWeatherBtn.addEventListener("click", function () {
  const cityName = cityNameInput.value.trim();

  if (cityName !== "") {
    getWeather(cityName);
  }
});

function getWeather(city) {
  const apiKey = "1e0378053d34be50972ee536d1717395";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
      console.log(data);
    })

    .catch((error) => {
      console.error("Error fetching weather data:",error);
      cityNameInput.value = "";
      weatherInfo.textContent = "Error fetching data. Please try again.";
      weatherInfo.style.color = "red";
      
      setTimeout(() => {
        weatherInfo.textContent = "";
      }, 5000);
    });
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const weatherText = `Current weather in ${cityName}: ${temperature}°C, ${description}.`;
  weatherInfo.style.color = "lightgreen";

  weatherInfo.textContent = weatherText;

  setTimeout(() => {
    cityNameInput.value = "";
  }, 5000);
  
  setTimeout(() => {
    weatherInfo.textContent = "";
  }, 8000);
}
