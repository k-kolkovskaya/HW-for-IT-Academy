import {
    Logger
} from "./logger.js";

function Promise2(name) {
    this.name = name;
}

Promise2.prototype.run = function (url) {
    let before = Date.now();

    return Promise(resolve(() => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onload = function () {
            resolve(); //тут мы переводим Promise в состояние resolved, если onload - успешно?
        };

        xhr.send();
    })).then(() => {
        let after = Date.now();
        return new Logger(this.name, before, after);
    })
}

export {
    Promise2
};