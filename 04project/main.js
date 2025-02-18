function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
var celsiusInput = document.getElementById("celsius");
var fahrenheitInput = document.getElementById("fahrenheit");
celsiusInput.addEventListener("input", function () {
    var celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        fahrenheitInput.value = celsiusToFahrenheit(celsiusValue).toFixed(2);
    }
    else {
        fahrenheitInput.value = "";
    }
});
fahrenheitInput.addEventListener("input", function () {
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        celsiusInput.value = fahrenheitToCelsius(fahrenheitValue).toFixed(2);
    }
    else {
        celsiusInput.value = "";
    }
});
