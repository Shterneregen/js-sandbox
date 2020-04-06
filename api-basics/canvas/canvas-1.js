// setup canvas
// https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/main.js

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Ball() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.velX = random(-7, 7);
    this.velY = random(-7, 7);
    this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
    this.size = random(10, 20);
}

// define ball draw method
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

// define ball update method
Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

// define ball collision detection
Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if ((!(this.x === balls[j].x
            && this.y === balls[j].y
            && this.velX === balls[j].velX
            && this.velY === balls[j].velY))) {
            let dx = this.x - balls[j].x;
            let dy = this.y - balls[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color
                    = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
};

// define array to store balls
let balls = [];

// define loop that keeps drawing the scene constantly
function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        let ball = new Ball();
        balls.push(ball);
    }

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();