function talk() {
    console.log(this.sound);
}

let animal = {
    talk // === talk: talk
};

let dog = {
    sound: "woof"
};
let prarieDog = {
    howl: function() {
        console.log(this.sound.toUpperCase());
    }
};

Object.setPrototypeOf(dog, animal);
dog.talk();

Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl();

animal.talk = function() {
    console.log("I am a little teapot", this.sound);
};
dog.talk(); // I am a little teapot
prarieDog.howl(); // WOOF
