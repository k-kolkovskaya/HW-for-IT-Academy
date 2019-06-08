import {Room} from '../Room.js'
import {Person} from '../Person.js'
import {Computer} from '../Computer.js'
import {Mouse} from '../Mouse.js'


const kristina = new Person('Kristina', 25, 'student');
const kek = new Person('Kek', 12, 'student');
kristina.disableWalking();

const krisMouse = new Mouse(true);
const kekMouse = new Mouse(false);


const krisPC = new Computer(kristina, krisMouse, 'Linux');
const kekPC = new Computer(kek, kekMouse, 'Windows');


const fiftySeven = new Room(kristina, 'laboratory');
fiftySeven.tellRoomType();
fiftySeven.addComputer(krisPC);
fiftySeven.addComputer(kekPC);

console.log(fiftySeven);
