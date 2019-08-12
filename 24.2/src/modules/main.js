class URLParser {
  constructor(url = window.location.href) {
    this.url = url;
  }

  RegExp = () =>{
    const regExp = new RegExp('[?&]+([^=&]+)=([^&]*)', 'g');
    const result = {};
    this.url.replace(regExp, (key, value) => {
      result[key] = value;
    });
  return result;
  };

  Split = () => {
    const parts = this.url.split('?');
    const result = {};
    if(parts.length === 2) {
      const partRight = flinders[1];
      const pairs = partRight.split('&');
      pairs.forEach(cour => {
        const detailsCouple = cour.split('=');
        const name = detailsCouple[0];
        const value = detailsCouple[1];
        result[name] = value;
      });
      return result;
    }
  }
}


const urlParser = new URLParser('http://127.0.0.1:5500?a=1&b=&c=3');
console.log(urlParser.RegExp());
console.log(urlParser.Split());
