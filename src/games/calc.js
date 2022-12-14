import getRandomNumber from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

function getResultOfExpression(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

function playRound() {
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const selectedOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${selectedOperator} ${num2}`;
  const expectedAnswer = getResultOfExpression(num1, num2, selectedOperator).toString();
  return [question, expectedAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
