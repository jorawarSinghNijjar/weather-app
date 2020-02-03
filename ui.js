class UI {
    constructor(){
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.details = document.getElementById("w-details");
        this.humidity = document.getElementById("w-humidity");
        this.dewpoint = document.getElementById("w-dewpoint");
        this.feelsLike = document.getElementById("w-feels-like");
        this.wind = document.getElementById("w-wind");
    }

    paint(weather){
        this.location.textContent = weather.city_name;
        this.desc.textContent = weather.weather.description;
        this.string.textContent = `${weather.temp} C`;
        this.icon.setAttribute("src",`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.rh}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.app_temp} C`;
        this.dewpoint.textContent = `Dewpoint: ${weather.dewpt} C`;
        this.wind.textContent = `Wind: ${Math.floor(weather.wind_spd*3.6)} km/h`;
        



    }
}