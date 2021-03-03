function countdown() {
    var seconds=document.getElementById("seconds").nodeValue
    function tick(){
        seconds=seconds-1;
        TimeRanges.innerHTML=seconds;
        setTimeout(tick 100);
        if(second==-1){
            alert("times up!");
        }
            
    }     
    tick();
}
