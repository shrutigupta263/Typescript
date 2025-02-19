// Get DOM elements
const heightInput = document.getElementById("height") as HTMLInputElement
const weightInput = document.getElementById("weight") as HTMLInputElement
const calculateButton = document.getElementById("calculate") as HTMLButtonElement
const resultDiv = document.getElementById("result") as HTMLDivElement

// Function to calculate BMI
function calculateBMI(height: number, weight: number): number {
  const heightInMeters = height / 100
  return weight / (heightInMeters * heightInMeters)
}

// Function to classify BMI
function classifyBMI(bmi: number): string {
  if (bmi < 18.5) {
    return "Underweight"
  } else if (bmi < 25) {
    return "Normal weight"
  } else if (bmi < 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

// Event listener for the calculate button
calculateButton.addEventListener("click", () => {
  const height = Number.parseFloat(heightInput.value)
  const weight = Number.parseFloat(weightInput.value)

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.textContent = "Please enter valid height and weight."
    return
  }

  const bmi = calculateBMI(height, weight)
  const category = classifyBMI(bmi)

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`
})

