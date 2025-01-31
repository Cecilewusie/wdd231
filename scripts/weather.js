const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=c34f1644b22360a6f8033832fc6e3a40&units=metric'

async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    caption.textContent = `Description: ${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);    
}

apifetch();