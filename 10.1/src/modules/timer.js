const htmlElements = {
    timer: document.querySelector('.container [data-mode="timer"] .output'),
    startBtn: document.querySelector('.container [data-mode="timer"] .buttons button.start'),
    stopBtn: document.querySelector('.container [data-mode="timer"] .buttons button.stop'),
    resetBtn: document.querySelector('.container [data-mode="timer"] .buttons button.reset')
  };

function Timer() {

}

Timer.prototype.init = function() {
    htmlElements.startBtn.addEventListener('click', startTimer);
    htmlElements.stopBtn.addEventListener('click', stopTimer);
    htmlElements.resetBtn.addEventListener('click', resetTimer);
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

function startTimer() {
    intervalID = setInterval(timerTick, 1000);
    startTime = new Date().getTime() + 60000;
}

function stopTimer () {
    clearInterval(intervalID);
    lastDifferenceSeconds = differenceSeconds - 60;
}

function resetTimer() {
    lastDifferenceSeconds = 0;
    startTime = new Date().getTime();
    htmlElements.stopwatch.innerHTML = '00:01:00';
    clearInterval(intervalID);
}

function timerTick() {
    const differenceMilliseconds = startTime - new Date().getTime();
    differenceSeconds = differenceMilliseconds / 1000 + lastDifferenceSeconds;
    const seconds = parseInt(differenceSeconds % 60);
    const minutes = parseInt((differenceSeconds / 60) % 60);
    const hours = parseInt(differenceSeconds / 3600);

    htmlElements.timer.innerHTML = `${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)}`;

    if(htmlElements.timer.innerHTML === "00:00:00") {
        resetTimer ();
    }
}



export { Timer };