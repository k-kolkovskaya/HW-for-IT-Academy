function Mouse(isLaser) {
    this.isLaser = isLaser;
    this.isClicked = false;
    this.color = 'green';
    this.whichHanded = 'right';
    this.changeColor = changeColor;
    this.changeHand = function() {
        this.whichHanded = this.whichHanded ? 'left' : 'right';
    };
}

Mouse.prototype.click = function(isClicked) {
    isClicked = isClicked ? true : false;
    isClicked ? console.log("I'm clicked!") : console.log("Click me!");
};

let changeColor = function() {
    this.color = 'black';
}

export {Mouse};