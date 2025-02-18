class ToDoList {
    private tasks: string[] = [];

    addTask(task: string): void {
        if (task.trim() === "") return;
        this.tasks.push(task);
        this.render();
    }

    removeTask(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            this.render();
        }
    }

    render(): void {
        const taskList = document.getElementById("taskList") as HTMLUListElement;
        taskList.innerHTML = "";
        this.tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${task} <button onclick="myList.removeTask(${index})">Remove</button>`;
            taskList.appendChild(li);
        });
    }
}

const myList = new ToDoList();

function addTask(): void {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    myList.addTask(taskInput.value);
    taskInput.value = "";
}

(window as any).addTask = addTask;
(window as any).myList = myList;
