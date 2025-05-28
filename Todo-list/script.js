const tasksListEl = document.getElementById("tasks-list");
const addTaskBtn = document.getElementById("add-task");
const infoEl = document.getElementById("info")

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskDiv = document.createElement("div");
  infoEl.innerText = ""
  
  if (taskInput.value === "") {
    infoEl.innerText = "You need to specify the task name!";
    setTimeout(() => {
      infoEl.innerText = ""
    }, 5000);
    return
  }
  
  const checkmark = document.createElement("input");
  checkmark.type = "checkbox";
  taskDiv.append(checkmark);

  const taskName = document.createElement("label");
  taskName.innerText = taskInput.value;
  taskDiv.append(taskName);

  tasksListEl.append(taskDiv);
}

addTaskBtn.addEventListener("click", addTask);

