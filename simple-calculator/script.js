/*  

Simple HTML Calculator
07 JULY 2015 on Exercise, JavaScript, HTML, Problem Solving, Static Websites, Level 3
You are going to create a simple calculator that can Add, Subtract, and Multiply.

Requirements:

You will have one section (<div>) for each math operation (so 3 sections) total
Each section has two inputs to take the first and second numbers
Each section will have a button to perform the operation
You will inject the result into the HTML (not an alert)
Your website will have 3 colors
Your website will have proper padding/spacing to lay things out nicely

*/
var resultWindow = document.querySelector('#result-window')
var calculator = document.querySelector('#button-area');
var buttons = document.querySelectorAll('.button')
// var buttonArea = calculator.buttonArea;
calcObject = {
    firstNum: true,
    resultReq: false,
    num1: [],
    num2: [],
    operator: "",
    result: 0
}

console.log(buttons)
//set up event handlers for button clicks

// console.log(buttons)

for (i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(e){
        directButtonClick(e)
    })
}

function directButtonClick(e){
    //this is dangerous due to coersion
    if (e.target.innerText < 10){
        doNumberStuff(e);
        
    } else {
        //do operator stuff
        doOperatorStuff(e);
    }
}


function doOperatorStuff(e){
    //sort out operators manually
    mathFunc = e.target.innerText;
    if (mathFunc !== "="){
        calcObject.operator = mathFunc;
        resultWindow.innerText = mathFunc;
        calcObject.firstNum = false;
    } else {
        //equal sign is hit
        //get operator
        calcObject.resultReq = true;
        result =  eval(calcObject.num1.join("")+calcObject.operator+calcObject.num2.join(""))
        calcObject.result = result
        updateDisplay(calcObject)
    }
    // alert("operator is " + mathFunc)

}

function doNumberStuff(e){
    int = parseInt(e.target.innerText)
    //if we are on the first number
    //limit number array to 6 nums
    if (calcObject.firstNum){
        if (calcObject.num1.length < 9){
            calcObject.num1.push(int);
            updateDisplay(calcObject);
        }
    } else {
        if (calcObject.num2.length < 9){
            calcObject.num2.push(int);
            updateDisplay(calcObject);
        }
    }
}

function updateDisplay (calcObject){
    if (calcObject.firstNum){
        resultWindow.innerText = calcObject.num1.join("")
    } else if (!calcObject.firstNum && !calcObject.resultReq){
        resultWindow.innerText = calcObject.num2.join("")
    } else {
        resultWindow.innerText = calcObject.result
    }
}
//extra credit, set up event handlers for keppresses

// create function to update view window
// create function to store values to be compared
//equal sign to do the thing