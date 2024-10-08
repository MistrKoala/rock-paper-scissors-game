// List of possible choices
const choices = ["rock", "paper", "scissors"];

// Function to get a random AI choice
function getAiChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && aiChoice === "scissors") ||
        (userChoice === "scissors" && aiChoice === "paper") ||
        (userChoice === "paper" && aiChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "AI wins!";
    }
}

// Handling the game logic
document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.getAttribute('data-choice');
        const aiChoice = getAiChoice();

        document.getElementById('user-choice-text').textContent = userChoice;
        document.getElementById('ai-choice-text').textContent = aiChoice;

        const result = determineWinner(userChoice, aiChoice);
        document.getElementById('result-text').textContent = result;

        // Trigger an animation or visual effect
        const resultMessage = document.getElementById('result-text');
        resultMessage.classList.add('flash-result');
        setTimeout(() => resultMessage.classList.remove('flash-result'), 1000);
    });
});
