import {
  user, sayHi, getRandomNumber, getAnswer,
} from '../src/index.js';

let counter = 0;

function checkAnswer() {
  const randomNumber = getRandomNumber(100);
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

export default function playBrainEven() {
  sayHi(user);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  checkAnswer();
}
