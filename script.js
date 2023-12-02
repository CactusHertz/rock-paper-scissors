
// randomly return rock, paper or scissors
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor((Math.random() * options.length))]
}

// compute the winner of a match 
function playRound(playerSelection){
    const result = document.querySelector('div');
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        result.textContent = 'You Tie!';
    }
    else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            result.textContent =  'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
        }
        if (computerSelection === 'scissors'){
            result.textContent =  'You Win! ' + playerSelection  + ' beats ' + computerSelection;
        }
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            result.textContent =  'You Win! ' + playerSelection  + ' beats ' + computerSelection;
        }
        if (computerSelection === 'scissors'){
            result.textContent =  'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
        }
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            result.textContent =  'You Lose! ' + computerSelection  + ' beats ' + playerSelection;
        }
        if (computerSelection === 'paper'){
            result.textContent =  'You Win! ' + playerSelection  + ' beats ' + computerSelection;
        }
    }
}

// runs a batch of 5 games
function game(){
    let num_games = 5;
    let player_wins = 0;
    let computer_wins = 0;
    for (let x = 0; x < num_games; x++){
        let playerSelection = prompt('Enter a choice: ');
        
        let result = playRound(playerSelection);
        if(result.charAt(4) === 'W'){
            player_wins++;
        }
        else if (result.charAt(4) === 'L'){
            computer_wins++;
        }
        console.log(result);
    }
    if (player_wins === computer_wins){
        console.log('You Tied with ' + player_wins + ' wins!');
    }
    else if (player_wins > computer_wins) {
        console.log('You Win with ' + player_wins + ' wins!');
    }
    else {
        console.log('You Lost with ' + player_wins + ' wins!');
    }
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () =>{
    playRound('rock');
});
paperButton.addEventListener('click', () =>{
    playRound('paper');
});
scissorsButton.addEventListener('click', () =>{
    playRound('scissors');
});