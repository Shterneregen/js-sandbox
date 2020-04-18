console.log("================================");
console.log("Apply inline CSS to an element");
console.log("================================");
let buttons = document.getElementsByTagName("input");
Array.from(buttons).forEach(btn => {
    btn.style.color = "yellow";
    btn.style.background = "gray";
    btn.style.padding = "10px";
});

// Replacing entire value in the style attribute
body.style.cssText = "background-color: lightcyan";
let spanTest = document.getElementsByClassName("span-test")[0];
spanTest.setAttribute("style", "color: blue;")