function getComputerChoice () {
    let options = ["rock", "paper", "scissor"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getHumanChoice () {
    const humanChoice = prompt("choose between rock paper and  scissor");
    const caseInsensitive = humanChoice.toLocaleLowerCase();
    return caseInsensitive;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`${humanChoice} beats ${computerChoice}`)
        humanScore++;
        console.log(`Player score is ${humanScore} and the pc is ${computerScore}`)
    } else if (humanChoice === computerChoice) {
        console.log("It is a tie");
        console.log(`Player score is ${humanScore} and the pc is ${computerScore}`)
    } else {
        console.log(`${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`Player score is ${humanScore} and the pc is ${computerScore}`)
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();