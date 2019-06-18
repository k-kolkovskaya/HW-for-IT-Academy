class Clock {
  constructor() {
    this.htmlElements = {
      clock: document.querySelector('.container [data-mode="clock"] .output')
    }
  }
  init() {
    this.setCurrentTime();
    setInterval(this.setCurrentTime, 1000);
  }

  setCurrentTime = () => {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    const now = `${hours}:${minutes}:${seconds}`;
    this.htmlElements.clock.innerText = '';
    this.htmlElements.clock.innerText = now;
  }
}

export {
  Clock
};