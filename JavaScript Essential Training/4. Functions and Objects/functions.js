function findBiggestFraction0(a, b) {
  a > b ? console.log("a: ", a) : console.log("b: ", b);
}

let a = 3 / 4;
let b = 5 / 7;

findBiggestFraction0(a, b);

// ================================================================
function findBiggestFraction1(a, b) {
  let result;
  a > b ? (result = ["firstFraction", a]) : ["secondFraction", b];
  return result;
}

let result = findBiggestFraction1(a, b);
console.log(result);

// ================================================================
function findBiggestFraction(a, b) {
  var result;
  a > b ? (result = ["firstFraction", a]) : (result = ["secondFraction", b]);
  return result;
}

var firstFraction = 3 / 4;
var secondFraction = 5 / 7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log(
  "Fraction " +
    fractionResult[0] +
    " with a value of " +
    fractionResult[1] +
    " is the biggest!"
);

// ================================================================

// Regular function, called explicitly by name:
function multiply() {
  var result = 3 * 4;
  console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
  var result = 3 / 4;
  console.log("3 divided by 4 is ", result);
};
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
  var result = 12 / 0.75;
  console.log("12 divided by 0.75 is ", result);
})();

// ================================================================

var theBiggest = function(a, b) {
  var result;
  a > b ? (result = ["a", a]) : (result = ["b", b]);
  return result;
};

console.log(theBiggest(7 / 9, 13 / 25));

// ================================================================

var theBiggest = (function(a, b) {
  var result;
  a > b ? (result = ["a", a]) : (result = ["b", b]);
  return result;
})(7 / 9, 13 / 25);

console.log(theBiggest);

// ================================================================
