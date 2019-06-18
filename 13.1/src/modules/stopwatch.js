import {
    StopwatchTimer
} from './stopwatchTimer.js';

class Stopwatch extends StopwatchTimer {
    constructor(initMode, initSeconds) {
        super(initMode, initSeconds);
    }

    showInfo() {
        console.log(this);
    }
}



export {
    Stopwatch
};