var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var WeatherApp = /** @class */ (function () {
    function WeatherApp() {
        this.apiKey = '551f4b69bf593081bff4463303955038'; // Replace with your OpenWeather API key
        this.cityInput = document.getElementById('cityInput');
        this.searchButton = document.getElementById('searchButton');
        this.weatherInfo = document.getElementById('weatherInfo');
        this.errorDiv = document.getElementById('error');
        this.initialize();
    }
    WeatherApp.prototype.initialize = function () {
        var _this = this;
        this.searchButton.addEventListener('click', function () { return _this.getWeather(); });
        this.cityInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                _this.getWeather();
            }
        });
    };
    WeatherApp.prototype.getWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var city, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        city = this.cityInput.value.trim();
                        if (!city) {
                            this.showError('Please enter a city name');
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(this.apiKey, "&units=metric"))];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('City not found');
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        this.displayWeather(data);
                        this.hideError();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.showError(error_1 instanceof Error ? error_1.message : 'Failed to fetch weather data');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    WeatherApp.prototype.displayWeather = function (data) {
        this.weatherInfo.innerHTML = "\n      <div class=\"weather-main\">".concat(data.weather[0].main, "</div>\n      <div class=\"temperature\">").concat(Math.round(data.main.temp), "\u00B0C</div>\n      <div class=\"description\">").concat(data.weather[0].description, "</div>\n      <div class=\"details\">\n        <div class=\"detail-item\">Feels like: ").concat(Math.round(data.main.feels_like), "\u00B0C</div>\n        <div class=\"detail-item\">Humidity: ").concat(data.main.humidity, "%</div>\n        <div class=\"detail-item\">Wind: ").concat(data.wind.speed, " m/s</div>\n        <div class=\"detail-item\">Location: ").concat(data.name, "</div>\n      </div>\n    ");
        this.weatherInfo.classList.add('active');
    };
    WeatherApp.prototype.showError = function (message) {
        this.errorDiv.textContent = message;
        this.errorDiv.classList.add('active');
        this.weatherInfo.classList.remove('active');
    };
    WeatherApp.prototype.hideError = function () {
        this.errorDiv.classList.remove('active');
    };
    return WeatherApp;
}());
// Initialize the app
new WeatherApp();
