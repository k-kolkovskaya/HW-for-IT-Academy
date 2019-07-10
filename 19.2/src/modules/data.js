function getJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText);
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function Data() {}
Data.prototype.getUsefulContents = function (url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
};

export {
    Data
};