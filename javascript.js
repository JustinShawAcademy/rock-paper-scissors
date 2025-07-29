let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const i = getRandomInt(choices.length)
    return choices[i]
}

function getHumanChoice() {
    let humanInput = prompt("Please enter: 'Rock', 'Paper', or 'Scissors'");
    return humanInput;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(`you chose: ${humanChoice}`);
    console.log(`computer chose: ${computerChoice}`);


    if (humanChoice === computerChoice) {
        console.log(`it's a tie!`)
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Human score: ${humanScore} | Computer score: ${computerScore}`)
}

function playGame (numOfTimes) {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < numOfTimes; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    console.log(`\n--- Game Over ---`);
    console.log(`Final Score: Human score: ${humanScore} | Computer score: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Too bad! The computer won the game.");
    } else {
        console.log("It's a tie game!");
    }


}

playGame(5);

// console.log(`User entered: ${humanSelection}`);
// console.log(`Computer entered: ${computerSelection}`)

