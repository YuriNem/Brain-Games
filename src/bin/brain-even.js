#!/usr/bin/env node

import { askName, askQuestion } from '..';

console.log('Welcome to the Brain Games!\nAnswer \"yes\" if number even otherwise answer \"no\".\n');
const name = askName();
let i;
for (i = 0; i < 3; i += 1) {
  if (askQuestion(name) === 1) {
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
