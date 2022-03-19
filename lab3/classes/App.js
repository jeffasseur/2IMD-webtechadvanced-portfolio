import Todo from './Todo.js';

export default class App {
    constructor() {
      console.log("🍕");

      this.setupEventListeners();
      this.loadFromStorage();
    }
  
    setupEventListeners() {
      console.log("👂🏽");
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this));
      // HINT🤩
      // pressing the enter key in the text field triggers the createItem function
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it
    }
  
    createItem(e) {
        if(e.key === "Enter") {
          console.log("📕");

          let todoItem = document.querySelector("#add-item-text").value;
          let todo = new Todo(todoItem);

          todo.add();
          todo.saveToStorage();
          this.reset();
        }
        //console.log(this);
      // HINT🤩
      // this function should create a new todo by using the Todo() class
      // todo.saveToStorage();
    }
  
    loadFromStorage() {
      // HINT🤩
      // load all items from storage here and add them to the screen
      // use the Todo class to create the elements
      let todos = JSON.parse(localStorage.getItem('todos'));
      if(todos !== null) {
        todos.forEach((title) => {
          let todo = new Todo(`${title['priority']}:${title['title']}`);
          if(title['status'] === "done") {
            todo.add("done");
          }
          else {
            todo.add();
          }
        })
      }
    }
  
    reset() {
      // this function should reset the form / clear the text field
      document.querySelector("#add-item-text").value= "";
    }
  }
  