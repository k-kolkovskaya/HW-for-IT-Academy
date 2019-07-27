import {
    Logger
} from "./logger.js";

function SetTimeOut1(name) {
    this.name = name;
    this.miliseconds = 90;

}

SetTimeOut1.prototype.run = function () {
    let before = Date.now();

    return new Promise((resolve) => {
        setTimeout(() => {
            let after = Date.now();
            resolve(
                new Logger(before, after, `supposed: ${this.miliseconds}`)
            );
        }, this.miliseconds)
    })
}

export {
    SetTimeOut1
};