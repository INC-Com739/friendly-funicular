'use strict';
// Insert the prompt() function here and answer correctly to the questions.
let name = prompt('What is your name?');
let age = prompt('What is your age?');
let profession = prompt('What is your profession?');
console.log(`Hello, my name is ${name}, I am ${age} years old and I am a ${profession}.`);
// Click the button to insert the message into the page using innerHTML.
let message = `Hello, my name is ${name}, I am ${age} years old and I am a ${profession}.`;
let button = document.querySelector('button');
button.addEventListener('click', function() {
  document.querySelector('p').innerHTML = message;
}); 
