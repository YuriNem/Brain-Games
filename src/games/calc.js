import readlineSync from 'readline-sync';

const askCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  let i;
  for (i = 0; i < 3; i += 1) {
    const numberFirst = Math.floor(Math.random() * (100 + 1));
    const numberSecond = Math.floor(Math.random() * (100 + 1));
    let result;
    let operator = '';
    switch (Math.floor(Math.random() * (3)) + 1) {
      case 1:
        operator = '+';
        result = numberFirst + numberSecond;
        break;
      case 2:
        operator = '-';
        result = numberFirst - numberSecond;
        break;
      case 3:
        operator = '*';
        result = numberFirst * numberSecond;
        break;
      default:
        break;
    }
    console.log(`Question: ${numberFirst} ${operator} ${numberSecond}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer '${result}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  return 0;
};

export default askCalc;
