let slidesUrls = [];
let imageCounter = 0;
let imageUrl = document.getElementById("imageUrl");
let addButton = document.getElementById("addButton");
addButton.addEventListener('click', () => addSlide(imageUrl.value));

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("blogSlides");
    if (!slides || slides.length === 0) return;
    let i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function addSlide(url) {
    console.log("Adding slide", url);
    imageCounter++;
    // slidesUrls.push(url);
    const newSlide = document.createElement("div");
    newSlide.className = "blogSlides fade";
    newSlide.id = "slide_" + imageCounter;
    newSlide.addEventListener("dblclick", () => newSlide.remove());

    const newImg = document.createElement("img");
    newImg.src = url;
    newSlide.appendChild(newImg);

    let slidesContainer = document.getElementById("slider-container");
    slidesContainer.appendChild(newSlide);

    showSlides(slideIndex);
}