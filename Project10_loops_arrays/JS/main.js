function count_To_Ten(){
}
    var Digit="";
    var X=1;
    while (x<11) {
        digit +="<br>"+X
        x++;
    document.getElementById("Counting_To_Ten").innerHTML=Digit;
}
var sports=["soccer","basketball","football","tennis","hockey"];
var content=""
var Y;
function For_Loop() {
    for (y=0;Y<sports.length; Y++) {
        content += sports[Y]+"<br>";
        }
        document.getElementById("list_of_sports").innerHTML=content;
} 
function cat_pics(){
    var cat_pictures=[];
    cat_picture[0]="sleeping";
    cat_picture[1]="playing";
    cat_picture[2]="eating";
    cat_picture[3]="purring";
    document.getElementById("Cat").innerHTML="in this picture, the cat is"+
          cat_picture[2]+"";
}
function constant_function(){
    const nike_shoes={type:"shoes",brand:"nike",color:"black"};
    nike_shoes.color="blue";
    nike_shoes.price="$200";
    document.getElementById("constant").innerHTML="The cost of the"+
    nike_shoes.type+"was"+nike_shoes.price;
}
var x=90;
document.write(x);
{
    let x=33;
    document.write("<br>"+x);
}
document.write("<br>"+x);

var x=90;
document.write(x);
{
    var x=44;
    document.write("<br>"+x);
}
document.write("<br>"+x);

function myFunction(name) {
    return "Hello" +name
  }
  document.getElementById("example").innerHTML=myFunction("Ash");