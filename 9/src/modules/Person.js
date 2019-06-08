function Person(name, age, position) {
    this.name = name;
    this.age = age;
    this.canWalk = true;
    this.position = position;
    let sayHi = function(){
      console.log( "Моё имя: " + this.name );
    }  
    this.sayHi = sayHi;
    this.disableWalking = function() {
      this.canWalk = this.canWalk ? false : true;
    };
  }
  

  Person.prototype.switchComputer = function(computer){
    computer.isOn = computer.isOn ?  false : true;
  }
  export {Person};