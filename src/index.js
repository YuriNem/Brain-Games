import readlineSync from 'readline-sync';

export const askName = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};

export const askQuestion = (name) => {
  const number = Math.floor(Math.random() * (100 + 1));
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (((number % 2 === 0) && (answer === 'yes')) || ((number % 2 !== 0) && (answer === 'no'))) {
    console.log('Correct!');
  } else {
    console.log(`\'${answer}\' is wrong answer ;(. Correct answer \'${(number % 2 === 0) ? 'yes' : 'no'}\'.\nLet's try again, ${name}!`);
    return 1;
  }
  return 0;
};
