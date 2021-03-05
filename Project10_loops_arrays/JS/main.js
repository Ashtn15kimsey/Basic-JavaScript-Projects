function countdown() {
    var seconds = document.getElementById("seconds").value;

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

unction count_To_Ten() {
    Var Digit = "";
    Var X = 1;
    while (X < 11) {
        Digit +="<br>"+X;
        X + +;
    }
    document.getElementById("Count_To_Ten").innerHTML=Digit;