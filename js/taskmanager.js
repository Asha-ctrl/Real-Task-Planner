function createTaskHTML (name, description, assignedTo,dueDate,status){
  const html = `
  <li class="card" style="min-width: 50vw">
      <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">
              ${description}
          </p>
          <p class="card-text">${assignedTo} To</p>
          <p class="card-text">${dueDate}</p>
          <div class="card-footer row">
              <div class="col-6">
                  <p class="card-text"><b>${status}</b></p>
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
const taskhtml = createTaskHTML("clean office","vacuum the floor","Aisha",22/12/2021,"In-progress")
console.log(taskhtml);
class TaskManager {
    constructor(currentId = 1) {
      this.tasks = [];
      this.currentId = currentId;
    }
  
  addTask(TaskName, description, assignedTo, dueDate, status) {
  
    
    const taskList = {
      id: this.currentId++,
      name: TaskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push( taskList );
  }
  render (){
    var taskHtmlList = [];
    
    for (let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i];
      const date = new Date (taskList.dueDate);
      const formattedDate = date.getDate()+ "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const taskHtml = createTaskHTML(
        taskList.TaskName,
        taskList.description,
        taskList.assignedTo,
        taskList.dueDate,
        taskList.status
      
      );
      taskHtmlList.push(taskHtml);
    }
  }
}
let taskPlanner = new TaskManager ();
console.log(taskPlanner)
taskPlanner.addTask("Clean office", "Vacuum", "Aisha","12/07/2021","In-Progress");

taskPlanner.addTask("Organise files", "organise by folder", "Aisha","12/07/2021","In-Progress");
console.log(taskPlanner)
//export {TaskManager}