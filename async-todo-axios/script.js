
const addButton = document.querySelector("#addTodid")
const inputs = document.querySelectorAll(".input")
const url = "https://api.vschool.io/kensnow/todo/"

addButton.addEventListener("click", e => {
    let todo = getTodoInput(inputs);
    postRequest(todo)

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

//take todo object & render. if it is an edit,refrence object to be edited
function appendTodo(toDo, editDiv){
    let todoDiv = {}
    if (editDiv){
        todoDiv = editDiv
    } else {
        todoDiv = document.createElement("div")
    }
    let list = document.querySelector("#the-list")
    //create elements
    
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
    
    editButton.addEventListener("click", e => {
        
        //get placeholder text
 
        let titleText = title.textContent
        let descText = desc.textContent
        let valueText = value.value
        let updateTodo = {}
        
        //remove items to be replaced
        editButton.remove()
        title.remove()
        desc.remove()
        value.remove()
        
        title = document.createElement("input")
        desc = document.createElement("input")
        value = document.createElement("input")
        submitButton = document.createElement("button")
        
        //set attributes
        title.setAttribute("type", "text")
        title.setAttribute("placeholder", titleText)
        title.setAttribute("class", "input")

        desc.setAttribute("type", "text")
        desc.setAttribute("placeholder", descText)
        desc.setAttribute("class", "input")

        value.setAttribute("type", "number")
        value.setAttribute("placeholder", toDo.price)
        value.setAttribute("class", "input")

        submitButton.setAttribute("class", "edit")
        submitButton.textContent = "Submit"

        todoDiv.style.display = "grid"
        value.style.width = "50px"
        
        todoDiv.appendChild(submitButton)
        todoDiv.appendChild(title)
        todoDiv.appendChild(desc)
        todoDiv.appendChild(value)
        
        //create event listener on submit, to send back data to api
        submitButton.addEventListener("click", function(e){
            //title,description,price,img,completed = false,id
            // input = this.parent
            let children = this.parentElement.childNodes
                
                if (children[3].value && children[3].value !== titleText){
                    updateTodo.title = children[3].value       
                } 
                if (children[4].value && children[4].value !== desc){
                    updateTodo.description = children[4].value
                }
                if (children[5].value && children[5].value !== value){
                    updateTodo.price = children[5].value
                } 
                
                updateTodo.completed = toDo.completed;
                title.remove()
                desc.remove()
                value.remove()
                submitButton.remove()   
                
            // let updateTodo = new Todo(title,desc,value)
 
            axios.put(url + toDo.id, updateTodo)
                .then(response => {
                    appendTodo(response.data, todoDiv)

                })
        })
    })

    
    todoDiv.addEventListener("click", function(e){
        //update completed status to toggle true/false
        //check to ensure user is not trying to click on buttons
        if(e.target.localName != "button"){
            //toggle toDo.completed, then  send changes to server
            toDo.completed = !toDo.completed

            axios.put(url + toDo.id, toDo)
                .then(response =>  {
                    //update html text once reply is recieved
                    this.lastElementChild.innerHTML = `completed: ${toDo.completed}`
                    for (let i = 0; i < this.childNodes.length; i++){
                        for (let n = 0; n < this.childNodes[i].classList.length; n++){
                            if (this.childNodes[i].classList[n] === "strikethrough"){
                                let child = this.childNodes[i]
                                toDo.completed ? child.style.textDecoration = "line-through" : child.style.textDecoration = "none"
                            }
                        }
                    }
                })
                .catch(function(err){
                    console.log(err)
                })
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
    //append prepared elements to the Todo div
    [deleteButton, editButton,title, desc, value, status].forEach(el => todoDiv.appendChild(el))
 
    todoDiv.style.borderLeft ="6px solid rgb(255, 219, 77)"
    //append to main doc
    list.appendChild(todoDiv)
   

}

const todoArr = getData()

//get inputs from submit click from array
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
        // let todo = new Todo(title, description, price, img)
        let todo = {
            title,
            price,
            description,
            img

        }
        
        return todo
    }
}

function postRequest (todo){
    axios.post(url, todo)
    .then(function(response){
        console.log ("response:" + response.data)
        let todo = new Todo(response.data.title, response.data.description, response.data.price, response.data.imgUrl,response.data.completed, response.data._id)
        appendTodo(todo)
 
    })
    .catch(function(err){
        console.log(err)
    })
}