import {
    StopwatchTimer
} from './stopwatchTimer.js';

let differenceSeconds = 0;
let lastDifferenceSeconds = 0;
let startTime;

function Timer() {
    StopwatchTimer.bind(this, 'timer', 300);
    const differenceMilliseconds = new Date().getTime() - startTime;
    differenceSeconds = lastDifferenceSeconds - Math.round(differenceMilliseconds / 1000);
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function () {
    console.log(this);
}


export {
    Timer
};