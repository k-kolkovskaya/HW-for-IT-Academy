import {
    Logger
} from './logger.js';

function ButtonClick(name) {
    this.name = name;
    this.HtmlElements = {
        button: document.querySelector('button')
    }
}

ButtonClick.prototype.run = function () {
    let before = Date.now();
    return new Promise((resolve) => {
        this.HtmlElements.button.addEventListener('click', () => {
            let after = Date.now();
            resolve(new Logger(this.name, before, after));
        })
    })
}

export {
    ButtonClick
};