import readlineSync from 'readline-sync';

function getAnswer(question) {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer.toLowerCase();
}

export default function playBrainGame(getRoundData, gameDescription) {
  const scoreToWin = 3;
  const user = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${user}!\n${gameDescription}`);
  for (let roundCounter = 1; roundCounter <= scoreToWin; roundCounter += 1) {
    const roundData = getRoundData();
    const userAnswer = getAnswer(roundData[0]);
    const expectedAnswer = roundData[1];
    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${user}!`);
      break;
    }
    console.log('Correct!');
    if (roundCounter === scoreToWin) { console.log(`Congratulations, ${user}!`); }
  }
}
