class TodoManager {
    constructor(todos) {
      this.todos = todos;
    }
    getCompleted(){
        let completed = []
        for (let i = 0; this.todos.length; i++){
            if (this.todos[i]['is_completed'] === true){
              completed.push(this.todos[i]['title']);
            }
          return completed;
        }
    }
    getPending(){
        let pending = []
        for (let i = 0; this.todos.length; i++){
            if (this.todos[i]['is_completed'] === false){
                pending.push(this.todos[i]['title']);
            }
          return pending;
        }
    };
    getFirst(){
      //break
    }
    getLast(){
      //break
    }
    getCount(){
      //break
    }
    markAsCompleted(){
      //break
    } 
    add(){
      //break
    }
    allCompleted(){
      //break
    }
}

try {
  const initialTodos = [{
    title: "Learn JavaScript",
    is_completed: true
  }, {
    title: "Practice flashcards",
    is_completed: false
  }];
  const todoManager = new TodoManager(initialTodos);

  console.log(todoManager.getCompleted()); //returns completed todos
  console.log(todoManager.getPending()); //returns todos that are not completed
  console.log(todoManager.getFirst());
  console.log(todoManager.getLast());
  console.log(todoManager.getCount());
  todoManager.markAsCompleted("Practice flashcards"); //receives a title, finds todo with that title and marks it as completed
  todoManager.add({
    title: "Recap flashcards",
    is_completed: true
  });
  //when is_completed is not defined, it should default to false
  todoManager.add({
    title: "Get some rest"
  });
  console.log(todoManager.allCompleted()); //returns true when all todo items are completed
  console.log(todoManager.allPending()); //returns true when all todo items are pending
  console.log(todoManager.exportCsv()); //returns Comma Separated Values of titles "Todo title, Another todo title"

} catch (error) {
  // catch any errors 
}