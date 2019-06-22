function Animal() {};
/*создание объекта Animal,
создание объекта 4 на основе базового объекта 5,
св-во __proto__ указывает на объект 5,
constructor объекта 4 - Animal,
у объекта 5 __proto__ - null, constructor объекта 5 - Object*/

function Mammal() {}; 
/*создание объекта Mammal, создание объекта 7 на основе базового объекта 5,
св-во constructor объекта 7 указывает на Mammal, 
у объекта 7 св-во __proto__ указывает на объект 5,
constructor объекта 7 - Mammal,
у объекта 5 __proto__ - null, ,
constructor объекта 5 - Object*/
Mammal.prototype = Object.create(Animal.prototype);
/*на основе объекта 4 создается объект 3,
объект 3 __proto__ - объект 4,
Mammal.prototype становится объект 3, а не объект 7 */
Mammal.prototype.constructor = Mammal;
//явно указываем, что у объекта 3 св-во конструктор указывает на объект Mammal

function Feline() {};
/*создание объекта Feline, создание объекта 6 на основе базового объекта 5,
св-во constructor объекта 6 указывает на Feline, 
у объекта 6 св-во __proto__ указывает на объект 5,
constructor объекта 6 - Feline*/
Feline.prototype = Object.create(Mammal.prototype);
/*на основе объекта 3 создается объект 2,
объект 2 __proto__ - объект 3,
Feline.prototype становится объект 2, а не объект 6 */
Feline.prototype.constructor = Feline;
//явно указываем, что у объекта 3 св-во конструктор указывает на объект Feline

const cat = new Feline();
/*на основе объекта 2 создается объект 1,
__proto__ объекта 1 ссылается на объект 2,
создается константа, которая хранит в себе ссылку на экземпляр объекта Feline - объект 1*/
console.log(cat);