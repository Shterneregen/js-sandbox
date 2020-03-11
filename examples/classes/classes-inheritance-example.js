class Mammal {
    constructor(sound) {
        this.sound = sound;
    }

    talk() {
        return this.sound;
    }
}

class Dog extends Mammal {
    constructor() {
        super("superwoof");
    }
}

let mammal = new Mammal("woof");
console.log(mammal.talk());

let dog = new Dog();
console.log(dog.talk());

console.log(typeof Dog); // function

// Class is just a very thin layer on top of the prototype inheritance
let check = Dog.prototype.isPrototypeOf(dog);
console.log(check); // true
