/*
No way a
08 JANUARY 2018
Make a function that takes a string and returns that string with all instances of the letter 'a' removed. Must handle lowercase and uppercase letters.

function removeA(str) {
    // Your code here
}

console.log(removeA("Aye matey!"))  // displays "ye mtey!"
*/

testString = "Make A function that takes A string and returns that string with all instances of the letter 'a' removed. Must handle lowercase and uppercase letters."

removeA(testString);

function removeA(str){
    splitStr = str.split("")
    while(splitStr.indexOf("A") > 0){
        splitStr.splice(splitStr.indexOf("A"),1)
        // console.log("removed at: " + splitStr.indexOf("A"))
    }
    while(splitStr.indexOf("a") > 0){
        splitStr.splice(splitStr.indexOf("a"),1)
        // console.log("removed at: " + splitStr.indexOf("A"))
    }

    console.log(splitStr.join(""))
}