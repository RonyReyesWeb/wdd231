const Mytown = document.querySelector('#town');
const myGraphic = document.querySelector('#graphic');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myHumidity = document.querySelector('#humidity');
const forecastContainer = document.getElementById('forecast-container');


const myKey = "da842027fc309ca7e4df058c9bf101fc";
const myLat = "14.631"
const myLong = "-90.516"
const MyURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(MyURL);
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

function displayResults(data) {
    console.log('hello')
    Mytown.innerHTML = data.name

    // data to handle the img 
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('src', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)

    // data to handle the condition/description 
    myDescription.innerHTML = data.weather[0].description

    // to handle the temperature
    const tempF = data.main.temp;
    const tempC = Math.round((tempF - 32) * (5 / 9));
    myTemperature.innerHTML = `~${tempC}&deg;C (${Math.round(tempF)}&deg;F)`;

    // data to handle the mudidity 
    const humidity = data.main.humidity;
    let humidityText;
    if (humidity < 30) {
        humidityText = "Low";
    } else if (humidity < 70) {
        humidityText = "Moderate";
    } else {
        humidityText = "High";
    }
    myHumidity.innerHTML = `${humidityText} (${humidity}%)`;

}



async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) throw Error(await response.text());

        const data = await response.json();
        displayForecast(data);

    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

function displayForecast(data) {
    // Pick roughly midday for next 3 days: indices 8, 16, 24 (3-hour intervals)
    const dayIndexes = [8, 16, 24, 32]; // roughly midday for next 3 days

    dayIndexes.forEach((idx, i) => {
        const forecast = data.list[idx];
        const date = new Date(forecast.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

        const tempF = forecast.main.temp;
        const tempC = Math.round((tempF - 32) * (5 / 9));

        // Update your HTML spans
        const dayNameElem = document.getElementById(`day${i + 1}-name`);
        const dayTempElem = document.getElementById(`day${i + 1}-temp`);

        if (dayNameElem && dayTempElem) {
            dayNameElem.textContent = dayName;
            dayTempElem.textContent = `~${tempC}°C (${Math.round(tempF)}°F)`;
        }
    });
}

// Run the forecast
getForecast();
apiFetch();