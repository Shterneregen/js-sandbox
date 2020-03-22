// https://learn.javascript.ru/generators

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();

for (let value of generator) {
    console.log(value);
}

// ================================================

function* generateSequence2() {
    yield 1;
    yield 2;
    yield 3;
}

console.log(...generateSequence2())
let sequence = [0, ...generateSequence2()];

console.log(sequence);
