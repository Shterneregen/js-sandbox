console.log("================================");
console.log("Change dom elements");
console.log("================================");

console.log(document.querySelector(".main-title"));
console.log(document.querySelector(".main-title").outerHTML);
console.log(document.querySelector(".main-title").innerHTML);

setTimeout(() => {
    document.querySelector(".main-title").innerHTML = "Ooops";
}, 1000);


setTimeout(() => {
    document.querySelector("#ul-list").id = "test-list";
}, 1500);
console.log("className:", document.querySelector(".list").className);
console.log("classList:", document.querySelector(".list").classList);
console.log("classList[1]:", document.querySelector(".list").classList[1]);

/* Add new class to the element */
let addClassButton = createButton("Add class");
addClassButton.addEventListener("click", () => {
    document.querySelector(".list").classList.add("bold")
});

let div1 = document.getElementById("div-1");
div1.appendChild(addClassButton);

/* Remove class from the element */
let removeClassButton = createButton("Remove class");
removeClassButton.addEventListener("click", () => {
    document.querySelector(".list").classList.remove("bold");
});
div1.appendChild(removeClassButton);

/* Toggle class*/
let toggleRedClassButton = createButton("Toggle red text");
toggleRedClassButton.addEventListener("click", () => {
    document.querySelector(".list").classList.toggle("red-text");
});
div1.appendChild(toggleRedClassButton);

/* Check class in the list*/
let checkRedClassButton = createButton("Check red text");
checkRedClassButton.addEventListener("click", () => {
    let redClassInTheList = document.querySelector(".list").classList.contains("red-text");
    let not = redClassInTheList ? "" : "not ";
    alert(`Text is ${not}red!`)
});
div1.appendChild(checkRedClassButton);

function createButton(buttonText) {
    let button = document.createElement("input");
    button.type = "button";
    button.value = buttonText;
    return button;
}