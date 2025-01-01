
function getComputerChoice() {
    //generates a random number from one to three and returns rock, paper, or scissors based on the result.
    choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
            break; // Even though it's unreachable I still want to add it for good habits.
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let div = document.createElement("div");
    document.body.appendChild(div);
    function playRound(humanChoice, computerChoice) {
        //allows the player to play a single round, based on what the human and the computer chose.
        let playerWin = "win";
        if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "paper" && humanChoice == "rock")) {
            playerWin = "lose";
        }
        else if (humanChoice == computerChoice) {
            playerWin = "draw";
        }
        else {
            playerWin = "win";
        }
    
        if (playerWin == "win") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        else if (playerWin == "draw") {
            console.log(`You tie!`);
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
        div.textContent = `You earned ${humanScore} points!` + ` The computer earned ${computerScore} points!`;
        if (humanScore > 4 || computerScore > 4) {
            if (humanScore > computerScore) {
                div.textContent = (`Congrats, you won! You earned ${humanScore} points!` + ` The computer earned ${computerScore} points!`);
            }
            if (humanScore < computerScore) {
                div.textContent = (`You lost! You earned ${humanScore} points!` + ` The computer earned ${computerScore} points!`);
            }
        }
    }
    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < 3; i++) {
            switch (i) {
                case 0:
                   buttons[i].addEventListener("click", () => {
                    playRound(buttons[i].textContent.toLowerCase(), getComputerChoice());
                    });
                    break;
                case 1:
                    buttons[i].addEventListener("click", () => {
                        playRound(buttons[i].textContent.toLowerCase(), getComputerChoice());
                    });
                    break;
                case 2:
                    buttons[i].addEventListener("click", () => {
                        playRound(buttons[i].textContent.toLowerCase(), getComputerChoice());
                    });
                    break;
            }
    }
    }
    


//declares two variables that have the score of the human and the computer

playGame();