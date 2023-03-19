var computerChoice;
var playerChoice;

var gameOutcome;

var btns = document.querySelectorAll("button");

for (var i = 0; i < 3; i++) {
    btns[i].addEventListener("click", playGame)
}

function playGame() {
    playerChoice = this.id;
    getComputerChoice();

    changeImgs();

    findWinner(computerChoice, playerChoice);

    document.querySelector("h1").innerText = gameOutcome;
    
}

function getComputerChoice() {
    var computerNum = Math.ceil(Math.random() * 3)

    switch (computerNum){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
}

function changeImgs() {
    document.getElementById("computerChoiceImg").src = "images/" + computerChoice + ".png";
    document.getElementById("playerChoiceImg").src = "images/" + playerChoice + ".png";
}

function findWinner(p1, p2) {
    if (p1 === p2){
        gameOutcome = "It's a Tie!!";
    } else if ((p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock") || p1 === "scissors" && p2 === "paper") {
        gameOutcome = "You Lose!";
    } else if ((p1 === "rock" && p2 === "paper") || (p1 === "paper" && p2 === "scissors") || p1 === "scissors" && p2 === "rock") {
        gameOutcome = "You Win!";
    }
}