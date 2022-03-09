import Todo from './Todo.js';

export default class App {
    constructor() {
      console.log("🍕");
      // HINT🤩
      // set up the enter Key
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this));
      // this.setupEventListeners();
      this.setupEventListeners();
      // when the app loads, we can show previously saved items from localstorage
      // this.loadFromStorage();
    }
  
    setupEventListeners() {
      console.log("👂🏽");
      // HINT🤩
      // pressing the enter key in the text field triggers the createItem function
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it
    }
  
    createItem(e) {
        if(e.key === "Enter") {
          // console.log("📕");

          let todoItem = document.querySelector("#add-item-text").value;
          // let priority = todoItem.split(":", 2);
          let todo = new Todo(todoItem);

          todo.add();

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
    }
  
    reset() {
      // this function should reset the form / clear the text field
      document.querySelector("#add-item-text").value= " ";
    }
  }
  