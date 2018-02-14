import readlineSync from 'readline-sync';

const askEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  let i;
  for (i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 + 1));
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (((number % 2 === 0) && (answer === 'yes')) || ((number % 2 !== 0) && (answer === 'no'))) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer '${(number % 2 === 0) ? 'yes' : 'no'}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  return 0;
};

export default askEven;
