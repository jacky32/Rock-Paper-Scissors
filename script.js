let playerScore = 0, computerScore = 0;
const score = document.getElementById("score");
const playerRoll = document.getElementById("playerRoll");
const computerRoll = document.getElementById("computerRoll");

document.addEventListener("click", function game(e){
    if(e.target.className == "btn"){
        clickedButton = e.target.innerText;
        computerSelection = computerPlay();
        
        displayScore(computerSelection);
        displayRoll(e);
        if(playerScore >= 5){
            score.textContent = "YOU WON";
            document.removeEventListener("click", game);
        }
        else if (computerScore >= 5){
            score.textContent = "COMPUTER WON";
            document.removeEventListener("click", game);
        }
    }
    
    /* if(playerScore>computerScore) {
        console.log(`Congratulations! You won with a score of ${playerScore}:${computerScore}.`);
    }
    else {
        console.log(`Unlucky! You lost with a score of ${playerScore}:${computerScore}.`);
    } */
});

function displayScore(computerSelection){
    switch(playRound(clickedButton,computerSelection)) {
        case 2:
            highlightRoll(2);
            break;
        case 1:
            playerScore++;
            highlightRoll(1)
            break;
        case 0:
            computerScore++;
            highlightRoll(0)
            break;
        case 3:
            console.log("Error");
            break;
    }
    score.textContent = playerScore + ":" + computerScore; 
    blinkScore();
}

function highlightRoll(roll){
    if(roll == 1){
        playerRoll.classList.add("wonRoll");
        playerRoll.classList.remove("lostRoll", "draw");
        computerRoll.classList.add("lostRoll");
        computerRoll.classList.remove("wonRoll", "draw");
    }
    else if (roll == 0){
        playerRoll.classList.add("lostRoll");
        playerRoll.classList.remove("wonRoll", "draw");
        computerRoll.classList.add("wonRoll");
        computerRoll.classList.remove("lostRoll", "draw");
    }
    else if (roll == 2) {
        playerRoll.classList.add("draw");
        playerRoll.classList.remove("wonRoll", "lostRoll");
        computerRoll.classList.add("draw");
        computerRoll.classList.remove("lostRoll", "wonRoll");
    }
}

function displayRoll(e){
    playerRoll.textContent = e.target.innerText;
    computerRoll.textContent = computerSelection;
}

function blinkScore(){
    score.classList.toggle('enhanceScore');
    setTimeout(function(){
        score.classList.toggle('enhanceScore');
    }, 200);
}

function computerPlay() {
    let vyber = ["Rock", "Paper", "Scissors"];
    return(vyber[Math.floor(Math.random()*vyber.length)]);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors") {
        if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
            return 2;
        }
        else if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase()== "scissors") || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase()== "paper") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase()== "rock"))  {
            return 1;
        }
        else if ((playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase()== "rock") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase()== "scissors") || (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase()== "paper"))  {
            return 0;
        }
    } else { 
        return 3; 
    }
}