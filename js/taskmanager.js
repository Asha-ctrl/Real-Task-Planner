class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
    }
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

    this.tasks.push({ task });
  }
}