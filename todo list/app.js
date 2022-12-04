// Create an empty array to store our to-do list items
let toDoList = [];

// Add a new item to the to-do list
function addToDo(item) {
  toDoList.push(item);
}

// Remove an item from the to-do list
function removeToDo(item) {
  let index = toDoList.indexOf(item);
  if (index > -1) {
    toDoList.splice(index, 1);
  }
}

// Display the to-do list on the page
function displayToDoList() {
  let list = document.createElement("ul");
  for (let i = 0; i < toDoList.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = toDoList[i];
    list.appendChild(item);
  }
  document.getElementById("to-do-list").appendChild(list);
}

// Add some items to the to-do list
addToDo("Take out the trash");
addToDo("Do the dishes");
addToDo("Buy groceries");

// Display the to-do list
displayToDoList();

// Remove an item from the to-do list
removeToDo("Do the dishes");

// Display the updated to-do list
displayToDoList();
