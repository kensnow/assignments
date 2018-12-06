/*
There is no Spoon
12 JANUARY 2017 on Warmup, JavaScript
In order to practice translating real-world objects into code, look around the room and pick 10 things you can see. Then write them as 10 JavaScript objects.

Create 10 objects from things you see.
Each object should have at least 3 keys (properties).
Choose varying data types for your properties (boolean, string, number, array, nested object, etc.)
Each object should have at least one method.
Example:
var pen = {
    color: "Black",
    price: 2,
    isGelPen: false,
    write: function() {
        console.log("I'm a " + this.color + " pen that costs $" + this.price);
    }
}
Extra Credit:
Call a method from one object that then calls a method nested in another.
place all of your objects into an array and call your functions.
Nest one object within another, within another object, within another.
Create and call a method in one object that calls a method nested at the deepest level of your deeply nested object.

*/

backpack = {
    weight: 15,
    color: "grey",
    contents: [{
        name:"cable",
        type: "HDMI",
        color: "black",
        functional: true
    },
    {
        name:"headphones",
        color: "black",
        functional: true

    },
    {
        name:"Red Bull",
        status:"full"
    }]
}

kitchenLight = {
    isOn: true,
    activateSwitch: function(){
        this.isOn = !this.isOn;
    }
}
console.log("light status " + kitchenLight.isOn)
kitchenLight.activateSwitch()
console.log("new status " + kitchenLight.isOn)

coffeeMaker = {
    checkClock: function(){
        date = new Date();
        return date.getHours()},
    waterFull: false,
    filterFull: false,
    readyToBrew: false,
    prepareBrew: function(){
        this.waterFull = true;
        this.filterFull = true;
        this.readyToBrew = true;
        return console.log("coffee's ready!")
    }

}

coffeeMaker.prepareBrew()