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
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

    function cat_pics() {
        var Cat_picture = [];
        Cat_Picture[0] = "sleeping";
        Cat_Picture[1] = "playing";
        Cat_Picture[2] = "eating";
        Cat_Picture[3] = "purring";
        document.getElementById("Cat").innerHTML="In this picture, the cat is " +
            Cat_Picture[2] + ".";
    }
    function constant_function(){
        const Musical_Instrument={type:"guitar", brand:"Fender", color:"black"};
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "$500";
        document.getElementById("Constant").innerHTML= "The cost of the"+
        Musical_Instrument.type + "was" + Musical_Instrument.price;
    }
    let Car={
        make: "Dodge",
        model: "Viper",
        year: "2021",
        color: "red",
        description : function() {
            return "The car is a" + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML= car.description();
