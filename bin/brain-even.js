#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { user, sayHi } from '../src/cli.js';

function getRandom() {
  return Math.floor(Math.random() * 100);
}

function getAnswer(num) {
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
  return answer;
}

let counter = 0;

function checkAnswer() {
  const randomNumber = getRandom();
  const answer = getAnswer(randomNumber);
  const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';
  if (answer.toLowerCase() === isEven) {
    console.log('Correct!');
    counter += 1;
    if (counter < 3) {
      checkAnswer(counter);
    } else {
      console.log(`Congratulations, ${user}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${user}!`);
  }
}

sayHi(user);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
checkAnswer();
