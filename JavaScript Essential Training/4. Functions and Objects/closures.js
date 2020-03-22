function doSomeMath() {
    var a = 5;
    var b = 4;

    function multiply() {
        var result = a * b;
        return result;
    }
    return multiply;
}

var theResult = doSomeMath();
console.log("theResult: ", theResult);
console.log("theResult(): ", theResult());

console.log("==============================================================");

function giveMeEms(pixels) {
    var baseValue = 16;
    function doTheMath() {
        return pixels / baseValue;
    }
    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("Extra Large size: ", xlargeSize());

console.log("==============================================================");

function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}

var x = makeAdder(5);
var y = makeAdder(20);

console.log(x(6));
console.log(y(7));
