let userSc = document.querySelector(".scoreY");
let computerSc = document.querySelector(".scoreC");
let SY = 0;
let SC = 0;
let board = document.querySelector(".bd");

let choices = document.querySelectorAll(".opt");

let generatechoice = ()=>{
    let Cchoices = ["rock" , "paper" , "scissors"]
    return Cchoices[Math.floor(Math.random()*3)];
};

let winlose = (userchoice , compchoice) =>{
    if (userchoice == "rock" && compchoice == "scissors") {
        SY++;
        board.style.backgroundColor = "green";
        board.innerText ="You won";
        console.log("You won");
    }else if (userchoice == "scissors" && compchoice == "paper") {
        SY++;
        console.log("You won");
        board.innerText ="You won";
        board.style.backgroundColor = "green";
    }else if (userchoice == "paper" && compchoice == "rock") {
        SY++;
        console.log("You won");
        board.style.backgroundColor = "green";
        board.innerText ="You won";
    }else if(userchoice != compchoice){
        SC++;
        console.log("Computer won");
        board.innerText ="You loose";
        board.style.backgroundColor = "red";
    }else{
        console.log("Its a Draw");
        board.innerText ="Its a Draw";
        board.style.backgroundColor = "rgb(0, 200, 255)";
    }
    userSc.innerText = SY;
    computerSc.innerText = SC;
}

console.log(choices);
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        //user choice
        let userchoice = choice.getAttribute("Id");
        //computer choice
        let compchoice = generatechoice();
        
        winlose(userchoice , compchoice);

    })
})
// let rock = document.querySelector(".rock");
// let paper = document.querySelector(".paper");
// let scissors = document.querySelector(".scissors");
