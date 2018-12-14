
var xhr = new XMLHttpRequest();
pokemon = [];
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData)
        tempArr = [];
        tempArr = data.objects[0].pokemon;
        for(let i = 0; i < tempArr.length; i++){
            pokemon.push(tempArr[i])
            console.log (tempArr[i])
        }
    }
}

for(var n = 0; n < pokemon.length; n++){
    var name = document.createTextNode(pokemon[n].name)
    var info = document.createTextNode(pokemon[n].resource_uri)
    var ul = document.createElement("ul")
    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    li1.appendChild(name)
    li2.appendChild(info)
    // ul.appendChild()
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()