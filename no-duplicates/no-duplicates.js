/*
No Duplicates

Given a string, remove any duplicate letters.

Example:
var input = "bookkeeper larry";

// Output: "bokepr lay"
Extra Credit:
Create a function that randomly removes a letter.
Create a function that scrambles the original string.
Create a function using regular expressions that remove all vowels.

*/

var string = "bookkeeper larry";
var endStr = [];

// endStr = removeDuplicates(string);
//console.log(endStr);

function removeDuplicates(string){
    var endString = [];
    var letterCounted = {};
    //set initial letter object values to false
    for (i = 0; i < string.length; i++){   
        letterCounted[string[i]] = false;
    }
    for (i = 0; i < string.length; i++){
        //skip if its a space
        if (string[i] === " "){
            endString.push(string[i]);
        }
        else {
            // console.log(string[i])
            if (letterCounted[string[i]] === false){
                letterCounted[string[i]] = true;
                endString.push(string[i]);
            }
        }
    }
    return endString;
}

function removeRandomLetter(string){
    while skipped != /^[A-Za-z]+$/{
        skipped = Math.floor(Math.random() * string.length);
    {}
    newArr = []
    for(i = 0; i < string.length; i++){
        if (i === skipped){
            console.log("this is the one to skip " + string[i])
        } else {
            newArr.push(string[i])
        }
    }
    return newArr
}
var test = removeRandomLetter(string);
console.log(test);