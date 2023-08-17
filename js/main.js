const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const result = document.getElementById("display-winner");
const choices = document.querySelectorAll(".choices");
const playerObjectName = document.getElementById("playerChoiceName");
const computerObjectName = document.getElementById("comChoiceName");

const objects = [
    {name:"rock",img:"images/rock.png"},
    {name:"paper",img:"images/paper.png"},
    {name:"scissor",img:"images/scissor.png"}
];

let counter = 0;
setInterval(shuffle,100);


choices.forEach(button => button.addEventListener("click",(e)=>{
    let buttonId = e.target.id;
    let generateChoice = Math.floor(Math.random() * 3);
    

    if(buttonId === "rock" && generateChoice === 1){
        counter++;
        playerChoiceDisplay.src = objects[0].img;
        computerChoiceDisplay.src = objects[generateChoice].img;
        playerObjectName.innerHTML = buttonId;
        computerObjectName.innerHTML = objects[generateChoice].name;
        result.innerHTML = "Computer Win";
        for (let i = 0; i < choices.length; i++) {
            choices[i].setAttribute("disabled","");
        }
    }
    else if(buttonId === "rock" && generateChoice === 2){
        counter++;
        playerChoiceDisplay.src = objects[0].img;
        computerChoiceDisplay.src = objects[generateChoice].img;
        playerObjectName.innerHTML = buttonId;
        computerObjectName.innerHTML = objects[generateChoice].name;
        result.innerHTML = "You Win";
        for (let i = 0; i < choices.length; i++) {
            choices[i].setAttribute("disabled","");
        }
    }
    else if(buttonId === "paper" && generateChoice === 0){
        counter++;
        playerChoiceDisplay.src = objects[1].img;
        computerChoiceDisplay.src = objects[generateChoice].img;
        playerObjectName.innerHTML = buttonId;
        computerObjectName.innerHTML = objects[generateChoice].name;
        result.innerHTML = "You Win";
        for (let i = 0; i < choices.length; i++) {
            choices[i].setAttribute("disabled","");
        }
    }
    else if(buttonId === "paper" && generateChoice === 2){
        counter++;
        playerChoiceDisplay.src = objects[1].img;
        computerChoiceDisplay.src = objects[generateChoice].img;
        playerObjectName.innerHTML = buttonId;
        computerObjectName.innerHTML = objects[generateChoice].name;
        result.innerHTML = "Computer Win";
        for (let i = 0; i < choices.length; i++) {
            choices[i].setAttribute("disabled","");
        }
    }
    else if(buttonId === "scissor" && generateChoice === 0){
        counter++;
        playerChoiceDisplay.src = objects[2].img;
        computerChoiceDisplay.src = objects[generateChoice].img;
        playerObjectName.innerHTML = buttonId;
        computerObjectName.innerHTML = objects[generateChoice].name;
        result.innerHTML = "Computer Win";
        for (let i = 0; i < choices.length; i++) {
            choices[i].setAttribute("disabled","");
        }
    }
    else if(buttonId === "scissor" && generateChoice === 1){
        counter++;
        playerChoiceDisplay.src = objects[2].img;
        computerChoiceDisplay.src = objects[generateChoice].img;
        playerObjectName.innerHTML = buttonId;
        computerObjectName.innerHTML = objects[generateChoice].name;
        result.innerHTML = "You Win";
        for (let i = 0; i < choices.length; i++) {
            choices[i].setAttribute("disabled","");
        }
    }
    else{
        counter++;
        playerChoiceDisplay.src = objects[generateChoice].img;
        computerChoiceDisplay.src = objects[generateChoice].img;
        playerObjectName.innerHTML = buttonId;
        computerObjectName.innerHTML = objects[generateChoice].name;
        result.innerHTML = "Draw";
        for (let i = 0; i < choices.length; i++) {
            choices[i].setAttribute("disabled","");
        }
    }
}));

function shuffle(){
    if(counter === 0){
        let count = Math.floor(Math.random() * 3);
        computerChoiceDisplay.src = objects[count].img;
        playerChoiceDisplay.src = objects[count].img;
    }
}