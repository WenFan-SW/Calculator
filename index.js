const readline = require('readline-sync');

console.log('Please enter first number:');
const n1 = readline.prompt();

console.log('Please enter second number:');
const n2 = readline.prompt();

let product = n1*n2;

console.log(n1, 'x',  n2,  '=', product);
