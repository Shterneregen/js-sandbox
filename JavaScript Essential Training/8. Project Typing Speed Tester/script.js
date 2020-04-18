const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originTextEl = document.getElementById("text-to-test");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0, 0];
let interval;
let timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    theTimer.innerHTML = `${leadingZero(timer[0])}:${leadingZero(timer[1])}:${leadingZero(timer[2])}`;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - timer[0] * 6000);
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    const originText = document.querySelector("#origin-text p").innerHTML;
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered === originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered === originTextMatch) {
            testWrapper.style.borderColor = "#65ccf3";
        } else {
            testWrapper.style.borderColor = "#e95d0f";
        }
    }
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}


// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

originTextEl.addEventListener("dblclick", () => {
    originTextEl.contentEditable = "true";
});

originTextEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        originTextEl.contentEditable = "false";
        console.log(originTextEl.innerHTML)
    }
});
