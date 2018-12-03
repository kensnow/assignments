/*
Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:

String
Number
Boolean
Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)
In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.

*/

var shopper = {
    name: "Henry",
    budget: 400.00,
    canShop: true,
    buyItem:  function(item, price){
        if (price > shopper.budget){
            console.log("Not enough money!");
            shopper.canShop = false;
            for (var i = 0; i < shopper.shoppingCart.length; i++){
                console.log(shopper.name + " bought " + shopper.shoppingCart[i]);
            }
        } else {
            shopper.budget -= price;
            shopper.shoppingCart.push(item);
            console.log(item + " has been added to shopping cart!  " + shopper.name + " has " + shopper.budget + " left");
        }
    },
    shoppingCart: []

}


console.log(shopper.name + " is going to the store");
console.log(shopper.name + " has " + shopper.budget + " dollars to spend");
console.log("pick up some milk...");
shopper.buyItem("milk", 2.50);
console.log(shopper.name + " has " + shopper.budget + " left");
console.log("Henry picks up a few more things")
shopper.buyItem("eggs", 1.00);
shopper.buyItem("flour", 4.00);
shopper.buyItem("pizza", 7.25);
console.log(shopper.name + " spots shiny new television!");
shopper.buyItem("TV",400.00);
