document.addEventListener('DOMContentLoaded', () => {
// Select DOM elements for task input, add button, and task list container
const addButton = document.getElementById('add-task-btn'); // Corrected to match expected button ID
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const myElement = document.getElementById("box");
myElement.classList.add("active");

// Function to add a new task to the list
function addTask() {
// Retrieve and trim the task input value
const taskText = taskInput.value.trim();
// Check if the input is empty; alert user if so
if (taskText === "") {
  alert('Please enter a task.');
  return; // Exit the function early if no input
}

// Create a new list item element with the task text
const li = document.createElement('li');
li.textContent = taskText;

// Create a remove button and set its properties
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.className = 'remove-btn';

// Assign onclick event to remove the task when clicked
removeBtn.onclick = function () {
  taskList.removeChild(li);
};

// Append the remove button to the list item, then the item to the task list
li.appendChild(removeBtn);
taskList.appendChild(li);

// Clear the task input field for the next entry
taskInput.value = '';
}

// Attach event listener to the add button to call addTask on click
addButton.addEventListener('click', addTask);

// Attach event listener to task input to add task on 'Enter' key press
taskInput.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
addTask();
}
});
});