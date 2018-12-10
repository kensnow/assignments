/*
Loops help you reduce your lines of code when performing a task multiple times. Here you will learn how to use some of the different looping structures. Beware of infinite loops!

Write a function that accepts a string as input. Write a loop and
add each letter of the string to an array. Then return the that new array.

Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and returns the position of the first occurrence of the specified character. If the character is not found, tell that to the user by returning "Character not found!".

Write a function that accepts an array of numbers as a parameter.
Return "Found 42!" when the number 42 is found, return "42 not found!" if it is not in the array.

Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()

*/

string = "Write a function that accepts a string as input. Write a loop and add each letter of the string to an array."

function getIndividualLetters(string){

    newArr = string.split("")
    return newArr
}

console.log(getIndividualLetters(string))

function findLetterInString(string, letter){

    var newArr = string.split("")
    for (i = 0; i < string.length; i++){
        if (letter === newArr[i]){
            return i
        }
    }
    return "Character not found!"
    
}

console.log(findLetterInString(string, "g"))



