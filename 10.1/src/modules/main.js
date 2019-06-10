import { Clock } from './clock.js';
import { Tabs } from './tabs.js';
import { Stopwatch } from './stopwatch.js';
import { Timer} from './timer.js';

const htmlElements = {
  startBtn: document.querySelector('.container .buttons button.start'),
  stopBtn: document.querySelector('.container .buttons button.stop'),
  resetBtn: document.querySelector('.container .buttons button.reset'),
  clock: document.querySelector('.container .links .clock'),
  stopwatch: document.querySelector('.container .links .stopwatch'),
  timer: document.querySelector('.container .links .timer'),
  output: document.querySelector('.container .output'),
  links: document.querySelectorAll('.container .links a')
};

const tabs = new Tabs(htmlElements.links);
const clock = new Clock();
const stopwatch = new Stopwatch();
const timer = new Timer();


function init() {
  clock.init();
  tabs.init();
  stopwatch.init();
  timer.init();
}

init();
