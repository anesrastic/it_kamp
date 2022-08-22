var randomNumber1 = Math.floor(Math.random()*6) + 1;

var attribute1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var attribute2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", attribute1);

document.getElementsByClassName("img2")[0].setAttribute("src", attribute2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!!";
}