import {
    StopwatchTimer
} from './stopwatchTimer.js';

let differenceSeconds = 0;
let lastDifferenceSeconds = 0;
let startTime;

function Stopwatch() {
    StopwatchTimer.bind(this, 'stopwatch', 0);
    const differenceMilliseconds = new Date().getTime() - startTime;
    differenceSeconds = lastDifferenceSeconds + Math.round(differenceMilliseconds / 1000);
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);

Stopwatch.prototype.showInfo = function () {
    console.log(this);
}



export {
    Stopwatch
};