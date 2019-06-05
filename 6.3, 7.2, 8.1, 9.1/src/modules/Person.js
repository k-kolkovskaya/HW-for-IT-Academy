function Person(name, age, position) {
    this.name = name;
    this.age = age;
    this.canWalk = true;
    this.position = position;
    this.sayHi = sayHi;
    this.disableWalking = function() {
      this.canWalk = this.canWalk ? false : true;
    };
  }

  let sayHi = function(){
    console.log( "Моё имя: " + this.name );
  }


  Person.prototype.switchComputer = function(computer){
    computer.isOn = computer.isOn ?  false : true;
  }
  export {Person};