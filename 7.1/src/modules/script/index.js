setInterval(setCurrentTime, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.start');
htmlElements.resetBtn = document.querySelector('.container .buttons button.start');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');




function setCurrentTime() {
    const today = new Date();

    const hours = String(today.getHours());
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    const now = `${hours}:${minutes}:${seconds}`;
    htmlElements.output.innerText = '';
    htmlElements.output.innerText = now;
}


htmlElements.clock.addEventListener('click', switchToMode);
htmlElements.stopwatch.addEventListener('click', switchToMode);
htmlElements.timer.addEventListener('click', switchToMode);

function switchToMode() {

    removeSelected();
    let mode = this.dataset.mode;
    switch (mode) {
        case 'clock':
            this.classList.add('selected');
            break;
        case 'stopwatch':
            this.classList.add('selected');
            break;
        case 'timer':
            this.classList.add('selected');
            break;
    }
}

function removeSelected() {
    htmlElements.clock.classList.remove('selected');
    htmlElements.stopwatch.classList.remove('selected');
    htmlElements.timer.classList.remove('selected');
}