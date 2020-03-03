let clock = new Clock();
clock.run();

function Clock() {
    let res;
    this.run = function() {
        res = setInterval(() => {
            let now = new Date();
            console.log(
                ("0" + now.getHours()).slice(-2) +
                    ":" +
                    ("0" + now.getMinutes()).slice(-2) +
                    ":" +
                    ("0" + now.getSeconds()).slice(-2)
            );
        }, 1000);
    };
    this.stop = function() {
        clearInterval(res);
    };
}
