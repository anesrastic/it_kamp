window.addEventListener('load', (event) => {
    var dicePlayer1 = Math.floor(Math.random()*6+1);
    var dicePlayer2 = Math.floor(Math.random()*6+1);

    if(dicePlayer1 > dicePlayer2){
        document.getElementById("pobednik").innerHTML = "<i class='fa-solid fa-flag'></i>  Player 1 Wins!";
    } else if(dicePlayer1 < dicePlayer2){
        document.getElementById("pobednik").innerHTML = "<i class='fa-solid fa-flag'></i>  Player 2 Wins!";
    } else {
        document.getElementById("pobednik").innerHTML = "Draw!!!!!!";
    }

    switch(dicePlayer1){
        case 1:
            document.getElementsByClassName("prviRed")[0].classList.add("invisibile");
            document.getElementsByClassName("treciRed")[0].classList.add("invisibile");
        break;
        case 2:
            // document.getElementsByClassName("one")[0].classList.add("invisibile");
            document.getElementsByClassName("two")[0].classList.add("invisibile");
            document.getElementsByClassName("three")[0].classList.add("invisibile");
            document.getElementsByClassName("four")[0].classList.add("invisibile");
            document.getElementsByClassName("five")[0].classList.add("invisibile");
            document.getElementsByClassName("six")[0].classList.add("invisibile");
            // document.getElementsByClassName("seven")[0].classList.add("invisibile");
        break;
        case 3:
            // document.getElementsByClassName("one")[0].classList.add("invisibile");
            document.getElementsByClassName("two")[0].classList.add("invisibile");
            document.getElementsByClassName("three")[0].classList.add("invisibile");
            // document.getElementsByClassName("four")[0].classList.add("invisibile");
            document.getElementsByClassName("five")[0].classList.add("invisibile");
            document.getElementsByClassName("six")[0].classList.add("invisibile");
            // document.getElementsByClassName("seven")[0].classList.add("invisibile");
        break;
        case 4:
            // document.getElementsByClassName("one")[0].classList.add("invisibile");
            document.getElementsByClassName("two")[0].classList.add("invisibile");
            // document.getElementsByClassName("three")[0].classList.add("invisibile");
            document.getElementsByClassName("four")[0].classList.add("invisibile");
            // document.getElementsByClassName("five")[0].classList.add("invisibile");
            document.getElementsByClassName("six")[0].classList.add("invisibile");
            // document.getElementsByClassName("seven")[0].classList.add("invisibile");
        break;
        case 5:
            // document.getElementsByClassName("one")[0].classList.add("invisibile");
            document.getElementsByClassName("two")[0].classList.add("invisibile");
            // document.getElementsByClassName("three")[0].classList.add("invisibile");
            // document.getElementsByClassName("four")[0].classList.add("invisibile");
            // document.getElementsByClassName("five")[0].classList.add("invisibile");
            document.getElementsByClassName("six")[0].classList.add("invisibile");
            // document.getElementsByClassName("seven")[0].classList.add("invisibile");
        break;
        case 6:
            // document.getElementsByClassName("one")[0].classList.add("invisibile");
            // document.getElementsByClassName("two")[0].classList.add("invisibile");
            // document.getElementsByClassName("three")[0].classList.add("invisibile");
            document.getElementsByClassName("four")[0].classList.add("invisibile");
            // document.getElementsByClassName("five")[0].classList.add("invisibile");
            // document.getElementsByClassName("six")[0].classList.add("invisibile");
            // document.getElementsByClassName("seven")[0].classList.add("invisibile");
        break;            
    }

    switch(dicePlayer2){
        case 1:
            document.getElementsByClassName("prviRed")[1].classList.add("invisibile");
            document.getElementsByClassName("treciRed")[1].classList.add("invisibile");
        break;
        case 2:
            // document.getElementsByClassName("one")[1].classList.add("invisibile");
            document.getElementsByClassName("two")[1].classList.add("invisibile");
            document.getElementsByClassName("three")[1].classList.add("invisibile");
            document.getElementsByClassName("four")[1].classList.add("invisibile");
            document.getElementsByClassName("five")[1].classList.add("invisibile");
            document.getElementsByClassName("six")[1].classList.add("invisibile");
            // document.getElementsByClassName("seven")[1].classList.add("invisibile");
        break;
        case 3:
            // document.getElementsByClassName("one")[1].classList.add("invisibile");
            document.getElementsByClassName("two")[1].classList.add("invisibile");
            document.getElementsByClassName("three")[1].classList.add("invisibile");
            // document.getElementsByClassName("four")[1].classList.add("invisibile");
            document.getElementsByClassName("five")[1].classList.add("invisibile");
            document.getElementsByClassName("six")[1].classList.add("invisibile");
            // document.getElementsByClassName("seven")[1].classList.add("invisibile");
        break;
        case 4:
            // document.getElementsByClassName("one")[1].classList.add("invisibile");
            document.getElementsByClassName("two")[1].classList.add("invisibile");
            // document.getElementsByClassName("three")[1].classList.add("invisibile");
            document.getElementsByClassName("four")[1].classList.add("invisibile");
            // document.getElementsByClassName("five")[1].classList.add("invisibile");
            document.getElementsByClassName("six")[1].classList.add("invisibile");
            // document.getElementsByClassName("seven")[1].classList.add("invisibile");
        break;
        case 5:
            // document.getElementsByClassName("one")[1].classList.add("invisibile");
            document.getElementsByClassName("two")[1].classList.add("invisibile");
            // document.getElementsByClassName("three")[1].classList.add("invisibile");
            // document.getElementsByClassName("four")[1].classList.add("invisibile");
            // document.getElementsByClassName("five")[1].classList.add("invisibile");
            document.getElementsByClassName("six")[1].classList.add("invisibile");
            // document.getElementsByClassName("seven")[1].classList.add("invisibile");
        break;
        case 6:
            // document.getElementsByClassName("one")[1].classList.add("invisibile");
            // document.getElementsByClassName("two")[1].classList.add("invisibile");
            // document.getElementsByClassName("three")[1].classList.add("invisibile");
            document.getElementsByClassName("four")[1].classList.add("invisibile");
            // document.getElementsByClassName("five")[1].classList.add("invisibile");
            // document.getElementsByClassName("six")[1].classList.add("invisibile");
            // document.getElementsByClassName("seven")[1].classList.add("invisibile");
        break;            
    }
});

