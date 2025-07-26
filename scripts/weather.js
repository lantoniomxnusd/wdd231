const currentTemp = document.querySelector ('#nayCurrentTemp');
const weatherIcon = document.querySelector ('#nayWeatherIcon');
const captionDesc = document.querySelector ('#nayWeatherFigCap');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.03&lon=-105.07&units=imperial&appid=86cfea63afec3c9d114a62b465fe6c1e';

async function apiFetch(){
    try{
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults (data); //uncomment when ready
        }else {
            throw Error (await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

function displayResults (data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather [0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();