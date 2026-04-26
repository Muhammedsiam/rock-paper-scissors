function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return 'rock';
        } else if (randomNumber < 0.66) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    function getHumanChoice() {
        let choice = prompt('Enter your choice: ');
        choice = choice.toLowerCase();
        return choice;
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('Draw.');
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You Lose, lol. ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (computerScore > humanScore) {
        console.log('Computer Won, lol.')
    } else if (computerScore === humanScore) {
        console.log('Tie, what a waste');
    } else {
        console.log('You Won!')
    }
}

playGame()

