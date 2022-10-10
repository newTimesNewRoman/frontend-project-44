#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { user, sayHi } from '../src/cli.js';

const operators = [{
  sign: '+',
  method(a, b) { return a + b; },
}, {
  sign: '-',
  method(a, b) { return a - b; },
}, {
  sign: '*',
  method(a, b) { return a * b; },
}];

function getRandomOperation() {
  return Math.floor(Math.random() * operators.length);
}

function getRandom() {
  return Math.floor(Math.random() * 25);
}

function getAnswer(expression) {
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  return answer;
}

let counter = 0;

function checkAnswer() {
  const n1 = getRandom();
  const n2 = getRandom();
  const selectedOperator = getRandomOperation(0, 2);
  const expression = `${n1} ${operators[selectedOperator].sign} ${n2}`;
  const answer = Number(getAnswer(expression));
  if (answer === operators[selectedOperator].method(n1, n2)) {
    console.log('Correct!');
    counter += 1;
    if (counter < 3) {
      checkAnswer();
    } else {
      console.log(`Congratulations, ${user}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${operators[selectedOperator].method(n1, n2)}'.\nLet's try again, ${user}!`);
  }
}

sayHi(user);
console.log('What is the result of the expression?');
checkAnswer();
