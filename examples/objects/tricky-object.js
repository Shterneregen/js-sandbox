console.log("==============================================================");
console.log("==== return in object constructor ====");
console.log("==============================================================");
//https://javascript.info/constructor-new
// Return from constructors
// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.

class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        // return "234"; // primitive types will be ignored
        // return; // this also will be ignored
        return { one: 1, two: "2" }; // this will be returned
    }
}

var course01 = new Course("JS", "Morten");
console.log(course01);

console.log("==============================================================");
console.log("==== Object.getOwnPropertyNames vs Object.keys ====");
console.log("==============================================================");
// https://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys

// There is a little difference. Object.getOwnPropertyNames(a) returns all own properties of the object a.
// Object.keys(a) returns all enumerable own properties.
// It means that if you define your object properties without making some of them enumerable: false these two methods will give you the same result.

let a = {};
Object.defineProperties(a, {
    one: { enumerable: true, value: "one" },
    two: { enumerable: false, value: "two" }
});

console.log(Object.keys(a)); // ["one"]
console.log(Object.getOwnPropertyNames(a)); // ["one", "two"]
