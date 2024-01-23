const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

cityInput.focus();

function allData() {
    const cityName = cityInput.value.trim();
    getData(cityName).then((data) => {
        const loctemp = Math.floor(data.main.temp)
        console.log(Math.floor(data.main.temp));
        
        currentWeatherDiv.innerHTML =
            `
            <img src="img/${data.weather[0].icon}.png" alt="Weather Icon">
            <div class="temp">
                <span class="numb"> ${data.main.temp}</span>
                <span class="deg">°</span>C
            </div>
            <div class="weather">
                <i class='bx bx-map'></i> 
                ${data.name},  ${data.sys.country}
            </div>
            <div class="bottom-details">
                <div class="column feels">
                    <i class='bx bxs-thermometer'></i>
                    <div class="details">
                    <div class="temp">
                        <span class="numb-2"> ${loctemp}</span>
                        <span class="deg">°</span>C
                    </div>
                    <p>Feels like</p>
                    </div>
                </div>
                <div class="column humidity">
                    <i class='bx bxs-droplet-half'></i>
                    <div class="details">
                        <span>${data.main.humidity}%</span>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>

            `


    });
}


document.addEventListener(`keyup`, (e) => {
    e.preventDefault()
    if (e.key == 'Enter') {

        allData()
    }
})

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    allData()
})