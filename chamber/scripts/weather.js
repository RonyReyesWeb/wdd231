const Mytown = document.querySelector('#town');
const myGraphic = document.querySelector('#graphic');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myHumidity = document.querySelector('#humidity');


const myKey = "da842027fc309ca7e4df058c9bf101fc";
const myLat = "14.631"
const myLong = "-90.516"
const MyURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


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


apiFetch();