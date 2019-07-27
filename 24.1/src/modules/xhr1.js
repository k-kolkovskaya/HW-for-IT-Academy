import {
    Logger
} from "./logger.js";

function Xhr1(name) {
    this.name = name;
}

Xhr1.prototype.run = function (url) {
    let before = Date.now();

    return new Promise(function (resolve) {
        const self = this;
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onload = function () {
            let after = Date.now();
            resolve(new Logger(self.name, before, after));
        };

        xhr.send();
    })
}

export {
    Xhr1
};