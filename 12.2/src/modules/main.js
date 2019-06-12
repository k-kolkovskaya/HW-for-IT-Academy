import { Clock } from './clock.js';
import { Tabs } from './tabs.js';
import { StopwatchTimer } from './stopwatchTimer.js';

const htmlElements = {
  links: document.querySelectorAll('.container .links a')
};

const tabs = new Tabs(htmlElements.links);
const clock = new Clock();
const stopwatch = new StopwatchTimer("stopwatch", 0);
const timer = new StopwatchTimer("timer", 300);


function init() {
  clock.init();
  tabs.init();
  stopwatch;
  timer;
}

init();
