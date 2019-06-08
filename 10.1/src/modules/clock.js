const htmlElements = {
    output: document.querySelector('.container .output')
  };

function Clock() {

}

Clock.prototype.init = function() {
    setCurrentTime();
    setInterval(setCurrentTime, 1000);
}


function setCurrentTime() {
const today = new Date();

const hours = String(today.getHours()).padStart(2, '0');
const minutes = String(today.getMinutes()).padStart(2, '0');
const seconds = String(today.getSeconds()).padStart(2, '0');

const now = `${hours}:${minutes}:${seconds}`;
htmlElements.output.innerText = '';
htmlElements.output.innerText = now;
}


export {Clock};