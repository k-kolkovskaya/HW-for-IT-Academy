import {
    ClassHelper
} from './classHelper.js';

class StopwatchTimer {
    constructor(initMode, initSeconds) {
        this.mode = initMode;
        this.initSeconds = initSeconds;
        this.htmlElements = {
            element: document.querySelector(`.container [data-mode="${this.mode}"] .output`),
            buttons: document.querySelectorAll(`.container .tabs [data-mode="${this.mode}"] .buttons button`),
            startBtn: document.querySelector(`.container [data-mode="${this.mode}"] .buttons button.start`),
            stopBtn: document.querySelector(`.container [data-mode="${this.mode}"] .buttons button.stop`),
            resetBtn: document.querySelector(`.container [data-mode="${this.mode}"] .buttons button.reset`)
        };
        this.startTime;
        this.intervalID;
        this.lastDifferenceSeconds = 0;
        this.differenceSeconds = 0;
    }

    addNull(data) {
        if (data < 10) {
            data = `0${data}`;
            return data;
        } else {
            return data;
        }
    }

    onStartBtnClicked = () => {
        ClassHelper.removeClass('disabled', this.htmlElements.buttons);
        ClassHelper.addClass('disabled', [this.htmlElements.startBtn]);
        this.intervalID = setInterval(this.onStopwatchTimerTick, 1000);
        this.startTime = new Date().getTime() + this.initSeconds * 1000;
    }

    onStopBtnClicked = () => {
        ClassHelper.removeClass('disabled', this.htmlElements.buttons);
        ClassHelper.addClass('disabled', [this.htmlElements.stopBtn]);
        clearInterval(this.intervalID);
        this.lastDifferenceSeconds = this.differenceSeconds - this.initSeconds;
    }

    onResetBtnClicked = () => {
        ClassHelper.removeClass('disabled', this.htmlElements.buttons);
        ClassHelper.addClass('disabled', [this.htmlElements.resetBtn]);
        this.lastDifferenceSeconds = 0;
        this.startTime = new Date().getTime() + this.initSeconds * 1000;
        this.onStopwatchTimerTick();
        clearInterval(this.intervalID);
    }

    onStopwatchTimerTick = () => {
        const differenceMilliseconds = new Date().getTime() - this.startTime;

        switch (this.mode) {
            case 'stopwatch':
                this.differenceSeconds = this.lastDifferenceSeconds + Math.round(differenceMilliseconds / 1000);
                break;
            case 'timer':
                this.differenceSeconds = this.lastDifferenceSeconds - Math.round(differenceMilliseconds / 1000);
                break;
            default:
                throw new Error('Mode is not found');
        }

        const seconds = parseInt(this.differenceSeconds % 60);
        const minutes = parseInt((this.differenceSeconds / 60) % 60);
        const hours = parseInt(this.differenceSeconds / 3600);

        this.htmlElements.element.innerHTML = `${this.addNull(hours)}:${this.addNull(minutes)}:${this.addNull(seconds)}`;

        if (this.mode === 'timer' && this.htmlElements.element.innerHTML === '00:00:00') {
            this.onResetBtnClicked();
        }
    }

    init() {
        this.htmlElements.startBtn.addEventListener('click', this.onStartBtnClicked);
        this.htmlElements.stopBtn.addEventListener('click', this.onStopBtnClicked);
        this.htmlElements.resetBtn.addEventListener('click', this.onResetBtnClicked);
    }
}

export {
    StopwatchTimer
};