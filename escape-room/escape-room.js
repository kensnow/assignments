/*
Escape Room
04 AUGUST 2017
Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.

Game start:
Tell the user their options:

Put hand in hole
Find the key, or
Open the door
They can't open the door unless they find the key first.
They die if they put their hand in the hole.

JavaScript tools that may help
while loop
variables
booleans
if/else if/else OR switch statement
readline-sync (syntax for installing and using below)
To use readline-sync in your game:
In terminal:

# cd into escape room's folder
npm install readline-sync
In your JavaScript code:

var readline = require("readline-sync");
var name = readline.question("What is your name? ");

*/

var rs = require("readline-sync") 

//set up win and loss conditions/variables

var keyFound = false;
var winCondition = false;
var endGame = false
//set up while/game loop (always set to true)

while (!endGame){

    //prompt user for stuff
    var options = ["Put hand in hole", "Search for key", "Open door"];
    var index = rs.keyInSelect(options, "What do you choose?");

    switch (index) {
        case 0:
            endGame = true;
            break;
        case 1:
            if (!keyFound){
                keyFound = true;
                console.log("You found a rusty key!\n")
            } else {
                console.log("There's only some dirty clothes, a locked door, and a hole in the floor\n")
            }
            break;
        case 2:
            if (!keyFound){
                console.log("Door is locked...\n")
            } else {
                console.log("You have unlocked the door!\n")
                winCondition = true;
                endGame = true;
            }
            break;
        default:
            console.log("You can't escape that way!")
    }
}

winCondition ? console.log("You win!") : console.log("You have died...")
    //either player finds key
    //or player dies
//print result of game