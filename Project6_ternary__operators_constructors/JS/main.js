function Ride_function() {
    var height, can_ride;
    height=document.getElementById("Height").nodeValue;
    can_ride=(height<40)? "you are too short":"you are tall enugh";
    document.getElementById("Ride").innerHTML=can_ride+"to ride";
}
 function Voting_age() {
     var age, can vote;
     age=document.getElementById("age").innerHTML;
     can_vote=(age<18)?"You are too young":"you are old enough";
     document.getElementById("vote").innerHTML=can_vote+"to vote";
 }
 function vehicle(make,model,year,color{
     this.vehicle_make=make;
     this.vehicle_model=model;
     this.vehicle_year=year;
     this.vehicle_color=color;
}
var adam=new vehicle("dodge","durango","2021","black");
var ash=new vehicle("ferrari","spider","2021","grey");
var jim=new vehicle("toyota","highlander","2018","red");
function myfunction() {
    document.getElementById("keywords_and_construction").innerHTML="adam drives a"+
    adam.vehicle_color+"-colored"+adam.vehicle_model+"manufactured in"+adam.vehicle_year;
    
}