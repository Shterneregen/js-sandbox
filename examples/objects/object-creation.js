// Easy JavaScript Part 13: Four Ways to Create Objects in JavaScript
// https://dzone.com/articles/easy-javascript-part-13-four-ways-to-create-object

// In JavaScript, there are four methods to use to create an object:
// 1. Object Literals.
// 2. New operator or constructor.
// 3. Object.create method.
// 4. Class.

console.log("==============================================================");
console.log("==== 1. Object Literals. ====");
console.log("==============================================================");
var car = {
    model: "bmw",
    color: "red"
};
console.log(JSON.stringify(car));
car.type = "manual"; // dynamic property
console.log(JSON.stringify(car));

Object.defineProperty(car, "price", {
    writable: true,
    enumerable: true,
    configurable: false,
    value: 2000
});
console.log(car.price);

console.log("==============================================================");
console.log("==== 2. New operator or constructor. ====");
console.log("==============================================================");
// Constructor Invocation Pattern.

function Car(model, color) {
    this.model = model;
    this.color = color;
}
var c1 = new Car("BMW", "red");
console.log(c1.model);

console.log(c1 instanceof Car);

function Car(model) {
    // The main advantage of using Object.defineProperty is that you can set values for object property
    Object.defineProperty(this, "model", {
        writable: true,
        enumerable: true,
        configurable: false,
        value: model
    });
}
var myCar = new Car("Audi A3");
console.log(myCar.model); // Audi  A3

console.log("==============================================================");
console.log("==== 3. Object.create method. ====");
console.log("==============================================================");

var Car = {
    model: "BMW",
    color: "red"
};

var ElectricCar = Object.create(Car);
console.log(ElectricCar.model); // BMW

var ElectricCar = Object.create(Car, {
    type: {
        value: "Electric",
        writable: true,
        configurable: false,
        enumerable: true
    }
});
console.log(ElectricCar.type); // Electric

console.log("==============================================================");
console.log("==== 4. Class. ====");
console.log("==============================================================");

class Car2 {
    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }
    getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
}

var car1 = new Car2("BMW", 100);
car1.getInfo();
var car2 = new Car2("Audi", 150);
car2.getInfo();
