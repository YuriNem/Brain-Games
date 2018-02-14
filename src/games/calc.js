import questionAnswer from '../answer';

const askCalc = (name) => {
  let i;
  for (i = 0; i < 3; i += 1) {
    const numberFirst = Math.floor(Math.random() * (100 + 1));
    const numberSecond = Math.floor(Math.random() * (100 + 1));
    let operator = '';
    let result;
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
    const stringResult = `${numberFirst} ${operator} ${numberSecond}`;
    if (questionAnswer(name, result, stringResult) === 1) {
      break;
    }
  }
  return 0;
};

export default askCalc;
