function Computer(owner, mouse, OS) {
    this.owner = owner;
    this.mouse = mouse;
    this.message = '';
    this.status = '';
    this.isOn = true;
    this.keyboard = true;
    this.OS = OS;
    this.tellOS = tellOS;
    this.changeStatus = function() {
        this.status = this.isOn ? 'turned on' : 'turned off';
    };
}

Computer.prototype.greet = function(message){
    this.message = message;
    console.log(`${this.owner.name}'s computer says ${this.message}. This computer is ${this.status}.`);
}

let tellOS = function() {
    console.log(`${this.owner.name}'s computer is on ${this.OS}`);
}

export {Computer};