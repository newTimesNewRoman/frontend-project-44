import {
  getRandomNumber,
} from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

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

function playRound() {
  const num1 = getRandomNumber(25);
  const num2 = getRandomNumber(25);
  const selectedOperator = getRandomNumber(3);
  const question = `${num1} ${operators[selectedOperator].sign} ${num2}`;
  const trueAnswer = operators[selectedOperator].method(num1, num2).toString();
  return [question, trueAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
