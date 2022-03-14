export default class Todo {
    constructor(title) {
        this.title = title;
        // console.log(title);
      // HINT🤩
      // use a constructor to set basic property values
    }
  
    createElement() {
      let li = document.createElement("li");
      // console.log(this.title + " createItem");

      if(this.title.startsWith("low:")) {
        console.log("priority low");
        li.classList.add("prior-low");
        li.innerHTML = this.title.slice(4);
      }
      else if(this.title.startsWith("medium:")) {
        li.classList.add("prior-medium");
        li.innerHTML = this.title.slice(7);
      }
      else if(this.title.startsWith("high:")) {
        li.classList.add("prior-high");
        li.innerHTML = this.title.slice(5);
      }
      else {
        li.classList.add("prior-medium");
        li.innerHTML = this.title;
        // console.log("skip if elses tot laatste");
        // console.log(this);
      }
      
      // don't forget to hook up an event listener for the click event
      li.prototype = this;
      li.addEventListener("click", this.markDone);
      
      console.log(li);
      return li;
      
    }
  
    markDone() {
      // HINT🤩
      // if the item is clicked, but was already marked as done, remove the item from the list
      if(this.classList.contains("done")) {
        this.remove();
      }
      else {
        // this function should mark the current todo as done, by adding the correct CSS class
        this.classList.add("done");
      }
    }
  
    add() {
      // console.log(this.title + " add");
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
  