
const superheros = [
    {
    name:"Batman",
    alias:"Bruce Wayne",
    superpowers:["gadgets","wealth","intelligence"],
    image:`url(${require("./batman.png")}`,
    catchphrase:"I only work in black. And very very dark grey."
    },{
    name:"Captain America",
    alias:"Steve Rogers",
    superpowers:["agility","speed","strength"],
    image:`url(${require("./captain_america.png")}`,
    catchphrase:"I'm loyal to nothing except the dream."
    },{
    name:"The Hulk",
    alias:"Bruce Banner",
    superpowers:["superhuman strength","regenerative healing", "self sustinence"],
    image:`url(${require("./hulk.png")})`,
    catchphrase:"HULK SMASH!"
    },{
    name:"Iron Man",
    alias:"Tony Stark",
    superpowers:["wealth","intelligence","power armor suit","flight"],
    image:`url(${require("./ironMan.png")})`,
    catchphrase:"I AM IRON MAN."
    },{
    name:"Spiderman",
    alias:"Peter Parker",
    superpowers:["intelligence","strength","speed","web sling","spider sense"],
    image:`url(${require("./spiderman.png")})`,
    catchphrase:"It's your Friendly Neighborhood Spider-Man!"
    },{
    name:"Star Lord",
    alias:"Peter Quill",
    superpowers:["strategist","firearms","flight"],
    image:`url(${require("./star-lord.png")})`,
    catchphrase:"I come from Earth, a planet of outlaws: Billie the Kid, Bonnie and Clyde, John Stamos."
    },{
    name:"Superman",
    alias:"Clark Kent",
    superpowers:["invulnerability","strength","flight","super vison"],
    image:`url(${require("./superman.png")})`,
    catchphrase:"Up, up, and away!"
    }
]

    export default superheros