const readline = require('readline-sync');

console.log('Please enter an operator:');
const op = readline.prompt();

console.log('How many numbers would you like to', op, '?');
const noOfNos = readline.prompt();

let numbers = [];
for (let i = 0; i < noOfNos; i++) {
    console.log('Please enter number', i+1, ':');
    numbers.push(parseFloat(readline.prompt()));
}

let answer = numbers[0]

for (let i = 1; i < noOfNos; i++) {
    if (op === '+') {
        answer += numbers[i];
    } else if (op === '-') {
        answer -= numbers[i];
    } else if (op === '*') {
        answer *= numbers[i];
    } else if (op === '/') {
        answer /= numbers[i];
    } 
}


console.log('The answer is ', answer);