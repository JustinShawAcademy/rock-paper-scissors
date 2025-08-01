let humanScore = 0;
let computerScore = 0;

const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");

const winLoseTieElement = document.querySelector("#win-lose-tie")
const humanChoiceElement = document.querySelector("#player-choice")
const computerChoiceElement = document.querySelector("#computer-choice")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const i = getRandomInt(choices.length)
    return choices[i]
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        winLoseTieElement.textContent = "It's a tie!"
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        winLoseTieElement.textContent = `You win! ${humanChoice} beats ${computerChoice}`
    }
    else {
        computerScore++;
        winLoseTieElement.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
    }

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    humanChoiceElement.textContent = `Player choice: ${humanChoice}`
    computerChoiceElement.textContent = `Computer choice: ${computerChoice}`

}

const buttons = document.querySelectorAll('.choice-item');

buttons.forEach((button) =>  {
    button.addEventListener('click', () => {
        const playerSelection = button.querySelector('p').textContent;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});

