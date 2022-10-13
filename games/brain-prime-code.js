import {
  user, sayHi, getRandomNumber, getAnswer,
} from '../src/index.js';

let counter = 0;

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return 'no';
  return 'yes';
}

function checkAnswer() {
  const randomNumber = getRandomNumber(25);
  const answer = getAnswer(randomNumber);
  const isPrimeNumber = isPrime(randomNumber);
  if (answer.toLowerCase() === isPrimeNumber) {
    console.log('Correct!');
    counter += 1;
    if (counter < 3) {
      checkAnswer(counter);
    } else {
      console.log(`Congratulations, ${user}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrimeNumber}'.\nLet's try again, ${user}!`);
  }
}

export default function playBrainPrime() {
  sayHi(user);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  checkAnswer();
}
