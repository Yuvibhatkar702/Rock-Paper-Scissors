let uScore = 0;
let cScore = 0;

const Choises = document.querySelectorAll(".same");
const mass = document.querySelector("#text-to-play");

const compScore = document.querySelector("#comp-score");
const userScore = document.querySelector("#user-score"); 

const genComp = () => {
    let arr = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return arr[random];
}

const drowGame = () => {
    console.log("Game Drow");
    mass.innerText = "Game Draw, Play Again!";
    mass.style.backgroundColor = "#003459";
}

const WhosWin = (userWin,choiceId,compChoice) => {
    if(userWin){
        uScore++;
        userScore.innerText = uScore;
        mass.innerText = `You Win! Your ${choiceId} Beats ${compChoice}`; 
        mass.style.backgroundColor = "Green";
    }else{
        cScore++;
        compScore.innerText = cScore;
        mass.innerText = `You Lost! ${compChoice} Beats Your ${choiceId}`;
        mass.style.backgroundColor = "Red";
    }
} 
const playGame = (choiceId) => {
    console.log("User Choise", choiceId);
    const compChoice = genComp();
    console.log("Computer choise", compChoice);

    if (choiceId === compChoice) {
        // game Drow
        drowGame();
    } else {
        let userWin = true;

        if (choiceId === "rock") {
            // paper OR scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            // computer Chose only Paper OR Rock
            userWin = compChoice === "rock" ? true : false;
        } else {
                userWin = compChoice === "rock" ? false : true;
        }

        WhosWin(userWin,choiceId,compChoice);
    }
}

Choises.forEach((same) => {

    same.addEventListener("click", () => {
        const choiceId = same.getAttribute("id");
        playGame(choiceId); // call Function

    });

});

