
string = "Forrest"

console.log(createRandomPassword(10, string))



function createRandomPassword (length, string){
    asciiCodeRange = [33,122];
    password = [];
    for (var i = 0; i <= length; i++){
        var char = Math.floor(Math.random() * asciiCodeRange[1]) + asciiCodeRange[0]
        password += String.fromCharCode(char);
    }

    //randomize where string chars show up
    passArr = password.split()

    for (var i = 0; i <= string.length; i++){
        passArr.splice(Math.floor(Math.random() * passArr.length),0,string[i])
        newPassword = passArr.join("")
    }
    return newPassword
}


