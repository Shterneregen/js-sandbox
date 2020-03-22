var a = 5;
var b = 5;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);

// ==============================================================

let o;
let name1 = o && o.getName();
console.log(name1);

o = {
  name: "bob",
  getName() {
    return this.name;
  }
};

name1 = o && o.getName();
console.log(name1);

// ==============================================================

let cachedName;

function getName() {
  return "John";
}

console.log(Boolean(cachedName));

var name2 = cachedName || (cachedName = getName());

console.log(name2);

