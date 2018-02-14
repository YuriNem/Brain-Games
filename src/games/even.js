import questionAnswer from '../answer';

const askEven = (name) => {
  let i;
  for (i = 0; i < 3; i += 1) {
    const stringResult = Math.floor(Math.random() * (100 + 1));
    const result = (stringResult % 2 === 0) ? 'yes' : 'no';
    if (questionAnswer(name, result, stringResult) === 1) {
      break;
    }
  }
  return 0;
};

export default askEven;
