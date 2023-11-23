
// randomly return rock, paper or scissors
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor((Math.random() * options.length))]
}

// compute the winner of a match
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return 'You Tie!';
    }
    else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return 'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
        }
        if (computerSelection === 'scissors'){
            return 'You Win! ' + playerSelection  + ' beats ' + computerSelection;
        }
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return 'You Win! ' + playerSelection  + ' beats ' + computerSelection;
        }
        if (computerSelection === 'scissors'){
            return 'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
        }
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return 'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
        }
        if (computerSelection === 'paper'){
            return 'You Win! ' + playerSelection  + ' beats ' + computerSelection;
        }
    }
}

const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));