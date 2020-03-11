// The 'new' keyword - Object Creation in JavaScript P4 - FunFunFunction #50
// https://www.youtube.com/watch?v=Y3zzCY62NYc

// What new does?
// 1. Create new object
// 2. Set the prototype
// 3. Execute constructor with "this"
// 4. Return the created object

function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function() {
    console.log("I say:", this.saying);
};

// new keyword under the hood
function customNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);

    var argsArray = Array.prototype.slice.apply(arguments);
    // or
    // var argsArray = Array.from(arguments); // ES6

    return constructor.apply(obj, argsArray.slice(1)) || obj;

    // or
    // constructor.apply(obj, argsArray.slice(1));
    // return obj;
}

// These two below are equivalent
var crock_custom = customNew(Person, "Gouda");
var crock_new = new Person("Gouda");

crock_custom.talk();
crock_new.talk();
