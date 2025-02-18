var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var taskInput = document.getElementById("taskInput");
var addTaskButton = document.getElementById("addTask");
var taskList = document.getElementById("taskList");
var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.classList.add("task-item");
        if (task.completed)
            li.classList.add("completed");
        li.innerHTML = "\n      <span>".concat(task.text, "</span>\n      <button onclick=\"toggleTask(").concat(task.id, ")\">\u2714</button>\n      <button onclick=\"editTask(").concat(task.id, ")\">\u270E</button>\n      <button onclick=\"deleteTask(").concat(task.id, ")\">\uD83D\uDDD1</button>\n    ");
        taskList.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Function to add task
addTaskButton.addEventListener("click", function () {
    if (taskInput.value.trim() === "")
        return;
    tasks.push({ id: Date.now(), text: taskInput.value, completed: false });
    taskInput.value = "";
    renderTasks();
});
// Function to toggle task completion
function toggleTask(id) {
    tasks = tasks.map(function (task) { return task.id === id ? __assign(__assign({}, task), { completed: !task.completed }) : task; });
    renderTasks();
}
// Function to edit task
function editTask(id) {
    var task = tasks.findIndex(function (task) { return task.id === id; });
    if (!task)
        return;
    var newText = prompt("Edit Task:", task.text);
    if (newText !== null) {
        task.text = newText;
        renderTasks();
    }
}
// Function to delete task
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    renderTasks();
}
// Initial Render
renderTasks();
