export default class Todo {
    constructor(title, priority, status) {
        this.title = title;
        this.priority = priority;
        this.status = status;
    }
  
    createElement() {
      let li = document.createElement("li");

      if(this.title.startsWith("low:")) {
        li.classList.add("prior-low");
        this.title = this.title.replace("low:", "");
        this.priority = "low";
      }
      else if(this.title.startsWith("medium:")) {
        li.classList.add("prior-medium");
        this.title = this.title.replace("medium:", "");
        this.priority = "medium";
      }
      else if(this.title.startsWith("high:")) {
        li.classList.add("prior-high");
        this.title = this.title.replace("high:", "");
        this.priority = "high";
      }
      else {
        li.classList.add("prior-medium");
        this.title = this.title;
        this.priority = "medium";
        // console.log("skip if elses tot laatste");
        // console.log(this);
      }
      
      
      // don't forget to hook up an event listener for the click event
      li.innerHTML = this.title;
      li.addEventListener("click", this.markDone.bind(li));
      
      return li;
      
    }
  
    markDone(e) {
      let todos = localStorage.getItem('todos');
      todos = JSON.parse(todos) || ("todos");

      if(this.className.includes("done")) {
        this.remove();
        todos.forEach((element, index) => {
          if(element['title'] === this.innerHTML) {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
          }
        });

        // localStorage.removeItem();
      }
      else {
        // this function should mark the current todo as done, by adding the correct CSS class
        this.classList.add("done");
        todos.forEach((element, index) => {
          if(element['title'] === this.innerHTML) {
            let todo = todos[index];
            todo['status'] = "done";
            localStorage.setItem("todos", JSON.stringify(todos));
          }
        })
      }
    }
  
    add(status) {
      // console.log(this.title + " add");
      // HINT🤩
      // this function should append the note to the screen somehow
      // should return a full <li> with the right classes and innerHTML
      let todo = this.createElement(); 

      if (status) {
        todo.classList.add('done');
      }

      document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify

      let todos = localStorage.getItem("todos");
      todos = JSON.parse(todos) || [];
      todos.push({"title": this.title, "priority": this.priority, "status": this.status});
      localStorage.setItem("todos", JSON.stringify(todos));

      // console.log("Saved to Storage");
    }
  }
  