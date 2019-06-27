import {
    StopwatchTimer
} from './stopwatchTimer.js';

function Timer() {
    let timer = StopwatchTimer.bind(this, 'timer', 10);
    timer();
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function () {
    console.log(this);
}


export {
    Timer
};