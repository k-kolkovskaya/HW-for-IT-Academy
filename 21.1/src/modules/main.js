import makeSyncDelay from './syncDelay.js';
import runXhr from './xmlHttpRequest.js';
import { runSetTimeOut } from './setTimeOut.js';
import { addEventListener } from './buttonClick.js';

const url1 = 'https://jsonplaceholder.typicode.com/photos/1';
const url2 = 'https://jsonplaceholder.typicode.com/photos/2';
const url3 = 'https://jsonplaceholder.typicode.com/photos/3';

console.log('sync code start');

makeSyncDelay('delay 1', 4, true);
runSetTimeOut('stm 1', 80);
runXhr('xhr 1', url1);
runXhr('xhr 2', url2);
runXhr('xhr 3', url3);
addEventListener('btn');

console.log('sync code end');
