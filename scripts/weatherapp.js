const Mytown = document.querySelector('#town');
const myGraphic = document.querySelector('#Graphic');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');


const myKey = "da842027fc309ca7e4df058c9bf101fc"
const myLat = "14.631"
const myLong = "-90.516"

const MyURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


// `
async function apiFetch() {
    try {
        const response = await fetch(MyURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello')
}


apiFetch();