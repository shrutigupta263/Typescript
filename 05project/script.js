var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
    }
    ToDoList.prototype.addTask = function (task) {
        if (task.trim() === "")
            return;
        this.tasks.push(task);
        this.render();
    };
    ToDoList.prototype.removeTask = function (index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            this.render();
        }
    };
    ToDoList.prototype.render = function () {
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        this.tasks.forEach(function (task, index) {
            var li = document.createElement("li");
            li.innerHTML = "".concat(task, " <button onclick=\"myList.removeTask(").concat(index, ")\">Remove</button>");
            taskList.appendChild(li);
        });
    };
    return ToDoList;
}());
var myList = new ToDoList();
function addTask() {
    var taskInput = document.getElementById("taskInput");
    myList.addTask(taskInput.value);
    taskInput.value = "";
}
window.addTask = addTask;
window.myList = myList;
