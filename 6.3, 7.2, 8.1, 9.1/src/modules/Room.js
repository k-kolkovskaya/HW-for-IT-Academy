function Room(student, type) {
    this.student = student;
    this.computer = [];
    this.wallsColor = 'blue';
    this.type = type;
    this.tellRoomType = tellRoomType;
    this.changeWallsColor = function() {
        this.wallsColor = 'green';
      };
}

Room.prototype.addComputer = function(computer) {
    this.computer.push(computer);
}

let tellRoomType = function() {
    console.log(`This room is ${this.type}`);
}

export {Room};