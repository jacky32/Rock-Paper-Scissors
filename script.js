let playerScore = 0, computerScore = 0;
document.addEventListener("click", function game(e){
    clickedButton = e.target.innerText;
    
    switch(playRound(clickedButton,computerPlay())) {
        case 2:
            console.log(`Draw! You both played ${clickedButton.toLowerCase()}.`);
            break;
        case 1:
            playerScore++;
            console.log(`You won! You played ${clickedButton.toLowerCase()} and the computer played ${computerPlay().toLowerCase()}. Current score: ${playerScore}:${computerScore}.`);
            break;
        case 0:
            computerScore++;
            console.log(`You lost! You played ${clickedButton.toLowerCase()} and the computer played ${computerPlay().toLowerCase()}. Current score: ${playerScore}:${computerScore}.`);
            break;
        case 3:
            console.log("Wrong selection!");
            break;
    }

    /* if(playerScore>computerScore) {
        console.log(`Congratulations! You won with a score of ${playerScore}:${computerScore}.`);
    }
    else {
        console.log(`Unlucky! You lost with a score of ${playerScore}:${computerScore}.`);
    } */
});

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