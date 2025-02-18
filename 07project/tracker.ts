// Define the Expense interface
interface Expense {
    id: number;
    description: string;
    amount: number;
    date: string;
}

// ExpenseTracker class to manage expenses
class ExpenseTracker {
    private expenses: Expense[] = [];
    private nextId: number = 1;

    // Add a new expense
    addExpense(description: string, amount: number, date: string): void {
        const expense: Expense = {
            id: this.nextId,
            description,
            amount,
            date,
        };
        this.expenses.push(expense);
        this.nextId++;
        console.log(`Expense added: ${description} for $${amount} on ${date}`);
    }

    // List all expenses
    listExpenses(): void {
        if (this.expenses.length === 0) {
            console.log("No expenses to show.");
            return;
        }

        console.log("\nAll Expenses:");
        this.expenses.forEach((expense) => {
            console.log(`ID: ${expense.id} | ${expense.description} | $${expense.amount} | Date: ${expense.date}`);
        });
    }

    // Remove an expense by ID
    removeExpense(id: number): void {
        const index = this.expenses.findIndex(expense => expense.id === id);
        if (index !== -1) {
            const removedExpense = this.expenses.splice(index, 1);
            console.log(`Removed expense: ${removedExpense[0].description}`);
        } else {
            console.log("Expense not found.");
        }
    }

    // Render expenses to the table
    renderExpenses(): void {
        const expenseTableBody = document.querySelector('#expenseTable tbody') as HTMLTableSectionElement;
        expenseTableBody.innerHTML = ''; // Clear the table before rendering
        this.expenses.forEach((expense) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.id}</td>
                <td>${expense.description}</td>
                <td>$${expense.amount}</td>
                <td>${expense.date}</td>
                <td><button class="remove" data-id="${expense.id}">Remove</button></td>
            `;
            expenseTableBody.appendChild(row);
        });

        // Add remove button functionality
        document.querySelectorAll('.remove').forEach((button) => {
            button.addEventListener('click', (event) => this.removeExpenseHandler(event));
        });
    }

    // Handle remove expense button click
    private removeExpenseHandler(event: Event): void {
        const target = event.target as HTMLButtonElement;
        const id = parseInt(target.dataset.id as string);
        this.removeExpense(id);
        this.renderExpenses();
    }
}

// Initialize the ExpenseTracker
const tracker = new ExpenseTracker();

// Get form elements
const expenseForm = document.getElementById('expenseForm') as HTMLFormElement;
const descriptionInput = document.getElementById('description') as HTMLInputElement;
const amountInput = document.getElementById('amount') as HTMLInputElement;
const dateInput = document.getElementById('date') as HTMLInputElement;

// Function to add an expense from the form input
function addExpense(event: Event): void {
    event.preventDefault();
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

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
