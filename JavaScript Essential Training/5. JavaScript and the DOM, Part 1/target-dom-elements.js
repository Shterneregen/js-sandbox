console.log("================================");
console.log("Target dom elements");
console.log("================================");

// DOM properties
let body = document.body;
let title = document.title;
let url = document.URL;

console.log(body);
console.log(title);
console.log(url);

// DOM methods
let elementById = document.getElementById("div-1");
console.log("elementById", elementById);
let elementsByClassName = document.getElementsByClassName("span-test");
console.log("elementsByClassName", elementsByClassName);
let elementsByTagName = document.getElementsByTagName("span");
console.log("elementsByTagName", elementsByTagName);

// Get the first element matching specified selector(s)
console.log(document.querySelector(".main-nav a"));
// Get all elements matching specified selector(s)
console.log(document.querySelectorAll(".main-nav a"));
