#!/usr/bin/env node

import askQuestion from '..';
import askEven from '../games/even';

const name = askQuestion('Answer "yes" if number even otherwise answer "no".\n');
console.log('');
askEven(name);
