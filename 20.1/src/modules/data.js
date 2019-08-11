function getJSON(url) {
    return new Promise((res, rej) => {
       const xhr = new XMLHttpRequest;
       xhr.onload = function() {
           res(this.responseText);
       }
       xhr.onerror = function() {
           rej(this.responseText);
       }
       xhr.open('GET', url, true);
       xhr.send();
    })
}

function Data() {}
Data.prototype.getUsefulContents = function(url) {
    return getJSON(url);
  };
  
Data.prototype.showInfo = function(res) {
    console.log(JSON.parse(res))
  };

export {
    Data
};