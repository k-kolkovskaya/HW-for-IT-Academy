class URLParser {
  constructor(url = window.location.href) {
    this.url = url;
  }

  getSplit() {
    const parts = this.url.split('?');
    const result = {};
    const secondPart = parts[1];
    const newParts = secondPart.split('&');
    
    newParts.forEach(part => {
      const meanings = part.split('=');
      const name = meanings[0];
      const definition = meanings[1];
      result[name] = definition;
    });

    console.log(result);
  }

  getRegExp() {
    const regExp = new RegExp('[?&]+([^=&]+)=([^&]*)', 'g');
    const result = {};
    this.url.replace(regExp, (match, key, value) => {
      result[key] = value;
    });
  console.log(result);
  };
}

const urlParser = new URLParser('http://127.0.0.1:5500?a=1&b=&c=3');

urlParser.getSplit();
urlParser.getRegExp();
