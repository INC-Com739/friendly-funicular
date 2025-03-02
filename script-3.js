'use strict';
// Insert the prompt() function here and answer correctly to the questions about your email.
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
let email = prompt('What is your email?');
console.log(`Your email is: ${email}`);
// Click the button to insert the message into the page using innerHTML.
let message = `Your email is: ${email}`;
let button = document.querySelector('button');
button.addEventListener('click', function() {
  document.querySelector('p').innerHTML = message;
});