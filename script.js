
// randomly return rock, paper or scissors
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor((Math.random() * options.length))]
}

// compute the winner of a match 
function playRound(playerSelection){
    if (playerScore === 5){
        result.textContent = 'You Won The Game!';
    }
    else if (computerScore === 5){
        result.textContent = 'You Lost The Game!'
    }
    else{
        let computerSelection = getComputerChoice();
        if (playerSelection === computerSelection){
            result.textContent = 'You Tie!';
            return 2;
        }
        else if (playerSelection === 'rock'){
            if (computerSelection === 'paper'){
                result.textContent =  'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
                computerScore += 1;
                runningScore.textContent =  playerScore + '-' + computerScore;
            }
            if (computerSelection === 'scissors'){
                result.textContent =  'You Win! ' + playerSelection  + ' beats ' + computerSelection;
                playerScore += 1;
                runningScore.textContent =  playerScore + '-' + computerScore;
            }
        }
        else if (playerSelection === 'paper'){
            if (computerSelection === 'rock'){
                result.textContent =  'You Win! ' + playerSelection  + ' beats ' + computerSelection;
                playerScore += 1;
                runningScore.textContent =  playerScore + '-' + computerScore;
            }
            if (computerSelection === 'scissors'){
                result.textContent =  'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
                computerScore += 1;
                runningScore.textContent =  playerScore + '-' + computerScore;
            }
        }
        else if (playerSelection === 'scissors'){
            if (computerSelection === 'rock'){
                result.textContent =  'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
                computerScore += 1;
                runningScore.textContent =  playerScore + '-' + computerScore;
            }
            if (computerSelection === 'paper'){
                result.textContent =  'You Win! ' + playerSelection  + ' beats ' + computerSelection;
                computerScore += 1;
                runningScore.textContent =  playerScore + '-' + computerScore;
            }
        }
    }
}


const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const runningScore = document.getElementById('score');
const result = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;
runningScore.textContent =  playerScore + '-' + computerScore;

rockButton.addEventListener('click', () =>{
    playRound('rock');
});
paperButton.addEventListener('click', () =>{
    playRound('paper');
});
scissorsButton.addEventListener('click', () =>{
    playRound('scissors');
});
