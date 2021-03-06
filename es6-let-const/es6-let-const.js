
/*
ES6 Practice - Let, Const, Arrow Functions, Default Arguments, Template Literals
03 JANUARY 2018
let and const
Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").

John is the pet owner, and his name should be stored differently than the other names.
*/

const ownerName = "John"
const age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        let name = ""
        const pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
        return pet.name
    }
    
}

console.log(runForLoop())

/*
ES6 Arrow Functions
Task 1
Re-write this .map() using an arrow function:

Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.
*/
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}

// console.log(mapVegetables(carrots))
/*
Task 2
Re-write this .filter() using an arrow function:
*/
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))



/*
Task 3
Re-write the following functions to be arrow functions:
*/
let a = 2
let b = 6

doMathSum = (a, b) => {
    return a + b
}

console.log(doMathSum(a, b))

var produceProduct = function(a, b) {
    return a * b
}

produceProduct = (a,b) => {
    return a * b
}

console.log(produceProduct(5,6))
/*
Task 4
Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

Hi Kat Stark, how does it feel to be 40?
firstName should default to "Jane"
lastName should default to "Doe"
age should default to 100
*/

printString = (x = "Jane", y = "Doe", z = 100) => {
    return (`Hi ${x} ${y}, how do you feel to be ${z}?`)
}

console.log(printString("Ken"))

/*
Extra Credit
Use template literals to build the string

Task 5
Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}
*/

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
filterforDogs = arr => { return arr.filter((animal) => {return animal.type === "dog"}) }
console.log(filterforDogs(animals))

const welcomeMessage = (loc,name) => {
    console.log(`Hello ${name}!\n`)
    console.log(`Welcome to ${loc}!\n`)
    console.log(`I hope you enjoy your stay.  Please ask the president of ${loc} if you need anything.\n`)
} 

welcomeMessage("SLC","Ken")
// /*
/*
Template Literals


Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

Hi Janice!

Welcome to Hawaii. 

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

*/