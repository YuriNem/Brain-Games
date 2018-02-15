#!/usr/bin/env node

import askName from '..';
import askEven from '../games/even';

const name = askName('Answer "yes" if number even otherwise answer "no".\n');
console.log('');
askEven(name);
