var _ = require('lodash');

// var array = [1,2,3,4,5,6,7,8];
// console.log('answer:', _.without(array,3))

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomColor() {
    var r = Math.floor(Math.random() * 16777216);
    color1 = "#" + r.toString(16);
    var d = Math.floor(Math.random() * 16777216);
    color2= "#" + d.toString(16);
    body.style.background = 
    "linear-gradient(to right, " 
    + color1
    + ", "
    + color2
    + ")";

    console.log(color1);
    console.log(color2);
    css.textContent = body.style.background + ";";
}




// btn.addEventListener ("click", randomColor());



// textContent -> adds a text content (DOM)

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

//this is more extensible than "oninput" method in html

