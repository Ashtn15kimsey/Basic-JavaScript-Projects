function get_date(){
    var d=new Date();
    document.getElementById("greeting").innerHTML=d.getMonth();
    
}
function age_function(){
    age=document.getElementById("age").value;
    if (age>=20) {
        vote="You are old enough to vote!";
      }
      else{
          vote="You are not old enough to vote!";
      }
      document.getElementById("how_old_are_you?").innerHTML=vote;
}

function Time_function(){
    var time=new date().gethours();
    var reply;
    if time<12==time>0){
        reply="its morning time!";
    }
    else if(time>=12==time<18){
        reply="its afternoon";
    }
    else{
        reply="it is evening";
    }
    document.getElementById("time_of_day").innerHTML=reply;
}