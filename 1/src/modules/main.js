let click = document.getElementById('click');
click.addEventListener('click', onClick);
let reset = document.getElementById('reset');
reset.addEventListener('click', resetText);

let firstNum = document.getElementById('firstNum');
let secondNum = document.getElementById('secondNum');
let container = document.getElementById('container');

function valueToInt(num) {
    return (parseInt(num.value));
}

function addText() {
    return  document.createTextNode(valueToInt(firstNum) + valueToInt(secondNum));
}

function onClick() {
    container.appendChild(addText());
    if(container.childNodes.length > 0) {
        click.disabled = true;
    }
}

function resetText() {
    text = container.childNodes[0];
    container.removeChild(text);
    firstNum.value = '';
    secondNum.value = '';
    click.disabled = false;
}