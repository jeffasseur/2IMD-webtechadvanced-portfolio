export default class Todo {
    constructor(title) {
        
        this.title = title;
      // HINT🤩
      // use a constructor to set basic property values
      // this.title = title;
    }
  
    createElement() {
      // HINT🤩
      // this method will create the HTML structure with the correct classes, based on the todo priority
      // let newNote = document.createElement("li");
      // check if the todo item includes a priority like medium: to generate the correct classnames
      // don't forget to hook up an event listener for the click event
      // return newNote;
    }
  
    markDone(e) {
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      // let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  }
  