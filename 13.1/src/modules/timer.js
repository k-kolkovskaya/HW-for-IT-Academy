import {
    StopwatchTimer
} from './stopwatchTimer.js';

class Timer extends StopwatchTimer {
    constructor(initMode, initSeconds) {
        super(initMode, initSeconds);
    }

    showInfo() {
        console.log(this);
    }
}


export {
    Timer
};