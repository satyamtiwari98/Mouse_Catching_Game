let init = 0;


setInterval(letsPlay, 600);


function letsPlay() {

    let image = document.createElement("img");
    image.setAttribute("src", "mouse.png");
    image.setAttribute("onclick", "count();");
    let divBox = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];

    let randomNumber = Math.floor(Math.random() * 9);
    document.getElementById(divBox[init]).innerHTML = '';

    document.getElementById(divBox[randomNumber]).appendChild(image);

    init = randomNumber;

}

let score = 0;
function count() {

    score = score + 10;
    document.getElementById('score').innerHTML = score;
    document.getElementById('showScore').innerHTML = 'Your score is ' + score;

}


let timeAlloted = 60;
let Timer = setInterval(function () {

    if (timeAlloted <= 0) {

        clearInterval(Timer);
        document.getElementById("time").innerHTML = "Finished";
        document.getElementById("show").style.display = "block";
        document.getElementById("playDiv").style.display = "none";
        getCookie(score);
        setCookie(score);

    } else {

        document.getElementById("time").innerHTML = timeAlloted + " seconds remaining";
        document.getElementById('highScore').innerHTML = document.cookie;

    }

    timeAlloted = timeAlloted - 1;

}, 1000);


function index_page() {

    location.replace("index.html");

}


function getCookie(score) {

    let highScore = document.cookie.split(" = ")[1];
    if (highScore == undefined) {

        highScore = 0;

    }
    if (score > highScore) {

        document.getElementById('highestScore').innerHTML = 'Congratulation!! Your Highest Score is ' + score;

    }
}


function setCookie(score) {

    let highScore = document.cookie.split("=")[1];
    if (highScore == undefined) {

        highScore = 0;

    }
    if (score > highScore) {

        document.cookie = 'Your Highest Score is  ' + score;

    }

    console.log(document.cookie);
    document.getElementById('highScore').innerHTML = document.cookie;

}

