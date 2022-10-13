import {
  getRandomNumber, getAnswer, isTrueAnswer,
} from '../src/index.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

function findGCD(x, y) {
  if (y > x) return findGCD(y, x);
  if (!y) return x;
  return findGCD(y, x % y);
}

export function playRound() {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const numbers = `${num1}, ${num2}`;
  const answer = Number(getAnswer(numbers));
  const gcd = findGCD(num1, num2);
  return isTrueAnswer(answer, gcd);
}
