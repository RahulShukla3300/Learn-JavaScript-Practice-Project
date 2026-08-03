const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const message = document.getElementById("message");
const weatherResult = document.getElementById("weather-result");
const weatherCard = document.querySelector(".weather-card");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    message.textContent = "Please enter a city.";
    weatherResult.innerHTML = "";
    cityInput.value = "";
    return;
  }

  try {
    message.textContent = "Loading weather...";
    weatherResult.innerHTML = "";

    const locationResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );

    const locationData = await locationResponse.json();

    if (!locationData.results?.length) {
      throw new Error("City not found.");
    }

    const { latitude, longitude, name, country } = locationData.results[0];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
    );

    if (!weatherResponse.ok) {
      throw new Error("Weather data could not be loaded.");
    }

    const weatherData = await weatherResponse.json();
    const current = weatherData.current;
    const weather = getWeatherType(current.weather_code);

    weatherCard.className = `weather-card ${weather.className}`;

    weatherResult.innerHTML = `
      <h2>${name}, ${country}</h2>
      <p>${weather.label}</p>
      <p>Temperature: ${current.temperature_2m}°C</p>
      <p>Humidity: ${current.relative_humidity_2m}%</p>
      <p>Wind: ${current.wind_speed_10m} km/h</p>
    `;

    message.textContent = "";
    cityInput.value = "";
  } catch (error) {
    message.textContent = error.message;
    weatherResult.innerHTML = "";
    cityInput.value = "";
  }
});

function getWeatherType(weatherCode) {
  if (weatherCode === 0 || weatherCode === 1) {
    return { className: "sunny", label: "Sunny" };
  }

  if ([2, 3, 45, 48].includes(weatherCode)) {
    return { className: "cloudy", label: "Cloudy" };
  }

  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
    return { className: "snowy", label: "Snowy" };
  }

  return { className: "rainy", label: "Rainy" };
}