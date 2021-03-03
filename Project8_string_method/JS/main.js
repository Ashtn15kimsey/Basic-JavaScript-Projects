function full_sentence(){
    var part_1="I have";
    var part_2="made this";
    var part_3="into a complete";
    var part_4="a sentence";
    var whole_sentence=part_1.concate(part_2,part_3,part_4);
    document.getElementById("concatenate").innerHTML=whole_sentence
}

function slice_method(){
    var sentence="all work and no play makes january a dull day.";
    var section=sentence.slide(27,33);
    document.getElementById("slice").innerHTML=section;
}
var str="Hellow World!";
var res=str.toLocaleUpperCase();
document.getElementById("lowercase").innerHTML=res

function string_method{) {
    var x=182;
    document..getElementById("numbers_to_string").innerHTML=x.toString();
}
function precision_method() {
    var x=1938.3012987376112;
    document.getElementsByClassName("precision").innerHTML=x.toPrecision(10);
}
var num=5.56789.878
document.write(test.tofixed(1));

