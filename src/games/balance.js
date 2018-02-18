import cons from '../cons';
import { flow } from '..';

const askBalance = () => {
  const number = Math.floor(Math.random() * (10000 - 10)) + 10;
  const userQuestion = `${number}`;
  let userAnswer = '';
  if (number < 100) {
    let numberOne = Math.floor(number / 10);
    let numberTwo = Math.floor(number - (numberOne * 10));
    let counter = 1;
    while (counter !== 0) {
      counter = 1;
      if ((numberTwo - 1) > numberOne) {
        numberTwo -= 1;
        numberOne += 1;
        counter += 1;
      }
      if ((numberOne - 1) > numberTwo) {
        numberOne -= 1;
        numberTwo += 1;
        counter += 1;
      }
      if (counter === 1) {
        counter -= 1;
      }
    }
    const arrayNumbers = [numberOne, numberTwo];
    arrayNumbers.sort();
    userAnswer = String(arrayNumbers[0]) + String(arrayNumbers[1]);
  } else if (number < 1000) {
    let numberOne = Math.floor(number / 100);
    let numberTwo = Math.floor((number - (numberOne * 100)) / 10);
    let numberThree = Math.floor(number - (numberOne * 100) - (numberTwo * 10));
    let counter = 1;
    while (counter !== 0) {
      counter = 1;
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
      if ((numberOne - 1) > numberThree) {
        numberOne -= 1;
        numberThree += 1;
        counter += 1;
      }
      if (counter === 1) {
        counter -= 1;
      }
    }
    const arrayNumbers = [numberOne, numberTwo, numberThree];
    arrayNumbers.sort();
    userAnswer = String(arrayNumbers[0]) + String(arrayNumbers[1]) +
    String(arrayNumbers[2]);
  } else {
    let numberOne = Math.floor(number / 1000);
    let numberTwo = Math.floor((number - (numberOne * 1000)) / 100);
    let numberThree = Math.floor((number - (numberOne * 1000) - (numberTwo * 100)) / 10);
    let numberFour = Math.floor(number - (numberOne * 1000) - (numberTwo * 100) -
    (numberThree * 10));
    let counter = 1;
    while (counter !== 0) {
      counter = 1;
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
      if (counter === 1) {
        counter -= 1;
      }
    }
    const arrayNumbers = [numberOne, numberTwo, numberThree, numberFour];
    arrayNumbers.sort();
    userAnswer = String(arrayNumbers[0]) + String(arrayNumbers[1]) +
    String(arrayNumbers[2]) + String(arrayNumbers[3]);
  }
  return cons(userQuestion, userAnswer);
};

export default () => flow(askBalance, 'Balance the given number.');
