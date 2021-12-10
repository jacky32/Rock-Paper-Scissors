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

function game() {
    let playerScore = 0, computerScore = 0;
    while(!((playerScore || computerScore) >= 3)) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose:");
        switch(playRound(playerSelection,computerSelection)) {
            case 2:
                console.log(`Draw! You both played ${playerSelection.toLowerCase()}.`);
                break;
            case 1:
                playerScore++;
                console.log(`You won! You played ${playerSelection.toLowerCase()} and the computer played ${computerSelection.toLowerCase()}. Current score: ${playerScore}:${computerScore}.`);
                break;
            case 0:
                computerScore++;
                console.log(`You lost! You played ${playerSelection.toLowerCase()} and the computer played ${computerSelection.toLowerCase()}. Current score: ${playerScore}:${computerScore}.`);
                break;
            case 3:
                console.log("Wrong selection!");
                break;
        }
    }
    if(playerScore>computerScore) {
        console.log(`Congratulations! You won with a score of ${playerScore}:${computerScore}.`);
    }
    else {
        console.log(`Unlucky! You lost with a score of ${playerScore}:${computerScore}.`);
    }
}