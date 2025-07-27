let playerCounter = 0;
let computerCounter = 0;

let options = document.querySelectorAll(".option");

const fromComputer = () => {
    const compOptions = ["stone","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return compOptions[index];
}

const play = (playerOption) => {
    console.log("Player's option is",playerOption);

    const compOption = fromComputer();
    console.log("Computer's option is",compOption);

    forCondition(compOption,playerOption);
}

const forCondition = (compOption,playerOption) => {
    if(playerOption === compOption){
        document.getElementById("message").innerText="Match drow!";

    }else if(playerOption === "stone" && compOption === "paper"){
        document.getElementById("message").innerText="Computer Beat Player";
        computerCounter++;
        document.getElementById("computer-counter").innerText=computerCounter;

    }else if(playerOption === "stone" && compOption === "scissor"){
        document.getElementById("message").innerText="Player Beat Computer";
        playerCounter++;
        document.getElementById("player-counter").innerText=playerCounter;

    }else if(playerOption === "paper" && compOption === "stone"){
        document.getElementById("message").innerText="Player Beat Computer";
        playerCounter++;
        document.getElementById("player-counter").innerText=playerCounter;

    }else if(playerOption === "paper" && compOption === "scissor"){
        document.getElementById("message").innerText="Computer Beat Player";
        computerCounter++;
        document.getElementById("computer-counter").innerText=computerCounter;

    }else if(playerOption === "scissor" && compOption === "stone"){
        document.getElementById("message").innerText="Computer Beat Player";
        computerCounter++;
        document.getElementById("computer-counter").innerText=computerCounter;

    }else if(playerOption === "scissor" && compOption === "paper"){
        document.getElementById("message").innerText="Player Beat Computer";
        playerCounter++;
        document.getElementById("player-counter").innerText=playerCounter;
    }

    checkWinner();
}

const checkWinner = () => {
    if(playerCounter === 10){
        document.getElementById("message").innerText="Player Beat Computer And Won The Match";
        disableButtons();
    }else if(computerCounter === 10){
        document.getElementById("message").innerText="Computer Beat Player And Won The Match";
        disableButtons();
    }
}

const disableButtons = () => {
    for(let option of options){
        option.disabled = true;
    }
}

options.forEach((option) => {
    option.addEventListener("click",()=>{
        const playerOption = option.getAttribute("id");
        play(playerOption);
    })
})

