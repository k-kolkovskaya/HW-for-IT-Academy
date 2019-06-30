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



export {
    Stopwatch
};