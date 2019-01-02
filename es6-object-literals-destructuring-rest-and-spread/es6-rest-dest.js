/*
Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(your code here) {  
    and here 
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


***
function collectAnimals(...animals){
    return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "Mr. Forrest"));

***
Write a function that returns a food object with the array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables){
    return {}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
*/


function combineFruit(fruit, sweets, vegetables){
    return {
        ...fruit,
        ...sweets,
        ...vegetables
    }
}

console.log(
    combineFruit(["apple", "pear"],
                 ["cake", "pie"],
                 ["carrot"]))

/*
 Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence(){
  return `We're going to have a good time in ${location} for ${duration}`
}
*/
/*

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
const { location, duration } = vacation

function parseSentence(location, duration){
return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(location, duration))
*/
/*
Use destructuring to make this code ES6:

function returnFirst(items){
    const firstItem = items[0]; **change this line to be es6
    return firstItem
}


function returnFirst(items){
    const [firstItem] = items; *change this line to be es6*
    return firstItem
}


Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    *your code here*
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
}

returnFavorites(favoriteActivities)

*/


// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     let [firstFav, secondFav, thirdFav] = favoriteActivities
//     return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

/*
Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals() {  
 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]
*/


// function combineAnimals(...animalGroups) {  
//     let [firstGroup,secondGroup,thirdGroup,beyond] = animalGroups
//     return [...firstGroup,...secondGroup, ...thirdGroup, ...beyond]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// const forestAnimals = ["Mr. Forrest", "deer"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, forestAnimals)); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]
/*
Try to make the following function more ES6xy:
*/
// function product(a, b, c, d, e) {  
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

// function product(...numbers){
//     return numbers.reduce((x, y) => {return x * y}, 1)
// }
// console.log(product(4,6,2,4,5))
/*
Make the following function more ES6xy. Use at least both the rest and spread operators:

function unshift(array, a, b, c, d, e) {  
  return [a, b, c, d, e].concat(array);
}
*/

// const unshift = (...items) => {
//     firstItem = items.shift()
//     return ([...items,...firstItem])
// }

//Write some destructuring code to help this function out. Use object literals to simplify it:

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             "firstName: " + firstName + "," + "lastName: " + lastName
//         }
//     })
// }

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

function populatePeople(names){
    return names.map( name => {
        let [firstName, secondName] = name.split(" ")
        return (`firstName: ${firstName}, secondName: ${secondName}`)
    })
}

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]