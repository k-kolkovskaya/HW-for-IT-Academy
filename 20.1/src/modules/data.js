function getJSON(url) {
    return new Promise((res) => {
       const xhr = new XMLHttpRequest;
       xhr.onload = function() {
           res(this.responseText);
       }
       xhr.open('GET', url, true);
       xhr.send();
    })
}

function Data() {}
Data.prototype.getUsefulContents = function (url) {
    //getJSON(url, data => callback(JSON.parse(data)));
    return new Promise(res => {
        getJSON(url);
        data => res(JSON.parse(data));
    })
};

export {
    Data
};