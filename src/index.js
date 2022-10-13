import readlineSync from 'readline-sync';

export const user = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export function sayHi(name) {
  console.log(`Hello, ${name}!`);
}

export function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

export function getAnswer(question) {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
}

export function isTrueAnswer(userAnswer, trueAnswer) {
  if (userAnswer.toLowerCase() === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${user}!`);
  return false;
}

export function playBrainGame(playGame, gameDescription) {
  sayHi(user);
  console.log(gameDescription);
  let count = 0;
  do {
    if (playGame() === false) {
      break;
    }
    count += 1;
  } while (count < 3);
  if (count === 3) { console.log(`Congratulations, ${user}!`); }
}
