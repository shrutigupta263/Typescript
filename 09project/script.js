// Get DOM elements
var heightInput = document.getElementById("height");
var weightInput = document.getElementById("weight");
var calculateButton = document.getElementById("calculate");
var resultDiv = document.getElementById("result");
// Function to calculate BMI
function calculateBMI(height, weight) {
    var heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}
// Function to classify BMI
function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi < 25) {
        return "Normal weight";
    }
    else if (bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
// Event listener for the calculate button
calculateButton.addEventListener("click", function () {
    var height = Number.parseFloat(heightInput.value);
    var weight = Number.parseFloat(weightInput.value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = "Please enter valid height and weight.";
        return;
    }
    var bmi = calculateBMI(height, weight);
    var category = classifyBMI(bmi);
    resultDiv.textContent = "Your BMI is ".concat(bmi.toFixed(2), " (").concat(category, ")");
});
