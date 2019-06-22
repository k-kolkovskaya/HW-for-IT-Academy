function Animal() {};
/*создание объекта Animal, создание объекта 8
на основе базового объекта 5, св-во __proto__ указывает на объект 5,
у объекта 5 __proto__ - null, св-во constructor объекта 8 указывает на Animal,
constructor объекта 5 - Object*/

function Mammal() {};
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

function Feline() {};
Feline.prototype = Object.create(Mammal.prototype);
Feline.prototype.constructor = Feline;

const cat = new Feline();
console.log(cat);