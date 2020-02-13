console.log("==============================================================");
console.log("var has function scope, let has block scope");
console.log("==============================================================");

function setupVar() {
    console.log(x);
    var x = 100;
    console.log(x);
}
setupVar();
console.log("==============================================================");
function setupLet() {
    let x;
    console.log(x);
    x = 100;
    console.log(x);
}

console.log("==============================================================");
setupLet();

console.log("==============================================================");
function varFun() {
    console.log(i);
    for (var i = 0; i < 10; i++) {}
    console.log(i);
}

varFun();

console.log("==============================================================");
var myVar = "global";

function fun() {
    console.log(myVar);
    var myVar = "local";
    console.log(myVar);
}

fun();

console.log(myVar);
