function Room(student, computer) {
  this.student = student;
  this.computer = computer;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Computer(owner, mouse) {
  this.owner = owner;
  this.mouse = mouse;
}

function Mouse(isLaser) {
  this.isLaser = isLaser;
}



let kristina = new Person('Kristina', 25);

let krisMouse = new Mouse(true);

let krisPC = new Computer(kristina, krisMouse);

let fiftySeven = new Room(kristina, krisPC);