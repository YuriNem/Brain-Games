import cons from '../cons';
import { flow } from '..';

const askBalance = () => {
  const number = Math.floor(Math.random() * (9000 + 1)) + 1000;
  const resultInQuestion = `${number}`;
  let numberOne = Math.floor(number / 1000);
  let numberTwo = Math.floor((number - (numberOne * 1000)) / 100);
  let numberThree = Math.floor((number - (numberOne * 1000) - (numberTwo * 100)) / 10);
  let numberFour = Math.floor(number - (numberOne * 1000) - (numberTwo * 100) -
  (numberThree * 10));
  while (true) {
    let counter = 0;
    if ((numberFour - 1) > numberThree) {
      numberFour -= 1;
      numberThree += 1;
      counter += 1;
    }
    if ((numberThree - 1) > numberTwo) {
      numberThree -= 1;
      numberTwo += 1;
      counter += 1;
    }
    if ((numberTwo - 1) > numberOne) {
      numberTwo -= 1;
      numberOne += 1;
      counter += 1;
    }
    if ((numberOne - 1) > numberFour) {
      numberOne -= 1;
      numberFour += 1;
      counter += 1;
    }
    if (counter === 0) {
      break;
    }
  }
  const resultInAnswer = String(numberOne) + String(numberTwo) + String(numberThree) +
  String(numberFour);
  return cons(resultInQuestion, resultInAnswer);
};

export default () => flow(askBalance, 'Balance the given number.\n');
