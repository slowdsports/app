function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds + "s";

        if (--timer < 0) {
            timer = "";
        }
    }, 1000);
}

window.onload = function () {
    var quinceSeconds = 15 * 1,
        display = document.querySelector('#time');
    startTimer(quinceSeconds, display);
};