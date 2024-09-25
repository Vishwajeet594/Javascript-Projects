let [sec, min, hrs] = [0, 0, 0];
let time = document.querySelector("#time");
let timer = null;

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");

startButton.addEventListener("click", startWatch);
stopButton.addEventListener("click", stopWatch);
resetButton.addEventListener("click", resetWatch);

function stopwatch() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hrs++;
        }
    }

    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    time.innerHTML = `${h}:${m}:${s}`;
}

function startWatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function stopWatch() {
    clearInterval(timer);
}

function resetWatch() {
    clearInterval(timer);
    [sec, min, hrs] = [0, 0, 0];
    time.innerHTML = "00:00:00";
}
