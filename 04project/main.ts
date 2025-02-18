function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

const celsiusInput = document.getElementById("celsius") as HTMLInputElement;
const fahrenheitInput = document.getElementById("fahrenheit") as HTMLInputElement;

celsiusInput.addEventListener("input", () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        fahrenheitInput.value = celsiusToFahrenheit(celsiusValue).toFixed(2);
    } else {
        fahrenheitInput.value = "";
    }
});

fahrenheitInput.addEventListener("input", () => {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        celsiusInput.value = fahrenheitToCelsius(fahrenheitValue).toFixed(2);
    } else {
        celsiusInput.value = "";
    }
});