var elNumber = document.getElementById("number");

function setUpClickHandler() {
    var elTracks = document.getElementsByClassName("track");

    function generateClickHandler(trackNumber) {
        return function clickHandler() {
            elNumber.innerHTML = trackNumber;
        };
    }

    for (var i = 0; i < elTracks.length; i++) {
        elTracks[i].addEventListener("click", generateClickHandler(i + 1));
    }
}

setUpClickHandler();
