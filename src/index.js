import readlineSync from 'readline-sync';

export const askName = (question = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(`${question}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const flow = (game, message) => {
  const name = askName(message);
  console.log('');
  for (let i = 0; i < 3; i += 1) {
    const gameCons = game();
    console.log(`Question: ${gameCons('car')}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === String(gameCons('cdr'))) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer '${gameCons('cdr')}'.\nLet's try again, ${name}!`);
      return 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};
