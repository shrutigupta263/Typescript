// Types for weather data
interface WeatherData {
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
  name: string;
}

class WeatherApp {
  private apiKey = '551f4b69bf593081bff4463303955038'; // Replace with your OpenWeather API key
  private cityInput: HTMLInputElement;
  private searchButton: HTMLButtonElement;
  private weatherInfo: HTMLDivElement;
  private errorDiv: HTMLDivElement;

  constructor() {
    this.cityInput = document.getElementById('cityInput') as HTMLInputElement;
    this.searchButton = document.getElementById('searchButton') as HTMLButtonElement;
    this.weatherInfo = document.getElementById('weatherInfo') as HTMLDivElement;
    this.errorDiv = document.getElementById('error') as HTMLDivElement;

    this.initialize();
  }

  private initialize(): void {
    this.searchButton.addEventListener('click', () => this.getWeather());
    this.cityInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.getWeather();
      }
    });
  }

  private async getWeather(): Promise<void> {
    const city = this.cityInput.value.trim();
    
    if (!city) {
      this.showError('Please enter a city name');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data: WeatherData = await response.json();
      this.displayWeather(data);
      this.hideError();
    } catch (error) {
      this.showError(error instanceof Error ? error.message : 'Failed to fetch weather data');
    }
  }

  private displayWeather(data: WeatherData): void {
    this.weatherInfo.innerHTML = `
      <div class="weather-main">${data.weather[0].main}</div>
      <div class="temperature">${Math.round(data.main.temp)}°C</div>
      <div class="description">${data.weather[0].description}</div>
      <div class="details">
        <div class="detail-item">Feels like: ${Math.round(data.main.feels_like)}°C</div>
        <div class="detail-item">Humidity: ${data.main.humidity}%</div>
        <div class="detail-item">Wind: ${data.wind.speed} m/s</div>
        <div class="detail-item">Location: ${data.name}</div>
      </div>
    `;
    this.weatherInfo.classList.add('active');
  }

  private showError(message: string): void {
    this.errorDiv.textContent = message;
    this.errorDiv.classList.add('active');
    this.weatherInfo.classList.remove('active');
  }

  private hideError(): void {
    this.errorDiv.classList.remove('active');
  }
}

// Initialize the app
new WeatherApp();