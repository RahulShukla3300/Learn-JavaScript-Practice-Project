const cityInput = document.getElementById("cityInput");
const button = document.getElementById("button");
const result = document.getElementById("weatherResult");
const error = document.getElementById("error");

button.addEventListener('click', function () {
    const city = cityInput.value
    error.textContent = "";
    result.innerHTML = "";
    console.log(city);
})

if (!city) {
    error.textContent = "Please enter the city name.";
    return;
}

const apikey = "https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}"