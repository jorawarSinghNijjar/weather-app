class Weather {
        constructor(city,country){
            this.apiKey = "d7163889691f46bab897c3a5c1728712";
            this.city = city;
            this.country = country;
        }

//Fetch weather from API
async getWeather() {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&country=${this.country}&key=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.data[0];
}

// Change weather location
changeLocation(city,country){
    this.city = city;
    this.country = country;
}
}

