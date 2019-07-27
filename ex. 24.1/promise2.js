import { Logger } from './logger.js';

function Promise2(name) {
  this.name = name;
}

Promise2.prototype.run = function(url) {
  const before = Date.now();
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      resolve();
    };
    xhr.send();
  }).then(() => {
    const after = Date.now();
    return new Logger(this.name, before, after);
  });
};

export { Promise2 };
