// Weather information
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const figContainer = document.querySelector('#fig-container')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.12&lon=-1.27&appid=c34f1644b22360a6f8033832fc6e3a40&units=metric';

//additional weather information
const highTemp = document.querySelector('#high-t');
const lowTemp = document.querySelector('#low-t');
const sunrise = document.querySelector('#sunrise-time');
const sunset = document.querySelector('#sunset-time');

async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // creating content for fig container
    const figImage = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    figCaption.textContent = `${data.weather[0].description}`;

    figImage.setAttribute('src', iconsrc);
    figImage.setAttribute('alt', data.weather[0].description);
    figImage.setAttribute('id','weather-icon');

    // adding figure information to fig container
    figContainer.appendChild(figImage);
    figContainer.appendChild(figCaption);

    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;

    //additional weather information
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;C`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
    sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;    
}

apifetch();

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.12&lon=-1.27&appid=c34f1644b22360a6f8033832fc6e3a40&units=metric';

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const todayTemp = document.querySelector('#today-temperature');
    const dayTwoForecast = document.querySelector('#day-two-forecast');
    const dayThreeForecast = document.querySelector('#day-three-forecast');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date(data.list[0].dt * 1000).getDay();
    const dayTwo = new Date(data.list[8].dt * 1000).getDay();
    const dayThree = new Date(data.list[16].dt * 1000).getDay();

    todayTemp.innerHTML = `${daysOfWeek[today]}: <span class="degree">${data.list[0].main.temp}&deg;C</span> ➡️  ${data.list[0].weather[0].description}`;
    dayTwoForecast.innerHTML = `${daysOfWeek[dayTwo]}: <span class="degree">${data.list[8].main.temp}&deg;C</span> ➡️  ${data.list[8].weather[0].description}`;
    dayThreeForecast.innerHTML = `${daysOfWeek[dayThree]}: <span class="degree">${data.list[16].main.temp}&deg;C</span> ➡️  ${data.list[16].weather[0].description}`;
}

fetchForecast();