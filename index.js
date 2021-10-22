


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
        return "Player wins because Rock beats paper";
    }else if(playerSelection === "paper" && computerSelection === "scissors")
    return "Player loses because scissors cut paper!";
 else if(playerSelection === "scissors" && computerSelection === "rock"){
   return "player loses becasue rock crushes scissors!" 
}else{
    return "try again"
}
}



const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));











