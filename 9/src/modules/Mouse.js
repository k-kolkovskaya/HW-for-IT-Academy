function Mouse(isLaser) {
    this.isLaser = isLaser;
    this.isClicked = false;
    this.color = 'green';
    this.whichHanded = 'right';
    let changeColor = function() {
        this.color = 'black';
    }
    this.changeColor = changeColor;
    this.changeHand = function() {
        this.whichHanded = this.whichHanded ? 'left' : 'right';
    };
}

Mouse.prototype.click = function(isClicked) {
    isClicked = isClicked ? true : false;
    if(isClicked) {
       let message =  "I'm clicked!"; //Область видимости переменной message ограничена блоком условного оператора if
       console.log(message);
    } else {
        message =  "Click me!";
       console.log(message);
    }
    console.log(message); //Вот тут message видна не будет
};


export {Mouse};