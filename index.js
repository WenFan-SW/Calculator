const readline = require('readline-sync');

function welcomeMessage() {
    console.log('Welcome to the Calculator');
}

function checkOp(maybeOp) {
    if (maybeOp != '+' && maybeOp != '-' && maybeOp != '*' && maybeOp != '/') {
        console.log('Your input is in the wrong format.');
      } else {
        return maybeOp;
      }
}

function checkNum(maybeNum) {
    if (isNaN(maybeNumber)) {
        // It didn't work - we have NaN.
      } else {
        // It worked - we have a number.
      }      
}
function getStrInput(prompt) {
    console.log(prompt);
    return readline.prompt();
}

function getNumInput(prompt) {
    console.log(prompt);
    return parseFloat(readline.prompt());
}

function getOp(prompt) {
    let maybeOp = getStrInput('Please enter an operator:');
    return checkOp(maybeOp);
}

function getNoOfNos(op) {
    return getNumInput('How many numbers would you like to ' + op + ' ?');
}

function getNos(noOfNos) {
    let nos = [];
    for (let i = 1; i <= noOfNos; i++) {
        nos.push(getNumInput('Please enter number ' + i + ' :'));
    }
    return nos
}

function doCalculation(noOfNos, op, numbers) {
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
    return answer
}

function calculator() {
    let op = getOp();
    let noOfNos = getNoOfNos(op);
    let numbers = getNos(noOfNos);
    let ans = doCalculation(noOfNos, op, numbers);
    console.log('The answer is ' + ans);
}


welcomeMessage();
// console.log(getOp());
while (true) {
    calculator();
}



