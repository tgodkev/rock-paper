var playerSelection = "";
var playerScore = 0;
var computerScore = 0;
const computerSelection = computerPlay();

const rock = document.getElementById('rock').addEventListener('click', function(e){
    playerSelection += "rock";
    console.log(playRound(playerSelection, computerSelection));
    if(playRound == "player wins"){
        playerScore += 1;
    }
    console.log(playerScore, computerScore);
})

const paper = document.getElementById('paper').addEventListener('click', function(e){
    playerSelection += "paper";
    console.log(playRound(playerSelection, computerSelection));
})


const scissors = document.getElementById('scissors').addEventListener('click', function(e){
    playerSelection += "scissors";
    console.log(playRound(playerSelection, computerSelection));
})






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
        return "Player loses because paper covers rock";
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "player wins" + " because rock crushes scissors"
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        return "player wins" + "because paper smothers rock"
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "tie paper cant harm paper"
     } else if (playerSelection === "paper" && computerSelection === "scissors"){
         return "computer wins scissors eat paper"
     }
     
    if( playerSelection === "scissors" && computerSelection === "paper"){
        return "Player wins because scissors eat paper";
    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "tie try again pls"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "player loses becuse rock smash scissors";
    }
    
}
 












