function countdown() {
    var seconds = document.getElementById("seconds").Value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();    
}

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>"+X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;