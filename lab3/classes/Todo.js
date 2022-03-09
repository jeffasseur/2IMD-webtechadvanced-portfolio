export default class Todo {
    constructor(title) {
        this.title = title;
      // HINT🤩
      // use a constructor to set basic property values
      // this.title = title;
    }
  
    createElement() {
      let input = this.title;
      let priority = input.split(":", 2);

      let li = document.createElement("li");
      li.innerHTML = this.title;
      // let todo = new Todo(todoItem);

      // switch case for priority check
      switch (priority[0]) {
        case 'low': li.classList.add("prior-low");
        break;

        case 'medium': li.classList.add("prior-medium"); 
        break;

        case 'high': li.classList.add("prior-high"); 
        break;

        default: li.classList.add("prior-medium");
      } 

      return li;
      // HINT🤩
      // don't forget to hook up an event listener for the click event
    }
  
    markDone(e) {
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      // should return a full <li> with the right classes and innerHTML
      let todo = this.createElement(); 
      document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  }
  