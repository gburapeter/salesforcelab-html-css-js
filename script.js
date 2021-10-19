class ToDo {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  getName() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }
  getCompleted() {
    return this.completed;
  }

  setFlag(val) {
    this.completed = val;
  }
}
var tasks = new Array();

const myList = new ToDo('Office meeting', 'Go to office', true);

console.log(myList.getName());
console.log(myList.getDescription());
console.log(myList.getCompleted());

/** Adding elements by our Class 
const Task0 = new ToDo("Sports", "Play some sports", false);
const Task1 = new ToDo("Salesforce Lab","Study a bit", false);
const Task2 = new ToDo("Eat lunch", "Cook and eat food", false); */

function addTask(title, description, completed) {
  var ourList = document.getElementById('myList');
  var taskTitle = document.createElement('dt');
  var checkBox = document.createElement('input');
  var taskDescription = document.createElement('dd');
  /*taskTitle.innerHTML = document.getElementById("taskName").value;
    checkBox.type = "checkbox";
    taskDescription.innerHTML = document.getElementById("taskDescription").value;
    */
  taskTitle.innerHTML = title;
  checkBox.type = 'checkbox';
  checkBox.checked = completed;
  taskDescription.innerHTML = description;

  ourList.appendChild(taskTitle);
  ourList.appendChild(checkBox);
  ourList.appendChild(taskDescription);
}

async function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      for (const element of data) {
        tasks.push(new ToDo(element.title, 'desc', element.completed));
      }
      for (const Task of tasks) {
        addTask(Task.getName(), 'desc', Task.getCompleted());
      }
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const ourList = document.getElementById('myList');
});
