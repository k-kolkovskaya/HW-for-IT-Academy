import {
    StopwatchTimer
} from './stopwatchTimer.js';

function Stopwatch() {

    let args = ['stopwatch', 0];
    StopwatchTimer.apply(this, args);
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);

Stopwatch.prototype.showInfo = function () {
    console.log(this);
}

Stopwatch.prototype.setCurrentDifference = function (lastDifferenceSeconds, startTime) {
    return lastDifferenceSeconds + Math.round((new Date().getTime() - startTime) / 1000);
};

export {
    Stopwatch
};