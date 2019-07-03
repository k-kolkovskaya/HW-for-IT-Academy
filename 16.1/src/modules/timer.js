import {
    StopwatchTimer
} from './stopwatchTimer.js';

function Timer() {
    let timer = StopwatchTimer.bind(this, 'timer', 300);
    timer();
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function () {
    console.log(this);
}

Timer.prototype.setCurrentDifference = function (lastDifferenceSeconds, startTime) {
    return lastDifferenceSeconds - Math.round((new Date().getTime() - startTime) / 1000);
};


export {
    Timer
};