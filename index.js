// GAME STATE
let humanScore = 0;
let computerScore = 0;

// Rules of the game: key beats the value
const rules = {
    rock: "scissor", 
    scissor: "paper",
    paper: "rock"
};

// Target elements
const result = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");

// HELPER FUNCTIONS
function displayResult(text) {
    const li = document.createElement("li");
    li.textContent = text;
    result.appendChild(li);
}

function updateScore() {
    scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * options.length)];
}

// GAME LOGIC
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        displayResult(`Tie! You both chose ${humanChoice}`);
    }
    else if (rules[humanChoice] === computerChoice) {
        humanScore++;
        displayResult(`Player wins this round! ${humanChoice} beats ${computerChoice}`);
    } 
    else {
        computerScore++;
        displayResult(`Computer wins this round! ${computerChoice} beats ${humanChoice}`);
    }

    // Always update score after round
    updateScore();

    // ✅ Declare winner only once when score hits 5
    if (humanScore === 5) {
        displayResult("🎉 Player is the champion!");
        endGame();
    } 
    else if (computerScore === 5) {
        displayResult("💻 Computer is the champion!");
        endGame();
    }
}

// DOM INTERACTION
const btnContainer = document.querySelector("#buttons");

btnContainer.addEventListener("click", event => {
    if (event.target.nodeName === "BUTTON") {
        const choice = event.target.textContent.toLowerCase();
        playRound(choice, getComputerChoice());
    }
});

// End game by disabling buttons
function endGame() {
    btnContainer.querySelectorAll("button").forEach(b => b.disabled = true);
}

console.log("Game ready!");
