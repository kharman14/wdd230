//api_key = 12240cde702580291dd8baa5ce236efa;

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const windSpeed = document.querySelector('#speed');
const windChill = document.querySelector('#chill');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Laramie&units=imperial&appid=12240cde702580291dd8baa5ce236efa`;

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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    // to capitalize each word in desc
    const str = desc.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    const new_desc = str.join(" ");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', new_desc);
    captionDesc.textContent = new_desc;

    windSpeed.innerHTML = weatherData.wind.speed.toFixed(0);

    if (weatherData.main.temp <= 50 && weatherData.wind.speed > 3.0){
        calculate_wind_chill(weatherData.main.temp, weatherData.wind.speed);
    } else {
        chill = 'N/A';
    }

    windChill.innerHTML = chill;

    function calculate_wind_chill(temp, wind) {
        chill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16));
    } 
}
