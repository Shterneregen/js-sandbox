// Without curryng
let dragon = (name, size, element) =>
    name + " is a " + size + " dragon that breathes " + element + "!";

console.log(dragon("fluffykins", "tiny", "lighttning"));

// With curryng
let dragon_curryng = (name) => (size) => (element) =>
    name + " is a " + size + " dragon that breathes " + element + "!";

console.log(dragon_curryng("fluffykins")("tiny")("lighttning"));

let fluffykinsDragon = dragon_curryng("fluffykins");
console.log(fluffykinsDragon("tiny")("lighttning"));

let tinyDragon = fluffykinsDragon("tiny");
console.log(tinyDragon("lighttning"));

let lighttningDragon = tinyDragon("lighttning");
console.log(lighttningDragon);
