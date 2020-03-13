import loadImage from "./load-image";

let addImg = (src) => {
    let imgElement = document.createElement("img");
    imgElement.src = src;
    document.body.appendChild(imgElement);
};

Promise.all([loadImage("1.JPG")])
    .then((images) => {
        images.forEach((img) => addImg(img.src));
    })
    .catch((error) => {
        console.log("Some error:", error);
    });

// Promises - Part 8 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=2d7s3spWAzo
