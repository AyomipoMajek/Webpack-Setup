const taskList = document.getElementById("task-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" id="task${index}" ${task.completed ? "checked" : ""}>
      <label for="task${index}">${task.description}</label>
      <button class="delete" onclick="deleteTask(${index})">
        <i class="fa-solid fa-times"></i>
      </button>
      <button class="edit" onclick="editTask(${index})">
        <i class="fa-solid fa-pen"></i>
      </button>
    `;
    taskList.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value === "") return alert("Please enter a task");
  const task = {
    description: input.value,
    completed: false,
    index: tasks.length + 1
  };
  tasks.push(task);
  input.value = "";
  renderTasks();
  updateLocalStorage();

  function deleteTask(index) {
    tasks.splice(index, 1);
    tasks.forEach((task, i) => task.index = i + 1);
    renderTasks();
    updateLocalStorage();
  }
  
  function editTask(index) {
    const input = document.createElement("input");
    input.value = tasks[index].description;
    input.classList.add("edit-input");
    const li = taskList.children[index];
    li.innerHTML = "";
    li.appendChild(input);
    input.focus();
    input.addEventListener("blur", () => {
      tasks[index].description = input.value;
      renderTasks();
      updateLocalStorage();
    });
  }
  
  function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  renderTasks();
  document.getElementById("form").addEventListener("submit", addTask);
}



export { renderTasks, addTask, deleteTask, editTask, updateLocalStorage }
