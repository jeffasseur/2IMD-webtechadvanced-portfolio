export default class App {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        console.log("🐼");
        this.lat = 0;
        this.lng = 0;
        this.getCoordinates();
    }

    getCoordinates() {
        console.log("📍");
        navigator.geolocation.getCurrentPosition(
            this.locationSucces.bind(this),
            this.locationError.bind(this)
        );
    }

    locationSucces(location) {
        console.log("✅📍");
        // Latitude en longitude voor de locatie:
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;

        // nieuwe functie aanroepen om de API naar keuze aan te spreken
        this.getWeather();
    }

    locationError(err) {
        console.log(err);
    }

    // functie declareren die wordt aangeroepen in de locationSucces()
    getWeather() {
        console.log("⛅️");
        let urlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.lat}&lon=${this.lng}&appid=${this.API_KEY}`;
        fetch(urlWeather).then( res => {
            return res.json();
        })
        .then(json => {
            console.log(json);
            this.printWeather(json);
            this.getMeal();
        })
        .catch(err => {
            console.log(err);
        });
    }

    printWeather( json ) {
        console.log("🖨 ⛅️");
        // Data ophalen van uit het json object
        let weatherSummary = json.weather[0].description;
        let temp = Math.round(json.main.temp);
        let weatherIcon = json.weather[0].icon;

        // opgehaalde data uitprinten in de index.html
        document.querySelector(".weatherIcon").src = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
        document.querySelector(".weatherDescription").innerHTML = temp + "°C " + weatherSummary;
    }

    getMeal() {
        let urlMeal = `https://api.spoonacular.com/recipes/complexSearch?apiKey=d7c2b86f7bfd4fefa53f26110386f8f8&query=pasta`;
        fetch(urlMeal).then( res => {
            return res.json();
        })
        .then ( json => {
            console.log( json );
            this.printMeal( json );
        })
        .catch( err => {
            console.log(err);
        });
    }

    printMeal( json ) {
        console.log("🍝");
        // Data ophalen van uit het json object
        let i = Math.floor(Math.random() * json.results.length);
        let mealName = json.results[i].title;
        let mealImage = json.results[i].image;

        // opgehaalde data uitprinten in de index.html
        document.querySelector(".mealName").innerHTML = mealName;
        document.querySelector(".mealImage").src = mealImage;
    }
}