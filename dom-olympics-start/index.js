
/*

Qualifier
Your first task is to use pure JavaScript to insert a header to the top of this page. It should look like this:

Utilize the css already written for .name and .header

Notice that your name needs to be a different color. Wrapping text in a span tag is a great way to do this.

*/

//create elements
var h1 = document.createElement("h1");
var h2 = document.createElement("h2")
var span = document.createElement("span")
//create text to fill
var title = document.createTextNode("Javascript made this!")
var myName = document.createTextNode("Ken Snow")
var whoWrote = document.createTextNode(" wrote the JavaScript")
//append text to elements
h1.appendChild(title)
span.appendChild(myName);
span.classList.add("name");
h2.appendChild(span);
h2.appendChild(whoWrote);
//prepend to docs
document.body.prepend(h2);
document.body.prepend(h1);




/*

Bronze
There's some sub par conversation going on in this messaging app. You have two tasks to help give it either a clean slate, or a positive start.

Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
*/

badWords = ["serious","don't","police","simple"];
goodWords = ["fun","absolutely","fun police","badass"];

baddies = {
    serious: ""



}

var messages = document.getElementsByClassName("message");
for (i = 0; i < messages.length; i++){
    messageText = messages[i].innerText;
    var words = messageText.split(" ");
    
    for(n = 0; n < words.length; n++){
        if (words[n]){
            words[n] = goodWords[n];
        }

    }
    
    console.log(words)

    // console.log(newPhrase)

    
}



/*
Silver
Themes!

Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.

Feel free to edit the HTML <select> tag to make it more usable or elaborate. Mo themes, mo fun.

Gold
Be able to add more messages using the form at the bottom.
EXTRA CREDIT

Every other messaged will be posted on the right in one color, and the next on the left the other color.

*/