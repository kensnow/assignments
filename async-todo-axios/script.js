/*
Axios Todo Project
28 AUGUST 2017
You will be creating a Todo list.

Use the totally rad todo API created by the legendary Bob. Here are the docs for it.

For the requirements below, you'll be building a frontend site that pulls your list of todos down from the API to display them, and allows the user to perform other CRUD methods on them as well.

For example, when the user adds a new todo, it will also POST that todo to the database using the provided API. This way, once the change is made, it's made permanently. When you refresh the page, since it's pulling from the data on the API, it should pull the current list of todos.

You will do the parts of this assignment in steps. You're encouraged to have someone else look at your code between each step. This will help you to become comfortable talking about code, and might open you up to other ways of doing things. Any suggestions given to you by fellow students should be considered, but don't feel obligated to apply the suggestions you get.

Requirements
Use the checklist in Trello to mark off each step before proceeding to the next.

Part 1 - GET
The user can see their current list of todos.
Todos show up as soon as the page loads.
If a todo item is complete, it should have a strikethrough line on it
Images should be displayed as images if there are any
Part 2 - POST
The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item.
A user should be able to give the item a price.
A user should be able to give the item a description.
A user should be able to attach an imgUrl to the item
Part 3 - PUT Part 1
Each todo will have a checkbox where it can be marked complete or incomplete
Checking the checkbox should update the database
Part 4 - DELETE
A user will be able to delete todos (this is different from marking a todo as "completed")
Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
Part 5 - PUT Part 2
Each Todo will have an "edit" button.
When clicked, the info will change to input boxes that are autofilled with the old Todo data
A user can change the value of these inputs
When the "edit" button is clicked, it will change to a "save" button.
When "save" is clicked, the form will disapear, and the new values will be displayed.
On save, the todo will be edited in the database
Read through the "using id" section in the API documentation to learn how to delete items using the item's unique id.
*/

function getData(){
    let request = axios.get("https://api.vschool.io/kensnow/todo")
        .then(function(response){
            updateList(response.data)

     
        })
        .catch(function(err){
            console.log(err)
        })
        
}
//toDoConstructor
function Todo (title,description,price,img,completed){
    this.title = title,
    this.description = description,
    this.price = price,
    this.img = img,
    this.completed = completed

}

function updateList(data){
    //foreach object in array, create new ToDo constructors with data &, append to list on screen
    let list = document.querySelector("#the-list")
    data.forEach(function(todo){
    
        let newTodo = new Todo(todo.title,todo.description,todo.price,todo.imgUrl,todo.completed)

        console.log(newTodo)
        console.log(list)
    })
}

function appendTodo(toDo){
    //create elements
    let todoDiv = document.createElement("div")
    let title = document.createElement("h4")
    let desc = document.createElement("p")
    let value = document.createElement("p")
    let img = document.createElement("div")
    let status = document.createElement("p")
    //create text nodes
    let titleNode =  document.createTextNode(toDo.title)
    let descNode = document.createTextNode(toDo.description)
    let valueNode = document.createTextNode(toDo.price)
    let imgNode = document.createTextNode(toDo.imgURL)
    let statusNode = document.screateTextNode(toDo.completed)
    //append text to elemnts
    //add classes and ids to eleemnts
}
const getRequest = getData()

