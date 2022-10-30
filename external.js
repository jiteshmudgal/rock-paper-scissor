
function computerChoice(){
    var choice = Math.floor(Math.random() * (3 - 1) ) + 1;;
    if(choice==1){
        return "rock";
    }
    else if(choice==2){
        return "paper";
    }
    else if(choice==3){
        return "scissor";
    }
}

function playRound(playerSelection,computerSelection){
    console.log("Player chose: "+playerSelection);
    console.log("Computer chose: " + computerSelection);
    if(playerSelection===computerSelection){
        return "Draw";
    }
    else if(playerSelection.toLowerCase()==="rock" && computerSelection==="scissor"){
        return "You Win! Rock beats Scissor";
    }
    else if(playerSelection.toLowerCase()==="rock" && computerSelection==="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection==="rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection==="scissor"){
        return "You Lose! Scissor beats Paper";
    }
    else if(playerSelection.toLowerCase()==="scissor" && computerSelection==="paper"){
        return "You Win! Scissor beats Paper";
    }
    else{
        return "You Lose! Rock beats Scissor";
    }
}

function game(){
    let score = 5;
    for(let i=0; i<5; i++){
        let playerSelection = prompt("Please enter your move", "rock");
        let computerSelection = computerChoice();
        let result = playRound(playerSelection,computerSelection);
        if(result.search("Draw")>0){
            console.log(result + ". The score is : " + score);
        }
        else if(result.search("Win")<0){
            score--;
            console.log(result + ". The score is : " + score);
        }
        else{
            score++;
            console.log(result + ". The score is : " + score);
        }
    }
    if(score<=2){
        console.log('You Lost the game. The final score is: '+ score);
    }
    else{
        console.log("You Won the game. The final score is: "+ score);
    }
}


