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
        let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=${this.API_KEY}`;
        fetch(urlWeather).then( res => {
            return res.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(err => {
            console.log(err);
        });
    }
}