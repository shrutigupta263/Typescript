function calculate(): void {
    const num1Input = document.getElementById("num1") as HTMLInputElement;
    const num2Input = document.getElementById("num2") as HTMLInputElement;
    const operationSelect = document.getElementById("operation") as HTMLSelectElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    const num1: number = parseFloat(num1Input.value);
    const num2: number = parseFloat(num2Input.value);
    const operation: string = operationSelect.value;
    let result: number | string;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operation) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
            default: result = "Invalid operation";
        }
    }

    resultDiv.innerText = "Result: " + result;
}

// Attach event listener after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", calculate);
    }
});
