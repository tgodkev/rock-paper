var playerSelection = "";
const computerSelection = computerPlay();
var playerScore = "";
var computerScore = "";


document.getElementById('rock').addEventListener('click', rChoice);

function rChoice(){
    playerSelection += "rock";
    console.log(playRound(playerSelection, computerSelection));
    document.getElementById('pScore').append(playerScore);
    document.getElementById('cScore').append(computerScore);
    }
    
    document.getElementById('paper').addEventListener('click', pChoice);

    function pChoice(){
        playerSelection += "paper";
        console.log(playRound(playerSelection, computerSelection));
        document.getElementById('pScore').append(playerScore);
        document.getElementById('cScore').append(computerScore);
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
    if( playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "Player loses because paper covers rock";
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "player wins" + " because rock crushes scissors"
    }else if (playerSelection === "rock" && computerSelection === "rock"){
        return "tie rock cant break rock";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "player wins" + "because paper smothers rock"
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "tie paper cant harm paper"
     } else if (playerSelection === "paper" && computerSelection === "scissors"){
         computerScore++;
         return "computer wins scissors eat paper"
     }
     
    if( playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "Player wins because scissors eat paper";
    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "tie try again pls"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "player loses becuse rock smash scissors";
    }
    
}
 












