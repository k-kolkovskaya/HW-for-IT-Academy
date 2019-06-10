const htmlElements = {
    stopwatch: document.querySelector('.container [data-mode="stopwatch"] .output'),
    startBtn: document.querySelector('.container [data-mode="stopwatch"] .buttons button.start'),
    stopBtn: document.querySelector('.container [data-mode="stopwatch"] .buttons button.stop'),
    resetBtn: document.querySelector('.container [data-mode="stopwatch"] .buttons button.reset')
  };

function Stopwatch() {

}

Stopwatch.prototype.init = function() {
    htmlElements.startBtn.addEventListener('click', startStopwatch);
    htmlElements.stopBtn.addEventListener('click', stopStopwatch);
    htmlElements.resetBtn.addEventListener('click', resetStopwatch);
}

function addNull(data) {
    if(data < 10) {
        data = `0${data}`;
        return data;
    } else {
        return data;
    }
}

let startTime;
let intervalID;
let lastDifferenceSeconds = 0;
let differenceSeconds = 0;

function startStopwatch() {
    intervalID = setInterval(stopwatchTick, 1000);
    startTime = new Date().getTime();
}

function stopStopwatch () {
    clearInterval(intervalID);
    lastDifferenceSeconds = differenceSeconds;
}

function resetStopwatch() {
    lastDifferenceSeconds = 0;
    startTime = new Date().getTime();
    htmlElements.stopwatch.innerHTML = '00:00:00'
    clearInterval(intervalID);
}

function stopwatchTick() {
    const differenceMilliseconds = new Date().getTime() - startTime;
    differenceSeconds = differenceMilliseconds / 1000 + lastDifferenceSeconds;
    const seconds = parseInt(differenceSeconds % 60);
    const minutes = parseInt((differenceSeconds / 60) % 60);
    const hours = parseInt(differenceSeconds / 3600);

    htmlElements.stopwatch.innerHTML = `${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)}`;
}



export { Stopwatch };