let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultText.textContent = `Tie! Both chose ${humanChoice}.`;
        return;
    }

    const win =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (win) {
        humanScore++;
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    scoreText.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.choice);
    });
});
