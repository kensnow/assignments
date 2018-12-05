
/*
Loop Olympics

The exercise will get progressively harder and hard. You at least should get one medal, but feel free to go the extra mile!

Preliminaries
Write a for loop that prints to the console the numbers 0 through 9.
Write a for loop that prints to the console 9 through 0.
Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]

*/

// for (i = 0; i < 10; i++){
//     console.log(i);
// }

// for (i = 9; i >= 0 ; i--){
//     console.log(i);
// }
// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }
/*

Bronze Medal
Write a for loop that will push the numbers 0 through 9 to an array.
Write a for loop that prints to the console only even numbers 0 through 100.
Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

*/
// arr = [];
// for (i = 0; i < 10; i++){
//     arr.push(i);
// }
// console.log(arr)

// for (i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// fruitArr = [];

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (i = 0; i < fruit.length; i++){
//     if (i % 2 === 0){
//         fruitArr.push(fruit[i])
//     }
// }
// console.log(fruitArr)


/*

Silver Medal
Write a loop that will print out all the names of the people of the people array
Write a loop that pushes the names into a names array, and the occupations into an occupations array.
Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
*/
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
/*
var names = [];
var occupation = [];

for (i = 0; i < peopleArray.length; i++){

    names.push(peopleArray[i].name)
    occupation.push(peopleArray[i].occupation)
}

console.log(names)
console.log(occupation)
*/

// var evenNames = [];
// var oddOcc = [];

// for (i = 0; i < peopleArray.length; i++){
//     if (i % 2 === 0){
//         evenNames.push(peopleArray[i].name)
//     } else {
//         oddOcc.push(peopleArray[i].occupation)
//     }
// }
// console.log(evenNames)
// console.log(oddOcc)

/*
Gold Medal
Create an array that mimics a grid like the following using for loops:
[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]
*/
// var grid = [];

// for (i = 0; i <= 3; i++){
//     grid.push([0,0,0])
//     // for (n = 0; n <= 3; n++){
//     //     grid[n].push(0);
//     // }
// }

// console.log(grid)

/*
2.Create an array that mimics a grid like the following using for loops:

[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]
*/

// var grid = [];

// for (i = 0; i < 3; i++){
//     grid.push([i,i,i])
//     // for (n = 0; n <= 3; n++){
//     //     grid[n].push(0);
//     // }
// }

// console.log(grid)
/*
3.Create an array that mimics a grid like the following using for loops:

[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
/*
*/
// var grid = [];

// for (i = 0; i < 3; i++){
//     grid.push([0,1,2])
//     // for (n = 0; n <= 3; n++){
//     //     grid[n].push(0);
//     // }
// }

// console.log(grid)

/*

Given a grid like the previous ones, write a for loop that would change every number to an x.
var grid = [[0, ...], 
            [0, ...], 
            [0,...], ...] 

*/