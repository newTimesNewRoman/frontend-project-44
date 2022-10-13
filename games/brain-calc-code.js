import {
  getRandomNumber, getAnswer, isTrueAnswer,
} from '../src/index.js';

export const gameDescription = 'What is the result of the expression?';

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

export function playRound() {
  const num1 = getRandomNumber(25);
  const num2 = getRandomNumber(25);
  const selectedOperator = getRandomNumber(3);
  const expression = `${num1} ${operators[selectedOperator].sign} ${num2}`;
  const answer = Number(getAnswer(expression));
  return isTrueAnswer(answer, operators[selectedOperator].method(num1, num2));
}
