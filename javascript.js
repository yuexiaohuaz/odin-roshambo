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
function getHumanChoice() {
    //asks the user for input and returns either rock, paper, or scissors based on the result.
    choice = prompt("Enter rock, paper, or scissors.");
    choice = choice.toLowerCase();
    if (choice == "rock") { //note: CANNOT use === because when you prompt, you get a string.
        return "rock";
    }
    else if (choice == "paper") {
        return "paper";
    }
    else if (choice == "scissors") {
        return "scissors";
    }
    else {
        console.log("Invalid input. Refresh the page to play again.");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
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
            humanScore += 1;
        }
        else if (playerWin == "draw") {
            console.log(`You tie!`);
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore += 1;
        }
    }
    for (let i = 0; i < 5; i++ ){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice().toLowerCase();
        playRound(humanChoice, computerChoice);
    }
    console.log(`You earned ${humanScore} points!`);
    console.log(`The computer earned ${computerScore} points!`);
}
//declares two variables that have the score of the human and the computer

playGame();