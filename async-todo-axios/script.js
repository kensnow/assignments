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
const addButton = document.querySelector("#addTodid")
const inputs = document.querySelectorAll(".input")
const url = "https://api.vschool.io/kensnow/todo/"

addButton.addEventListener("click", e => {
    getTodoInput(inputs);
})

function getData(){
    axios.get(url)
        .then(function(response){
            const todoArr = updateList(response.data)
            // console.log(response.data)
            return todoArr
     
        })
        .catch(function(err){
            console.log(err)
        })
        
        
}
//toDoConstructor
function Todo (title,description,price,img,completed = false,id){
    this.title = title,
    this.description = description,
    this.price = price > 0 ? price: 10,
    this.img = img,
    this.completed = completed,
    this.id = id
}

function updateList(data){
    //foreach object in array, create new ToDo constructors with data &, append to list on screen
    
    let todoArr = []
    data.forEach(function(todo){
    
        let newTodo = new Todo(todo.title, todo.description, todo.price, todo.imgUrl, todo.completed, todo._id)
        appendTodo(newTodo)
        todoArr.push(newTodo)
        // console.log(newTodo)
       
    })
    return todoArr;
}

function appendTodo(toDo){
    let list = document.querySelector("#the-list")
    //create elements
    let todoDiv = document.createElement("div")
    let title = document.createElement("h4")
    let desc = document.createElement("p")
    let value = document.createElement("p")
    let img = document.createElement("div")
    let status = document.createElement("p")
    let deleteButton = document.createElement("button")
    let editButton = document.createElement("button")
    //create text nodes
    let titleNode =  document.createTextNode(toDo.title)
    let descNode = document.createTextNode(toDo.description)
    let valueNode = document.createTextNode(`value: ${toDo.price}`)
    let imgNode = document.createTextNode(toDo.imgURL)
    let statusNode = document.createTextNode(`completed: ${toDo.completed}`)
    let deleteButtonNode = document.createTextNode("Delete")
    let editButtonNode = document.createTextNode("Edit")
    // add event listeners
    deleteButton.addEventListener("click", e => {
        axios.delete(url + toDo.id)
            .then(todoDiv.remove())
            .catch(function(err){
                console.log(err)
            })
    })
    todoDiv.addEventListener("click", function(e){
        //update completed status to toggle true/false
        console.log (e.target)
        if(e.target.localName != "button"){
            toDo.completed = !toDo.completed
            // console.log (this)
            axios.put(url + toDo.id, toDo)
                .then(response =>  {
                    this.lastElementChild.innerHTML = `completed: ${toDo.completed}`
                })
                .catch(function(err){
                    console.log(err)
                })
            //
            for (let i = 0; i < this.childNodes.length; i++){
                for (let n = 0; n < this.childNodes[i].classList.length; n++){
                    if (this.childNodes[i].classList[n] === "strikethrough"){
                        let child = this.childNodes[i]
                        // console.log(this.childNodes[i])
                        toDo.completed ? child.style.textDecoration = "line-through" : child.style.textDecoration = "none"
                        
                    }
                }
            }
        }
    })

    //append text to elemnts
    title.appendChild(titleNode)
    desc.appendChild(descNode)
    value.appendChild(valueNode)
    img.appendChild(imgNode)
    status.appendChild(statusNode)
    deleteButton.appendChild(deleteButtonNode)
    editButton.appendChild(editButtonNode)
    //add classes and ids to eleemnts
    title.classList.add("todo", "title", "strikethrough")
    desc.classList.add("todo", "description", "strikethrough")
    value.classList.add("todo", "value", "strikethrough")
    img.classList.add("todo", "img")
    status.classList.add("todo", "status", "strikethrough")
    deleteButton.classList.add("todo", "delete")
    editButton.classList.add("todo", "edit")
    todoDiv.classList.add("todo","item")
    
    //style strikethroughs appropriately
    if(toDo.completed){
        title.style.textDecoration = "line-through" 
        desc.style.textDecoration = "line-through"
        value.style.textDecoration = "line-through"
        status.style.textDecoration = "line-through"
    } else {

        title.style.textDecoration = "none" 
        desc.style.textDecoration = "none"
        value.style.textDecoration = "none"
        status.style.textDecoration = "none"
    }

    //append child elements to div
    todoDiv.appendChild(deleteButton)
    todoDiv.appendChild(editButton)
    todoDiv.appendChild(title)
    todoDiv.appendChild(desc)
    todoDiv.appendChild(value)
    // todoDiv.appendChild(img)
    todoDiv.appendChild(status)

    //append to main doc
    list.appendChild(todoDiv)
   

}
const todoArr = getData()

function getTodoInput(inputs){
    let title, description,img = ""; 
    

    inputs.forEach(function(element){

        switch(element.id){
            case "input-title":
                element.value == "" ? alert("Title must be entered!") : title = element.value;
                
                break;
            case "input-value":
                price = element.value;
                break;
            case "input-description":
                description = element.value;
                break;
            case "input-img":
                img = element.value;
                break;
            default:
                alert("Problem with " + element)

        } //end switch
        // title is required, if it exists, create todo object

    })
    if (title){
        let todo = new Todo(title, description, price, img)
        console.log("title, price, description, img" + title, price, description, img)
        postRequest(todo)
    }
}

function postRequest (todo){
    axios.post(url, todo)
    .then(function(response){
        console.log ("response:" + response.data)
        appendTodo(response.data)
 
    })
    .catch(function(err){
        console.log(err)
    })
}