function calculate() {
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var operationSelect = document.getElementById("operation");
    var resultDiv = document.getElementById("result");
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var operation = operationSelect.value;
    var result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    }
    else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default: result = "Invalid operation";
        }
    }
    resultDiv.innerText = "Result: " + result;
}
// Attach event listener after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", calculate);
    }
});
