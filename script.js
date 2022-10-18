const choices = ['paper', 'rock', 'scissors']

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

// let playerInput = prompt("Choose rock, paper or scissors")
// let playerChoice = playerInput.trim().toLowerCase()
// let computerChoice = getComputerChoice()

// console.log(playerChoice)
// console.log(computerChoice)

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        console.log('Its a tie!')
    }
    else if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log('You win!')
    }
    else {
        console.log('You lose.')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {

        const computerChoice = getComputerChoice();
        const playerInput = prompt("Choose rock, paper or scissors")
        const playerChoice = playerInput.trim().toLowerCase()

        console.log(computerChoice);
        console.log(playerChoice);

        playRound(playerChoice, computerChoice)
    }
}

game()