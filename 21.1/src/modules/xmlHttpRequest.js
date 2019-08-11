import log from './logger.js';

export default function runXhr(name, url) {
  const before = Date.now();
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    const after = Date.now();
    log(name, before, after); //замыкание
  };
  xhr.send();
}
