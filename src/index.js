import readlineSync from 'readline-sync';

function getAnswer(question) {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer.toLowerCase();
}

export default function playBrainGame(getRoundData, gameDescription) {
  const scoreToWin = 3;

  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(gameDescription);

  for (let roundCounter = 1; roundCounter <= scoreToWin; roundCounter += 1) {
    const [roundQuestion, expectedAnswer] = getRoundData();
    const userAnswer = getAnswer(roundQuestion);

    if (userAnswer !== expectedAnswer.toLowerCase()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
}
