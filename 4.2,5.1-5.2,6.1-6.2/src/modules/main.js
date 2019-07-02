let htmlElements;
let body = document.body;

let itemsArray = [
  { color: 'white', bgColor: 'blue' },
  {
    color: 'black',
    bgColor: 'yellow'
  },
  {
    color: 'green',
    bgColor: 'whitesmoke'
  }
];

function init() {
  htmlElements = {
    bgColorInput: document.querySelector('input.bg-color-input'),
    textColorInput: document.querySelector('input.text-color-input'),
    addButton: document.querySelector('button.add-button'),
    items: document.querySelector('div.items'),
    header: document.querySelector('.hello-world')
  };

  render();
}

init();

htmlElements.addButton.addEventListener('click', validationOnClick);
htmlElements.bgColorInput.addEventListener('input', validation);
htmlElements.textColorInput.addEventListener('input', validation);

function render() {

  htmlElements.items.innerHTML = '';

  for (let i = 0; i < itemsArray.length; i++) {
    let item = renderItem(itemsArray[i].color, itemsArray[i].bgColor);
    if (itemsArray[i].selected) {
      item.classList.toggle('active');
      body.style.backgroundColor = itemsArray[i].bgColor;
      htmlElements.header.style.color = itemsArray[i].color;
    }
    item.addEventListener('click', turnToActive);
    htmlElements.items.appendChild(item);
  }


}

function renderItem(spanColor, itemColor) {

  let item = createNewElement('div', 'item', itemColor);
  let span = createNewElement('span', 'item-text', spanColor)
  item.appendChild(span);
  let button = createNewElement('button', 'delete-button');
  button.addEventListener('click', deleteItem);
  item.appendChild(button);

  return item;
}

function createNewElement(elem, className, color) {

  let element = document.createElement(elem);
  element.className = className;

  if(elem === 'div') {
    element.style.backgroundColor = color;
  } else if (elem === 'span') {
    element.style.color = color;
    let textNode = document.createTextNode(color);
    element.appendChild(textNode);
  } else if (elem === 'button') {
    let textNode = document.createTextNode('X');
    element.appendChild(textNode);
  }

  return element;
}

function getItemIndex(item) {
  let items = item.parentElement;
  let allItems = items.querySelectorAll('.item');
  let arrayOfItems = Array.from(allItems);
  let itemIndex = arrayOfItems.indexOf(item);
  return itemIndex;
}

function turnToActive(e) {
  e.stopPropagation;
  for(let i = 0; i < itemsArray.length; i++) {
    itemsArray[i].selected = false;
  }
  itemsArray[getItemIndex(this)].selected = true;
  render();
}

function addItem() {
  let newBgColor = htmlElements.bgColorInput.value;
  let newColor = htmlElements.textColorInput.value;
  itemsArray.push({
    color: newColor,
    bgColor: newBgColor
  });


  render();
  htmlElements.bgColorInput.value = '';
  htmlElements.textColorInput.value = '';
}

function validation() {
  let checkBgColorInput = checkIfValidationPassed(htmlElements.bgColorInput);
  let checkTextColorInput = checkIfValidationPassed(htmlElements.textColorInput);
  if(checkBgColorInput && checkTextColorInput) {
    htmlElements.addButton.disabled = false;
  }
}

function validationOnClick() {
  let checkBgColorInput = checkIfValidationPassed(htmlElements.bgColorInput);
  let checkTextColorInput = checkIfValidationPassed(htmlElements.textColorInput);


  if(checkBgColorInput && checkTextColorInput && !checkIfColorAdded(htmlElements.bgColorInput, htmlElements.textColorInput)) {
    htmlElements.addButton.disabled = false;
    addItem();
  } else if(checkIfColorAdded(htmlElements.bgColorInput, htmlElements.textColorInput)) {
    htmlElements.bgColorInput.style.borderColor = 'red';
    htmlElements.textColorInput.style.borderColor = 'red';
    htmlElements.addButton.disabled = true;
  }
}

function checkIfValidationPassed(input) {
  let checkInput;
  if(!checkIfColorCanBeAdded(input.value)) {
    checkInput = false;
    htmlElements.addButton.disabled = true;
    input.style.borderColor = 'red';
  } else {
    checkInput = true;
    input.style.borderColor = '';
  }
  return checkInput;
}



function checkIfColorCanBeAdded(color) {
  if (color.indexOf('rgb') > -1 || color === '') {
    return false;
  }

  let div = document.createElement('div');
  div.style.backgroundColor = color;
  let colorIsSetCorrectly = div.style.backgroundColor === color;
  return colorIsSetCorrectly;
}

function deleteItem(e) {
  e.stopPropagation;
  itemsArray.splice(getItemIndex(this.parentElement), 1);
  render();
  body.style.backgroundColor = '';
  htmlElements.header.style.color = '';
}

function checkIfColorAdded(bgColor, textColor) {

  let colorAdded = false;
  let bgColorAdded = false;
  let textColorAdded = false;

  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i].bgColor === bgColor.value) {
      bgColorAdded = true;
    }
  }
  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i].color === textColor.value) {
      textColorAdded = true;
    }
  }
  if(bgColorAdded && textColorAdded) {
    colorAdded = true;
  }
  return colorAdded;
}