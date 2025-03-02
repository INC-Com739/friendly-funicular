'use strict';
// Insert the prompt() function here
prompt('What is your name?');
// Use that input to create a message as a string
let message = "JavaScript is fun!    ";
console.log(message);
// Click the button to Insert the message into the page using innerHTML.
let button = document.querySelector('button');
button.onclick = function() {
  let p = document.querySelector('p');
  p.innerHTML = message;
};