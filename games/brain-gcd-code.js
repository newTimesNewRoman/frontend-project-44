import {
  user, sayHi, getRandomNumber, getAnswer,
} from '../src/index.js';

let counter = 0;

function findGCD(x, y) {
  if (y > x) return findGCD(y, x);
  if (!y) return x;
  return findGCD(y, x % y);
}

function checkAnswer() {
  const n1 = getRandomNumber(100);
  const n2 = getRandomNumber(100);
  const numbers = `${n1}, ${n2}`;
  const answer = Number(getAnswer(numbers));
  const gcd = findGCD(n1, n2);
  if (answer === gcd) {
    console.log('Correct!');
    counter += 1;
    if (counter < 3) {
      checkAnswer(counter);
    } else {
      console.log(`Congratulations, ${user}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.\nLet's try again, ${user}!`);
  }
}

export default function playBrainGCD() {
  sayHi(user);
  console.log('Find the greatest common divisor of given numbers.');
  checkAnswer();
}
