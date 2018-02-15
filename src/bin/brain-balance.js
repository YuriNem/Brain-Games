#!/usr/bin/env node

import askName from '..';
import askBalance from '../games/balance';

const name = askName('Balance the given number.\n');
console.log('');
askBalance(name);
