import { Logger } from './logger.js';

function Fetch1(name) {
  this.name = name;
}

Fetch1.prototype.run = function(url) {
  const before = new Date().getTime();
  return fetch(url).then(() => {
    const after = new Date().getTime();
    return new Logger(this.name, before, after);
  });
};

export { Fetch1 };
