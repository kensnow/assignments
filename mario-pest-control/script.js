/*

Mario Pest Control

Princess Peach has a huge infestation of Goombas, Bob-ombs, and Cheep-cheeps, and has commissioned Mario to take care of her pest problem. Mario did the job, but he is having trouble keep track of how many he has caught and has asked you to build him a website that keeps track of how many baddies he caught for Princess Peach so he can send her a bill.

Pricing:

Goombas: 5 Coins
Bob-ombs: 7 Coins
Cheep-cheeps: 11 Coins
Baddies Caught:

The number of baddies caught will be entered into an input field

Total Price

This will be dynamicly depending on how many baddies were caught.

Project Requirements
The website must contain the following:

A list displaying each baddie by type. Each list item must:
Have baddie image
Have baddie name
Show price of that baddie
Have an input box to enter the total caught of that type
A total price at the bottom that adds sums the total cost of baddies caught
(must use Javascript for this math - no hard coded values)

A footer showing:

Mario's email address
Mario's company website url
Mario's physical address
A large title at the top of the page entitled "Mario Pest Control"
Passing Criteria: Visual Inspection by Instructor
Student demonstrated a solid understanding with the following levels of the skills tree:

Static Websites, Level 1
CSS Selectors
Colors in CSS
Fonts in CSS
Using external CSS stylesheets and JavaScript files
Deployment, Level 1
Opening an HTML document in browser
Extra Credit
Build Mario Pest Control website to be responsive, meaning it looks great when shrunk down to the screen size of a smart phone.



*/

var goomba = 5;
var bobomb = 7;
var cheepCheep = 11;

var total = document.querySelector("total-display")

var inputArr = document.querySelectorAll(".input")
//establish handlers for buttons, total, and input fields

for(i=0; i< inputArr.length; i++){
    inputArr[i].addEventListener("input",function(e){
        updateTotal(e);
        
    })
}

function getTotalEntered() {

}
function buttonFunctionality() {

}
function updateTotal(e){
    
}