import {
    ClassHelper
} from './classHelper.js';
import {
    Stopwatch
} from './stopwatch.js';

import {
    Timer
} from './timer.js';

function StopwatchTimer(initMode, initSeconds) {


    let intervalID;
    let mode = initMode;

    const htmlElements = {
        element: document.querySelector(`.container [data-mode="${mode}"] .output`),
        buttons: document.querySelectorAll(`.container .tabs [data-mode="${mode}"] .buttons button`),
        startBtn: document.querySelector(`.container [data-mode="${mode}"] .buttons button.start`),
        stopBtn: document.querySelector(`.container [data-mode="${mode}"] .buttons button.stop`),
        resetBtn: document.querySelector(`.container [data-mode="${mode}"] .buttons button.reset`)
    };

    this.htmlElements = htmlElements;

    function addNull(data) {
        if (data < 10) {
            data = `0${data}`;
            return data;
        } else {
            return data;
        }
    }

    function onStartBtnClicked() {
        ClassHelper.removeClass('disabled', htmlElements.buttons);
        ClassHelper.addClass('disabled', [htmlElements.startBtn]);
        intervalID = setInterval(onStopwatchTimerTick, 1000);
        startTime = new Date().getTime() + initSeconds * 1000;
    }

    function onStopBtnClicked() {
        ClassHelper.removeClass('disabled', htmlElements.buttons);
        ClassHelper.addClass('disabled', [htmlElements.stopBtn]);
        clearInterval(intervalID);
        lastDifferenceSeconds = differenceSeconds - initSeconds;
    }

    function onResetBtnClicked() {
        ClassHelper.removeClass('disabled', htmlElements.buttons);
        ClassHelper.addClass('disabled', [htmlElements.resetBtn]);
        lastDifferenceSeconds = 0;
        startTime = new Date().getTime() + initSeconds * 1000;
        onStopwatchTimerTick();
        clearInterval(intervalID);
    }

    function onStopwatchTimerTick() {


        switch (mode) {
            case 'stopwatch':
                Stopwatch();
                break;
            case 'timer':
                Timer();
                break;
            default:
                throw new Error('Mode is not found');
        }

        const seconds = parseInt(differenceSeconds % 60);
        const minutes = parseInt((differenceSeconds / 60) % 60);
        const hours = parseInt(differenceSeconds / 3600);

        htmlElements.element.innerHTML = `${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)}`;

        if (mode === 'timer' && htmlElements.element.innerHTML === '00:00:00') {
            clearInterval(intervalID);
        }
    }

    htmlElements.startBtn.addEventListener('click', onStartBtnClicked);
    htmlElements.stopBtn.addEventListener('click', onStopBtnClicked);
    htmlElements.resetBtn.addEventListener('click', onResetBtnClicked);
}




export {
    StopwatchTimer
};