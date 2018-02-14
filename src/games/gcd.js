import questionAnswer from '../answer';

const askGcd = (name) => {
  let i;
  for (i = 0; i < 3; i += 1) {
    const numberFirst = Math.floor(Math.random() * (100 + 1));
    const numberSecond = Math.floor(Math.random() * (100 + 1));
    let result;
    for (let j = numberFirst < numberSecond ? numberFirst : numberSecond; j >= 1; j -= 1) {
      if ((numberFirst % j === 0) && (numberSecond % j === 0)) {
        result = j;
        break;
      }
    }
    const stringResult = `${numberFirst} ${numberSecond}`;
    if (questionAnswer(name, result, stringResult) === 1) {
      break;
    }
  }
  return 0;
};

export default askGcd;
