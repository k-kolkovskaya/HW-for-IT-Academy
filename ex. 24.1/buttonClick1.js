import { Logger } from './logger.js';

function ButtonClick1(name) {
  this.name = name;
  this.htmlElements = { button: document.querySelector('button') };
}

ButtonClick1.prototype.run = function(url) {
  const before = new Date().getTime();
  return new Promise((resolve, reject) => {
    this.htmlElements.button.addEventListener('click', () => {
      const after = new Date().getTime();
      resolve(new Logger(this.name, before, after));
    });
  });
};

export { ButtonClick1 };
