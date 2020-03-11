// bind and this - Object Creation in JavaScript P1 - FunFunFunction #43
// https://www.youtube.com/watch?v=GhbhD1HR5vk

let dog = {
    sound: "woof",
    talk: function() {
        console.log(this.sound);
    }
};

let button = document.getElementById("logo-non-white");

button.addEventListener("click", dog.talk.bind(dog));
