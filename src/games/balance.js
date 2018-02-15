import questionAnswer from '../answer';

const askBalance = (name) => {
  let i;
  for (i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (9900 + 1)) + 100;
    const stringResult = `${number}`;
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
    const result = String(numberOne) + String(numberTwo) + String(numberThree) + String(numberFour);
    if (questionAnswer(name, result, stringResult) === 1) {
      break;
    }
  }
  return 0;
};

export default askBalance;
