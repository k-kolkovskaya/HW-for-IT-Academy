import log from './logger.js';

function runSetTimeOut(name, milliseconds) {
  const before = new Date().getTime();
  setTimeout(() => {
    const after = new Date().getTime();
    log(name, before, after, `supposed: ${milliseconds}`); //замыкание
  }, milliseconds);
}

export { runSetTimeOut };
