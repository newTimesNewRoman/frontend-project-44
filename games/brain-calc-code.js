import {
  user, sayHi, getRandomNumber, getAnswer,
} from '../src/index.js';

let counter = 0;

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

function checkAnswer() {
  const n1 = getRandomNumber(25);
  const n2 = getRandomNumber(25);
  const selectedOperator = getRandomNumber(3);
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

export default function playBrainCalc() {
  sayHi(user);
  console.log('What is the result of the expression?');
  checkAnswer();
}
