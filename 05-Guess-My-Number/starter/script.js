'use strict';

console.log(document.querySelector('.message').textContent);

// DOM manipulation to store a new value for the message class
document.querySelector('.message').textContent = 'Whats the Number?!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
