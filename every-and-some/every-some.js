/*
Write two functions that mimic the .every and .some array methods.

every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array, when inserted as a parameter to the callback, returns true.

Example:

every([1,2,"3"], (num)=>{
  return typeof num === "number";
});
// returns false


*/
const arr = [1,2,"3"]
function everyFunction(arr, callback){

    for(let i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            continue;
        } else {
            return false;
        }

    }
    return true;

}

var is = everyFunction(arr, function(num){
    return typeof num === "number"

})

console.log (is)

/*
some(arr, callback): Given an array and a callback function, return true or false based on whether at least ONE element of the array, when inserted as a parameter to the callback, returns true.

Example:

some(["ben", "jacob", "bob"], (name)=>{
  return name === "jacob";
});
// returns true

*/
const arr2 = ["ben", "jacob", "bob"]

function someFunction(arr2, callback){
    for(let i = 0; i < arr2.length; i++){
        if (callback(arr2[i])){
            return true;
        } else {
            continue;
        }
    }
    return false;

}

isJacobInThere = someFunction(arr2, function(name){
    return (name === "jacob")

})

console.log(isJacobInThere)


