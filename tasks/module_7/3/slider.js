let imageCounter = 0;
let autoSlide;
let slideIndex = 1;
const defaultTimerIntervalSec = 2;

let timer = document.getElementById("timer");
timer.addEventListener("change", () => startAutoSliding());
timer.value = defaultTimerIntervalSec;

let imageUrl = document.getElementById("imageUrl");
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => addSlide(imageUrl.value));


function plusSlides(n, withoutStopping) {
    showSlides(slideIndex += n);
    if (!withoutStopping) {
        stopAutoSliding();
    }
}

function showSlides(n) {
    let slides = document.getElementsByClassName("blogSlides");
    if (!slides || slides.length === 0) return;

    let i;
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function addSlide(url) {
    loadImage(url).then((image) => {
        imageCounter++;
        let slidesContainer = document.getElementById("slider-container");
        slidesContainer.appendChild(createSlide(image));
        showSlides(slideIndex);
        imageUrl.value = "";
        if (imageCounter > 1) {
            startAutoSliding();
        }
    }).catch((error) => {
        console.log("Some error:", error);
    });
}

let createSlide = (newImg) => {
    const newSlide = document.createElement("div");
    newSlide.className = "blogSlides fade";
    newSlide.id = "slide_" + imageCounter;
    newSlide.addEventListener("dblclick", () => removeSlide(newSlide));
    newSlide.appendChild(newImg);
    return newSlide;
};

let removeSlide = (slide) => {
    if (confirm("Are you sure you want to remove slide?")) {
        plusSlides(1);
        slide.remove();
        imageCounter--;
    }
};

let startAutoSliding = () => {
    if (imageCounter < 2) {
        return;
    }
    console.log("Start auto sliding, interval =", timer.value);
    clearInterval(autoSlide);
    autoSlide = setInterval(() => plusSlides(1, true),
        timer.value * 1000 || defaultTimerIntervalSec * 1000)
};

let stopAutoSliding = () => {
    console.log("Stop auto sliding");
    clearInterval(autoSlide)
};

let loadImage = (url) => {
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            let message = "Could not load image at " + url;
            reject(new Error(message));
        };

        image.src = url;
    });
};