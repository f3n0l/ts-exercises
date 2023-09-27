class TodoList {
  private tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }

  displayTasks() {
    console.log('Tasks:');
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

const todoList = new TodoList();
todoList.addTask('Start another exercise');
todoList.addTask('Start another another exercise');
todoList.addTask('Start another another another exercise');
todoList.displayTasks();
