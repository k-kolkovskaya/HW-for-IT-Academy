const htmlElements = {
    stopwatch: document.querySelector('.container [data-mode="stopwatch"] .output'),
    startBtn: document.querySelector('.container [data-mode="stopwatch"] .buttons button.start'),
    stopBtn: document.querySelector('.container [data-mode="stopwatch"] .buttons button.stop'),
    resetBtn: document.querySelector('.container [data-mode="stopwatch"] .buttons button.reset')
  };

function Stopwatch() {

}

Stopwatch.prototype.init = function() {
    htmlElements.startBtn.addEventListener('click', setStopwatch);
}

function addNull(data) {
    if(data < 10) {
        data = `0${data}`;
        return data;
    } else {
        return data;
    }
}

let startTime = new Date().getTime();
function setStopwatch() {
    const intervalID = setInterval(stopwatch, 1000);

    function stopwatch() {
        const difference = (new Date().getTime() - startTime) / 1000;
        const seconds = parseInt(difference % 60);
        const minutes = parseInt((difference / 60) % 60);
        const hours = parseInt(difference / 3600);

        htmlElements.stopwatch.innerHTML = `${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)}`;
    

        htmlElements.stopBtn.addEventListener('click', stopStopwatch);

        function stopStopwatch () {
            clearInterval(intervalID);
            startTime = difference*1000 + startTime;
        }
    }
}



export { Stopwatch };