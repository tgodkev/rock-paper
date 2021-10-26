const playerSelection = "";
const computerSelection = computerPlay();

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', event =>  {
         if(event.button == rock){
             playerSelection += "rock";
         }else if (event.button == paper){
             playerSelection += "paper";
         }else if (event.button == scissors){
             playerSelection += "scissors";
         }
    })
})

console.log(playerSelection)








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
        return "player wins because rock crushes scissors"
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        return "TIE TRY AGAIN";
    }
    if( playerSelection === "paper" && computerSelection === "rock"){
        return "Player wins because paper covers rock";
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "player loses because scissors eat paper"
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "TIE TRY AGAIN";
    }
    if( playerSelection === "scissors" && computerSelection === "paper"){
        return "Player wins because scissors eat paper";
    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "tie try again pls"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "player loses becuse rock smash scissors";
    }
    
}
 




console.log(playRound(playerSelection, computerSelection));








