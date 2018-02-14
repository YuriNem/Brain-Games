import readlineSync from 'readline-sync';

const askName = (Question = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(`${Question}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default askName;
