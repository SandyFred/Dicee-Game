
var randNumber1 = Math.floor(Math.random()*6) + 1;

var imageSource = "images/dice" + randNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource);
var randNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randNumber2+".png");

if(randNumber1 > randNumber2)
document.querySelector("h1").innerHTML = "Player 1 wins!";
else if(randNumber2 > randNumber1)
document.querySelector("h1").innerHTML = "Player 2 wins!";
else
document.querySelector("h1").innerHTML = "Draw!";
