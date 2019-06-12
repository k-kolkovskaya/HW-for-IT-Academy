import { ClassHelper } from './classHelper.js';

function StopwatchTimer(initMode, initSeconds) {
    let startTime;
    let intervalID;
    let lastDifferenceSeconds = 0;
    let differenceSeconds = 0;
    let mode = initMode;

    const htmlElements = {
        element: document.querySelector(`.container [data-mode="${mode}"] .output`),
        buttons: document.querySelectorAll(`.container .tabs [data-mode="${mode}"] .buttons button`),
        startBtn: document.querySelector(`.container [data-mode="${mode}"] .buttons button.start`),
        stopBtn: document.querySelector(`.container [data-mode="${mode}"] .buttons button.stop`),
        resetBtn: document.querySelector(`.container [data-mode="${mode}"] .buttons button.reset`)
      };

    function addNull(data) {
        if(data < 10) {
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
        const differenceMilliseconds = new Date().getTime() - startTime;

        switch(mode) {
            case 'stopwatch':
                differenceSeconds = lastDifferenceSeconds + Math.round(differenceMilliseconds / 1000);
                break;
            case 'timer':
                differenceSeconds = lastDifferenceSeconds - Math.round(differenceMilliseconds / 1000);
                break;
            default: 
                throw new Error ('Mode is not found');
        }

        const seconds = parseInt(differenceSeconds % 60);
        const minutes = parseInt((differenceSeconds / 60) % 60);
        const hours = parseInt(differenceSeconds / 3600);

        htmlElements.element.innerHTML = `${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)}`;

        if(mode === 'timer' && htmlElements.element.innerHTML === '00:00:00') {
            onResetBtnClicked();
        }
    }

    htmlElements.startBtn.addEventListener('click', onStartBtnClicked);
    htmlElements.stopBtn.addEventListener('click', onStopBtnClicked);
    htmlElements.resetBtn.addEventListener('click', onResetBtnClicked);
}



export { StopwatchTimer };