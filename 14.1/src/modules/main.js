import { Clock } from "./clock.js";
import { Tabs } from "./tabs.js";
import { Timer } from "./timer.js";
import { Stopwatch } from "./stopwatch.js";

const tabs = new Tabs();
const clock = new Clock();
const stopwatch = new Stopwatch();
const timer = new Timer();
timer.showInfo();
stopwatch.showInfo();

function init() {
  clock.init();
  tabs.init();
  stopwatch.init();
  timer.init();
}

init();
