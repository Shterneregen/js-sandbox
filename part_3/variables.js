console.log("==============================================================");
console.log("==== Strings ====");
console.log("==============================================================");

let firstName = "Bob";
let lastName = "Dylan";

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log("==============================================================");
console.log("==== Numbers ====");
console.log("==============================================================");

let number = 7.77;
console.log(number); // 7
console.log(parseInt(number)); // 7
console.log(parseFloat(number)); // 7.77

console.log(number.toFixed(5)); // 7.77000
console.log(number.toFixed(1)); // 7.8
console.log(number.toFixed(0)); // 8

console.log("==============================================================");

let e1 = parseInt("Hello 333 World 22");
let e2 = parseFloat("44 qwe");
let e3 = (55.3333).toFixed(0);
let e4 = (200.0).toFixed(2);

console.log(e1, typeof e1); // NaN number
console.log(e2, typeof e2); // 44 number
console.log(e3, typeof e3); // 55 string
console.log(e4, typeof e4); // 200.00 string

console.log("==============================================================");
console.log("==== Booleans ====");
console.log("==============================================================");

let b1 = false;
let b2 = true;
let b3 = null;
let b4 = undefined;
let b5 = "";
let b6 = NaN;
let b7 = -5;
let b8 = 0;
let b9 = "true";
let b10 = "2";
let b11 = " ";

console.log("b1: ", b1, "\t", typeof b1, "\t", Boolean(b1));
console.log("b2: ", b2, "\t", typeof b2, "\t", Boolean(b2));
console.log("b3: ", b3, "\t", typeof b3, "\t", Boolean(b3));
console.log("b4: ", b4, "\t", typeof b4, "\t", Boolean(b4));
console.log("b5: ", b5, "\t\t", typeof b5, "\t", Boolean(b5));
console.log("b6: ", b6, "\t", typeof b6, "\t", Boolean(b6));
console.log("b7: ", b7, "\t", typeof b7, "\t", Boolean(b7));
console.log("b8: ", b8, "\t\t", typeof b8, "\t", Boolean(b8));
console.log("b9: ", b9, "\t", typeof b9, "\t", Boolean(b9));
console.log("b10: ", b10, "\t", typeof b10, "\t", Boolean(b10));
console.log("b11: ", b11, "\t", typeof b11, "\t", Boolean(b11));

console.log("==============================================================");
console.log("==== Arrays ====");
console.log("==============================================================");

let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
arr1.pop();

arr1.forEach((el) => console.log(el));
console.log("==============================================================");
console.log("==== Arrays are being passed by reference  ====");

let arr2 = ["Bob", 5, true];
let arr3 = arr2;

arr2.push(11);
console.log(arr2); // [ 'Bob', 5, true, 11 ]
console.log(arr3); // [ 'Bob', 5, true, 11 ]

console.log("==============================================================");
console.log("==== Create a brand new Array ====");
console.log("==== using spread operator or mam method ====");
console.log("==============================================================");

let arr4 = ["Bob", 5, true];
let arr5 = [...arr4];
// let arr5 = arr4.map((el) => {
//     return el;
// });

arr5.push(11);

console.log(arr4); // [ 'Bob', 5, true ]
console.log(arr5); // [ 'Bob', 5, true, 11 ]

console.log("==============================================================");
console.log("Or slice method");

let arr6 = ["Bob", 5, true];
let arr7 = arr6.slice();
arr7.push(11);

console.log(arr6);
console.log(arr7);

console.log("==============================================================");
console.log("==== Objects ====");
console.log("==============================================================");

let obj1 = {
    firstName: "Bob",
    lastName: "Iden",
    address: {
        city: "Austin",
        state: "Texas"
    },
    age: 30
};
obj1.age = 33;

console.log("Age", obj1.age);

console.log("Object's properties", Object.keys(obj1));
console.log("Object's values", Object.values(obj1));

console.log("Has 'firstName' propery: ", obj1.hasOwnProperty("firstName"));
console.log("Has 'cats' propery: ", obj1.hasOwnProperty("cats"));

console.log("==============================================================");
console.log("==== Objects are being passed by reference  ====");

let obj2 = {
    firstName: "Alice"
};

let obj3 = obj2;

obj3.firstName = "Anna";
obj3.lastName = "Tod";

console.log("obj2", obj2);
console.log("obj3", obj3);

console.log("==============================================================");
console.log("==== Create a brand new Object ====");

let obj4 = {
    firstName: "Alice"
};

let obj5 = Object.assign({}, obj4);

obj5.firstName = "Anna";
obj5.lastName = "Tod";

console.log("obj2", obj4);
console.log("obj3", obj5);
