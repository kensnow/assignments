/*

Uptown function you up
14 JULY 2015 on JavaScript, Warmup, Problem Solving, Programming Principles, Level 2
Create three functions using the provided array as an argument.

First function: returns contents of the array, lyrics, to the console as a string, including necessary spaces.
Second function: returns lyrics backwards ("pretty so I'm myself kiss Gotta...").
Third function: returns a string of just every other word, (e.g. "this that cold Pfeiffer...").
Extra challenge

Fourth function: returns all of lyrics, but every two words are switched ( "hit This ice that Michelle cold...").
Fifth function: returns lyrics in a random order.

var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

*/

var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function spacedOut(arr){
    returnArr = [];
    for (i = 0; i <= arr.length; i++){
        if (i % 2 === 0){
            returnArr += arr[i] + " "
        }
    }
    return returnArr
}


console.log(spacedOut(lyrics))