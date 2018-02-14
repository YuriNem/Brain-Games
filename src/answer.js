import readlineSync from 'readline-sync';

const questionAnswer = (name, result, stringResult) => {
  console.log(`Question: ${stringResult}`);
  const answer = readlineSync.question('Your answer: ');
  if (String(answer) === String(result)) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer '${result}'.\nLet's try again, ${name}!`);
    return 1;
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default questionAnswer;
