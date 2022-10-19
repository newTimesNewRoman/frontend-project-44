import readlineSync from 'readline-sync';

const user = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

function sayHi(name) {
  console.log(`Hello, ${name}!`);
}

export function getAnswer(question) {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
}

export function isTrueAnswer(userAnswer, trueAnswer) {
  if (userAnswer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${user}!`);
  return false;
}

export default function playBrainGame(playGame, gameDescription) {
  sayHi(user);
  console.log(gameDescription);
  let count = 0;
  do {
    const roundData = playGame();
    const answer = getAnswer(roundData[0]).toLowerCase();
    if (isTrueAnswer(answer, roundData[1]) === false) {
      break;
    }
    count += 1;
  } while (count < 3);
  if (count === 3) { console.log(`Congratulations, ${user}!`); }
}
