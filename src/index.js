const tasks = [
  {
    description: 'Buy milk',
    completed: false,
    index: 2,
  },
  {
    description: 'Walk the dog',
    completed: true,
    index: 1,
  },
  {
    description: 'Complete homework',
    completed: false,
    index: 3,
  },
  {
    description: 'Call mom',
    completed: false,
    index: 4,
  },
];

function createTaskList() {
  const taskList = document.getElementById('tasks');
  // sort the tasks by index before populating the list
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'tasks';
    taskItem.innerHTML = `
    <input type="checkbox">
        <label for="dailytask">${task.description}</label>
          <button class="options" type="options">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
    `;

    if (task.completed) {
      taskItem.classList.add('completed');
    }

    taskList.appendChild(taskItem);
  });
}

// call the createTaskList function on page load
window.onload = createTaskList;