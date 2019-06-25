const readline = require('readline-sync');

console.log('Please enter an operator:');
const op = readline.prompt();

console.log('Please enter first number:');
const n1 = parseFloat(readline.prompt());

console.log('Please enter second number:');
const n2 = parseFloat(readline.prompt());

if (op === '+') {
    answer = n1 + n2;
} else if (op === '-') {
    answer = n1 - n2;
} else if (op === '*') {
    answer = n1 * n2;
} else if (op === '/') {
    answer = n1/n2;
} 
console.log(n1, op,  n2,  '=', answer);