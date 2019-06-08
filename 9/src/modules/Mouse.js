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
        console.log("I'm clicked!");
    } else {
        console.log("Click me!");
    }
};


export {Mouse};