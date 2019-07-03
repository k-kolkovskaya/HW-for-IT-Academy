import { Clock } from './clock.js';
import { Tabs } from './tabs.js';
import { Timer } from './timer.js';
import { Stopwatch } from './stopwatch.js';

const htmlElements = {
  links: document.querySelectorAll('.container .links a')
};

const tabs = new Tabs(htmlElements.links);
const clock = new Clock();
const stopwatch = new Stopwatch();
const timer = new Timer();
timer.showInfo();
stopwatch.showInfo();

function init() {
  clock.init();
  tabs.init();
  stopwatch;
  timer;
}

init();

