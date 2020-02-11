const interestRate = 0.3;

// =================================================
// Primitive Types
let name = "name"; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let lastName = null;

// =================================================
// Object
let person = {
  name: "John",
  age: 30
};

// Dot Notation
person.name = "Valli";
// Bracket Notation
person["name"] = "Bob";

let selection = "name";
person[selection] = "Harry";

// =================================================
// Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
let len = selectedColors.length;
console.log(len);
console.log(typeof selectedColors);
