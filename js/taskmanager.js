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
}
let taskPlanner = new TaskManager ();
console.log(taskPlanner)
taskPlanner.addTask("Clean office", "Vacuum", "Aisha","12/07/2021","In-Progress");

taskPlanner.addTask("Organise files", "organise by folder", "Aisha","12/07/2021","In-Progress");
console.log(taskPlanner)
export {TaskManager}