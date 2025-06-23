let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const back = document.querySelector(".msg-container");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const compChoice = () => { 
    const options = ["rock", "paper", "scissors"]
    const compIdx = Math.floor(Math.random() * 3)
    return options[compIdx]
   
    
}

const draw = () => {
    console.log("Game Was Draw")
    msgPara.innerText = " match draw please try again";
     back.style.backgroundColor = "#081B31"
}

const showWinner  = (userWin, compId, choiceId) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msgPara.innerText = `You win ! Your ${choiceId} Beats ${compId}`;
        back.style.backgroundColor = "green";
        
    }else{
        compScore++;
         compScorepara.innerText = compScore;
        msgPara.innerText =`You Lose ! ${compId} Beats ${choiceId}`
         back.style.backgroundColor = "red"
    }

}



const playgame = (choiceId) => {
    console.log("This is user choice ", choiceId)
    const compId = compChoice();
    console.log("this is computer choice ", compId)
    
    if(choiceId === compId){
        draw ();
    }else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compId === "paper" ? false : true;
        }else if (choiceId === "paper"){
             userWin = compId === "scissors" ? false : true;

        }else{
            userWin = compId === "rock" ? false : true;
        }
        showWinner(userWin, compId, choiceId);

    }
   


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id")
        // console.log("this is user id = ", choiceId  )
        playgame(choiceId)

    })
})