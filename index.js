var playerSelection = "";
const computerSelection = computerPlay();
var playerScore = "";
var computerScore = "";
var draws = "";

document.getElementById('rock').addEventListener('click', rChoice);

function rChoice(){
    playerSelection += "rock";
    console.log(playRound(playerSelection, computerSelection));
    
    }
    
    document.getElementById('paper').addEventListener('click', pChoice);

    function pChoice(){
        playerSelection += "paper";
        console.log(playRound(playerSelection, computerSelection));
      
    }

    document.getElementById('scissors').addEventListener('click', sChoice);

    function sChoice(){
        playerSelection += "scissors";
        console.log(playRound(playerSelection, computerSelection))
        
        
    }




function computerPlay(){
    let computer = Math.floor(Math.random() * 4);
    if(computer === 0){
        return "rock";
    } else if( computer === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

    





    function playRound(playerSelection, computerSelection){
        if( playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
            playerScore++;
            document.getElementById('pScore').append(playerScore++);
        }
        
        else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
            computerScore++;
            document.getElementById('cScore').append(computerScore++)
        }else{
            draws++;
            document.getElementById("tie").append(draws++);
        }
    }

 












