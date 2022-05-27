const temp = document.querySelector('#temperature');
const wind = document.querySelector('#speed');
const chill = document.querySelector('#chill');

if (temp <= 50 && wind > 3.0){
    calculate_wind_chill(temp, wind);
} else {
    windchill = 'N/A';
}
chill.textContent = windchill;

function calculate_wind_chill(temp, wind) {
    windchill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16));
}