import {StopwatchTimer} from './stopwatchTimer.js';

function Timer() {
    StopwatchTimer.call(this, 'timer', 300);
    //this.htmlElements.startBtn.addEventListener('click');
    //StopwatchTimer.onStartBtnClicked.call(this, this.htmlElements.buttons);
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
    console.log(this);
}


export { Timer };