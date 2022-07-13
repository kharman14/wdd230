//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// API key = 12240cde702580291dd8baa5ce236efa

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const humidity = document.querySelector('#humidity');

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=21.4389&lon=158.0001&exclude=hourly&units=imperial&appid=12240cde702580291dd8baa5ce236efa`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    const new_desc = capitalizeDesc(desc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', new_desc);
    captionDesc.textContent = new_desc;
    humidity.textContent = weatherData.current.humidity;

    // Sets temperature, weather icon and description for each day of the three day forecast
    for (var i = 1; i < 4; i++) {
        const forecast = document.querySelector(`#temp-forecast${i}`);
        forecast.textContent = weatherData.daily[i].temp.day.toFixed(0);

        const forecast_iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[i].weather[0].icon}.png`;
        const forecast_desc = weatherData.daily[i].weather[0].description;

        const new_forecast_desc = capitalizeDesc(forecast_desc);

        const forecast_caption = document.querySelector(`#forecast-caption${i}`);
        const forecast_weatherIcon = document.querySelector(`#forecast_weatherIcon${i}`);

        forecast_weatherIcon.setAttribute('src', forecast_iconsrc)
        forecast_weatherIcon.setAttribute('alt', new_forecast_desc)
        forecast_caption.textContent = new_forecast_desc;
    }
}

// Capitalizes each word in the description and returns new capitalized description
function capitalizeDesc(description) {
    const str = description.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    const new_str = str.join(" ");
    return new_str;
}