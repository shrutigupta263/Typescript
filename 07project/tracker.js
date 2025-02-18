// ExpenseTracker class to manage expenses
var ExpenseTracker = /** @class */ (function () {
    function ExpenseTracker() {
        this.expenses = [];
        this.nextId = 1;
    }
    // Add a new expense
    ExpenseTracker.prototype.addExpense = function (description, amount, date) {
        var expense = {
            id: this.nextId,
            description: description,
            amount: amount,
            date: date,
        };
        this.expenses.push(expense);
        this.nextId++;
        console.log("Expense added: ".concat(description, " for $").concat(amount, " on ").concat(date));
    };
    // List all expenses
    ExpenseTracker.prototype.listExpenses = function () {
        if (this.expenses.length === 0) {
            console.log("No expenses to show.");
            return;
        }
        console.log("\nAll Expenses:");
        this.expenses.forEach(function (expense) {
            console.log("ID: ".concat(expense.id, " | ").concat(expense.description, " | $").concat(expense.amount, " | Date: ").concat(expense.date));
        });
    };
    // Remove an expense by ID
    ExpenseTracker.prototype.removeExpense = function (id) {
        var index = this.expenses.findIndex(function (expense) { return expense.id === id; });
        if (index !== -1) {
            var removedExpense = this.expenses.splice(index, 1);
            console.log("Removed expense: ".concat(removedExpense[0].description));
        }
        else {
            console.log("Expense not found.");
        }
    };
    // Render expenses to the table
    ExpenseTracker.prototype.renderExpenses = function () {
        var _this = this;
        var expenseTableBody = document.querySelector('#expenseTable tbody');
        expenseTableBody.innerHTML = ''; // Clear the table before rendering
        this.expenses.forEach(function (expense) {
            var row = document.createElement('tr');
            row.innerHTML = "\n                <td>".concat(expense.id, "</td>\n                <td>").concat(expense.description, "</td>\n                <td>$").concat(expense.amount, "</td>\n                <td>").concat(expense.date, "</td>\n                <td><button class=\"remove\" data-id=\"").concat(expense.id, "\">Remove</button></td>\n            ");
            expenseTableBody.appendChild(row);
        });
        // Add remove button functionality
        document.querySelectorAll('.remove').forEach(function (button) {
            button.addEventListener('click', function (event) { return _this.removeExpenseHandler(event); });
        });
    };
    // Handle remove expense button click
    ExpenseTracker.prototype.removeExpenseHandler = function (event) {
        var target = event.target;
        var id = parseInt(target.dataset.id);
        this.removeExpense(id);
        this.renderExpenses();
    };
    return ExpenseTracker;
}());
// Initialize the ExpenseTracker
var tracker = new ExpenseTracker();
// Get form elements
var expenseForm = document.getElementById('expenseForm');
var descriptionInput = document.getElementById('description');
var amountInput = document.getElementById('amount');
var dateInput = document.getElementById('date');
// Function to add an expense from the form input
function addExpense(event) {
    event.preventDefault();
    var description = descriptionInput.value;
    var amount = parseFloat(amountInput.value);
    var date = dateInput.value;
    if (description && amount && date) {
        tracker.addExpense(description, amount, date);
        tracker.renderExpenses(); // Update the UI after adding the expense
        expenseForm.reset(); // Reset form fields
    }
}
// Add event listener for the form submission
expenseForm.addEventListener('submit', addExpense);
// Initial render
tracker.renderExpenses();
