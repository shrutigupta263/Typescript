const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskButton = document.getElementById("addTask") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

// Function to render tasks
function renderTasks(): void {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-item");
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
      <span>${task.text}</span>
      <button onclick="toggleTask(${task.id})">✔</button>
      <button onclick="editTask(${task.id})">✎</button>
      <button onclick="deleteTask(${task.id})">🗑</button>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to add task
addTaskButton.addEventListener("click", (): void => {
  if (taskInput.value.trim() === "") return;
  tasks.push({ id: Date.now(), text: taskInput.value, completed: false });
  taskInput.value = "";
  renderTasks();
});

// Function to toggle task completion
function toggleTask(id: number): void {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  renderTasks();
}

// Function to edit task
function editTask(id: number): void {
  const task = tasks.find(task => task.id === id);
  if (!task) return;
  const newText = prompt("Edit Task:", task.text);
  if (newText !== null) {
    task.text = newText;
    renderTasks();
  }
}

// Function to delete task
function deleteTask(id: number): void {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Initial Render
renderTasks();
