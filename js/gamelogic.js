const x = "x", o = "o";
var vb1, hb1, vb2, hb2, vb3, hb3, vb4, hb4, vb5, hb5, vb6, hb6, vb7, hb7, vb8, hb8, vb9, hb9;
vb1 = document.getElementById("shown-card-one");
hb1 = document.getElementById("square-one");
vb2 = document.getElementById("show-card-two");
hb2 = document.getElementById("square-2");
vb3 = document.getElementById("shown-card-three");
hb3 = document.getElementById("square-three");
vb4 = document.getElementById("show-card-four");
hb4 = document.getElementById("square-four");
vb5 = document.getElementById("shown-card-five");
hb5 = document.getElementById("square-five");
vb6 = document.getElementById("show-card-six");
hb6 = document.getElementById("square-six");
vb7 = document.getElementById("shown-card-seven");
hb7 = document.getElementById("square-seven");
vb8 = document.getElementById("show-card-eight");
hb8 = document.getElementById("square-eight");
vb9 = document.getElementById("shown-card-nine");
hb9 = document.getElementById("square-nine");



function showOptionOne(){
    var shownCardVisible = true;
    var showO = document.getElementById("choose-o-one");
    var showX = document.getElementById("choose-x-one");
    

    if(shownCardVisible === true){
        shownCardVisible = false;
        vb1.style.visibility = "hidden";
        vb1.style.transition = "0.5s";
        hb1.style.visibility = "visible";
        hb1.style.transition = "0.5s";
        showO.style.visibility = "visible";
        showX.style.visibility = "hidden";
    } else{
        shownCardVisible = true;
        vb1.style.visibility = "visible";
        hb1.style.visibility = "hidden";
    }
}