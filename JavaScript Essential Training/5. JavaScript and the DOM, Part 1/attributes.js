console.log("================================");
console.log("Change elements attributes");
console.log("================================");
let lis = document.querySelectorAll(".list .li");
Array.from(lis).forEach(li => {
    if (!li.hasAttribute("readonly")) {
        let link = document.createElement("a");
        link.setAttribute("class", "my-link");
        link.setAttribute("href", "https://google.com");
        li.appendChild(link);
    }
});