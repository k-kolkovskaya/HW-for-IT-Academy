import {
    StopwatchTimer
} from './stopwatchTimer.js';

function Stopwatch() {
    let stopwatch = StopwatchTimer.bind(this, 'stopwatch', 0);
    stopwatch();
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);

Stopwatch.prototype.showInfo = function () {
    console.log(this);
}



export {
    Stopwatch
};