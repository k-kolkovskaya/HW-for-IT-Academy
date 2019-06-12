let arr = [];

function copyObject(object) {

  if(arr.indexOf(object) > -1) {
    return 'Circular reference is detected';
  }

  arr.push(object);

  const clon = {};

  for(let key in object) {
    if(typeof object[key] === 'object') {
      clon[key] = copyObject(object[key]);
    } else {
      clon[key] = object[key];
    }
  }

  return clon;
} 


const box = {
  x: 123,
  y: 234,
  size: {
    top: 228,
    bottom: {
      length: 330
    },
    getPerimeter: function() {
      let perimeter = (this.top + this.bottom.length) * 2;
      console.log(perimeter);
    }
  }
}

console.log(copyObject(box));