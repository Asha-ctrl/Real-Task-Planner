import {TaskManager} from './taskmanager.js';
//console.log(form);
let taskManager = new TaskManager ();
//console.log(taskPlanner)
//taskPlanner.addTask("Clean office", "Vacuum", "Aisha","12/07/2021","In-Progress");
// Load the tasks from localStorage
taskManager.load();
// Render the loaded tasks to the page
taskManager.render();

const form = document.querySelector("#new-task-form");

form.addEventListener('submit', addNewTask);
function addNewTask(event){
  console.log("submitbutton")
  const validateName = document.querySelector("#new-task-name");
  const validateDescription = document.querySelector("#new-task-description");
  const validateAssignedTo = document.querySelector("#new-task-assigned-to");
  const validateDueDate = document.querySelector("#new-task-due-date");
  const validateStatus = document.querySelector("#new-task-status");
  let validationFail = 0;
 console.log(validateName);
  event.preventDefault();

  const clearFormFields = () => {
    validateName.value = "";
    validateDescription.value = "";
    validateAssignedTo.value = "";
    validateStatus.value = "In Progress";
    validateDueDate.value = "";
    validateName.classList.remove("is-valid");
    validateDescription.classList.remove("is-valid");
    validateAssignedTo.classList.remove("is-valid");
    validateStatus.classList.remove("is-valid");
    validateDueDate.classList.remove("is-valid");
  };

  //event.stopPropagation();
  console.log("Task Name :" + validateName.value.length);
  console.log("Task Description :" + validateDescription.value.length);
  console.log("Task Assigned To :" + validateAssignedTo.value.length);
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);
  
 // Form validation for Task Name Field min length 5
 if (validateName.value.length > 5) {
    validateName.classList.add("is-valid");
    validateName.classList.remove("is-invalid");
  } else {
    validateName.classList.add("is-invalid");
    validateName.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Description Field min length 5
  console.log(validateDescription.value.length)
  if (validateDescription.value.length > 5) {
    validateDescription.classList.add("is-valid");
    validateDescription.classList.remove("is-invalid");
  } else {
    validateDescription.classList.add("is-invalid");
    validateDescription.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Assigned Field min length 5
  if (validateAssignedTo.value.length > 5) {
    validateAssignedTo.classList.add("is-valid");
    validateAssignedTo.classList.remove("is-invalid");
  } else {
    validateAssignedTo.classList.add("is-invalid");
    validateAssignedTo.classList.remove("is-valid");
    validationFail++;
  }  
  
  if (validateDueDate.value) {
    validateDueDate.classList.add("is-valid");
    validateDueDate.classList.remove("is-invalid");
  } else {
    validateDueDate.classList.add("is-invalid");
    validateDueDate.classList.remove("is-valid");
    validationFail++;
  }
  
  if (validateAssignedTo.value) {
    validateAssignedTo.classList.add("is-valid");
    validateAssignedTo.classList.remove("is-invalid");
  } else {
    validateAssignedTo.classList.add("is-invalid");
    validateAssignedTo.classList.remove("is-valid");
    validationFail++;
  }
 


if (validationFail > 0) {
  validationFail = 0;
  return;
} else {
  // Push the valid input into our tasks array
  taskManager.addTask(
    validateName.value,
    validateDescription.value,
    validateAssignedTo.value,
    validateDueDate.value,
    validateStatus.value
  );
  alert(JSON.stringify(taskManager.tasks));

  clearFormFields();
  taskManager.save();
  taskManager.render();
}
};
const taskList = document.querySelector("#tasklist");
// Add an 'onclick' event listener to the Tasks List
taskList.addEventListener("click", (event) => {
  // Check if a "Mark As Done" button was clicked
  if (event.target.classList.contains("done-button")) {
    // Get the correct parent Task, yours might be slightly different
    // Use console.log(event.target.parentElement) to see
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;
    // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);
    // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);
    // Update the task status to 'DONE'
    task.status = "Done";
    taskManager.save();
    // Render the tasks
    taskManager.render();
    event.target.style.display = "none";
    event.target.disabled = true 
    console.log(event.target.classList);
  }

// Check if a "Delete" button was clicked
if (event.target.classList.contains("delete-button")) {
  // Get the parent Task
  const parentTask =
    event.target.parentElement.parentElement.parentElement.parentElement;

  // Get the taskId of the parent Task.
  const taskId = Number(parentTask.dataset.taskId);

  // Delete the task
  taskManager.deleteTask(taskId);

  // Save the tasks to localStorage
  taskManager.save();

  // Render the tasks
  taskManager.render();
  


}
});

