/*
Travel form
22 APRIL 2016 on Static Websites, Level 3, Exercise
You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

You should collect the following information from the user:

First name (text input)
Last name (text input)
Age (number input)
Gender (radio buttons with 2 or more options)
Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:



You should style your form (without using Bootstrap) to look good.
*/

var form = document.querySelector("#input-form");
// var button = document.querySelector("#submit-button");

form.addEventListener("submit", function(e){
    alert("First Name: " + this.fname.value + 
    "\nLast Name: " + this.lname.value + 
    "\nAge: " + this.age.value +
    "\nGender: " + this.gender.value +
    "\nDestination: " + this.destination.value 
    // "\nDiet: " + this.checkbox.checked

    
    
    
    
    )
    
})