
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

// runs a batch of 5 games
function game(){
    let num_games = 5;
    let player_wins = 0;
    let computer_wins = 0;
    for (let x = 0; x < num_games; x++){
        let playerSelection = prompt('Enter a choice: ');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
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

game();