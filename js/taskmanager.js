const createTaskHTML = (id, name, description, assignedTo, dueDate, status) => {
  const html = `<li class="card" data-task-id="${id}" style="min-width: 50vw"> 
     <div class="card-body">
     <h4 class="card-title">${name}</h4>
          <p class="card-text">
              ${description}
          </p>
          <p class="card-text"><span class="h6 strong">Assigned to:</span> ${assignedTo}</p>
          <p class="card-text"><span class="h6 strong">Due Date: </span> ${dueDate}</p>
          <div class="card-footer row">
              <div class="col-6">
                  <p class="card-text"><b>Status: ${status}</b></p>
              </div>
              <div class="col-3">
                  <button class="btn btn-outline-success done-button">
                      Done
                  </button>
              </div>
              <div class="col-3">
                  <button class="btn btn-outline-danger delete-button">
                      Delete
                  </button>
              </div>
          </div>
         </div>
      </li>`
      return html;
}
//const taskhtml = createTaskHTML("clean office","vacuum the floor","Aisha",22/12/2021,"In-progress")
//console.log(taskhtml);
class TaskManager {
    constructor(currentId = 1) {
      this.tasks = [];
      this.currentId = currentId;
    }
  
  addTask(TaskName, description, assignedTo, dueDate, status) {
  
    
    const task = {
      id: this.currentId++,
      name: TaskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push( task );
  }
  getTaskById(taskId) {
    // Create a variable to store the found task
    let foundTask;
    // Loop over the tasks and find the task with the id passed as a parameter
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];
      // Check if its the right task by comparing the task's id to the id passed as a parameter
      if (task.id === taskId) {
        // Store the task in the foundTask variable
        foundTask = task;
      }
    }
    // Return the found task
    return foundTask;
  }
  render (){
    var taskHtmlList = [];
    
    for (let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i];
      const date = new Date (task.dueDate);
      const formattedDate = date.getDate()+ "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const taskHtml = createTaskHTML(
        task.id,
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status
      
      );
      taskHtmlList.push(taskHtml);
    }
    const taskHtml = taskHtmlList.join("\n");
   const tasksList = document.querySelector("#tasklist");
    tasksList.innerHTML = taskHtml;
  }
  save() {
    // Create a JSON string of the tasks
    const tasksJson = JSON.stringify(this.tasks);

    // Store the JSON string in localStorage
    localStorage.setItem("tasks", tasksJson);

    // Convert the currentId to a string;
    const currentId = String(this.currentId);

    // Store the currentId in localStorage
    localStorage.setItem("currentId", currentId);
  }

  load() {
    // Check if any tasks are saved in localStorage
    if (localStorage.getItem("tasks")) {
      // Get the JSON string of tasks in localStorage
      const tasksJson = localStorage.getItem("tasks");

      // Convert it to an array and store it in our TaskManager
      this.tasks = JSON.parse(tasksJson);
    }

    // Check if the currentId is saved in localStorage
    if (localStorage.getItem("currentId")) {
      // Get the currentId string in localStorage
      const currentId = localStorage.getItem("currentId");

      // Convert the currentId to a number and store it in our TaskManager
      this.currentId = Number(currentId);
    }
  }
  deleteTask(taskId) {
    // Create an empty array and store it in a new variable, newTasks
    const newTasks = [];

    // Loop over the tasks
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];

      // Check if the task id is not the task id passed in as a parameter
      if (task.id !== taskId) {
        // Push the task to the newTasks array
        newTasks.push(task);
      }
    }

    // Set this.tasks to newTasks
    this.tasks = newTasks;
  }
}
// let taskPlanner = new TaskManager ();
// console.log(taskPlanner)
// taskPlanner.addTask("Clean office", "Vacuum", "Aisha","12/07/2021","In-Progress");

// taskPlanner.addTask("Organise files", "organise by folder", "Aisha","12/07/2021","In-Progress");
// console.log(taskPlanner)
export {TaskManager}
