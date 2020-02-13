// Arithmetic Operators
let e1 = 5 + 5 - (4 * 4) / 4;
console.log(e1);

console.log("==============================================================");
console.log("==== Modulo operator ====");
console.log("==============================================================");
let e2 = 5 % 5;
console.log(e2); // 0

let e3 = 5 % 6;
console.log(e3); // 5

let e4 = 5 % 3;
console.log(e4); // 2

console.log("==============================================================");
console.log("==== Relational Operators ====");
console.log("==============================================================");
let e5 = 10;
let e6 = 15;

console.log(e5 > e6);
console.log(e5 >= e6);
console.log(e5 < e6);
console.log(e5 <= e6);
console.log(e5 == e6);
console.log(e5 === e6);
console.log(e5 != e6);
console.log(e5 !== e6);

console.log("==============================================================");

let e7 = 10;
let e8 = "10";

console.log("typeof e7: ", typeof e7, "; typeof e8 :", typeof e8);

console.log(e7 == e8);
console.log(e7 === e8);

console.log("==============================================================");

let e9 = 5 === 5; // true
let e10 = 5 == "5"; // true
let e11 = 6 != "6"; // false
let e12 = 7 !== "7"; // true

console.log(e9);
console.log(e10);
console.log(e11);
console.log(e12);

console.log("==============================================================");
console.log("==== Increment & Decrement ====");
console.log("==============================================================");

let i1 = 1;
i1 = i1 + 1;
i1 += 1;
i1++;
console.log(i1);

i1 *= 20;
i1 /= 10;
i1 -= 1;
i1 %= 4;

console.log(i1);
console.log("==============================================================");

let i2 = 5;
console.log(i2++);

let i3 = 5;
console.log(++i3);

console.log("==============================================================");
console.log("==== If Else ====");
console.log("==============================================================");

let r1 = 5;

if (r1 === 4) {
    console.log("if");
} else if (r1 === 6) {
    console.log("else if");
} else {
    console.log("else");
}

console.log("==============================================================");
console.log(10 === 10 && 5 < 4); // false
console.log(10 === 10 || 5 < 4); // true
console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5); // true

console.log("==============================================================");
console.log("==== Switch ====");
console.log("==============================================================");

let s1 = "D";
switch (s1) {
    case "A":
        console.log("A is wrong");
        break;
    case "B":
        console.log("B is wrong");
        break;
    case "C":
        console.log("C is correct");
        break;
    default:
        console.log("Wrong answer");
}

console.log("==============================================================");
console.log("==== For loop ====");
console.log("==============================================================");

let total = 0;
for (let i = 0; i < 5; i++) {
    total += i;
}
console.log(total);

let numArr = [10, 20, 30];
for (let i = 0; i < numArr.length; i++) {
    total += numArr[i];
}

console.log(total);

console.log("==============================================================");
console.log("==== While & Do While ====");
console.log("==============================================================");

let count = 0;

while (count < 20) {
    count++;
}
console.log(count);

count = 0;
while (true) {
    count++;
    if (count >= 20) {
        break;
    }
}
console.log(count);

count = 0;
do {
    count++;
    if (count >= 20) {
        break;
    }
} while (false);
console.log(count);
