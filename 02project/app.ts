const apiKey = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=551f4b69bf593081bff4463303955038'; // Replace with your OpenWeather API key

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
    }[];
}

class WeatherApp {
    private cityInput: HTMLInputElement;
    private searchBtn: HTMLButtonElement;
    private weatherInfo: HTMLDivElement;

    constructor() {
        this.cityInput = document.getElementById('cityInput') as HTMLInputElement;
        this.searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
        this.weatherInfo = document.getElementById('weatherInfo') as HTMLDivElement;

        this.searchBtn.addEventListener('click', () => this.getWeather());
    }

    async getWeather() {
        const city = this.cityInput.value;
        if (!city) return;

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data: WeatherData = await response.json();

            this.displayWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
        }
    }

    displayWeather(data: WeatherData) {
        const { name, main, weather } = data;
        this.weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Weather: ${weather[0].description}</p>
        `;
    }
}

new WeatherApp();