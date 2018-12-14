
function createEvenArray(highestNum){
    evenArr = []
    for(let i = 1; i <= highestNum; i++){
        if (i % 2 === 0){
            evenArr.push(i)
        }
    }
    return evenArr;
}

function addOdds(evenArr){
    oddArr = [];
    for(let i = 0; i < evenArr.length; i++){
        oddArr.push(evenArr[i] + 1)
    }
    return evenArr.concat(oddArr)
}

var evens = createEvenArray(40)
var merged = addOdds(evens)

function sortNums(numArr){
    result = numArr.sort(function(a, b){return a-b})
    return result
}


result = sortNums(merged)
console.log (result)