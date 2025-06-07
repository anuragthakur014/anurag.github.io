let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = ()=> {
    const option = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random ()* 3);
    return option[randidx];
};

const drawgame = () =>{
    msg.innerText = "game draw, play agian";
     msg.style.backgroundColor = "Yellow";
     msg.style.color = "black";
};

const gamewinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        // console.log(" user win!");
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";

    }else{
        compscore++;
        compscorepara.innerText = compscore;
        // console.log("user loss!");
        msg.innerText = `you loss! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";

    };  
};

const playgame = (userchoice)=>{
    //  console.log("user choice",userchoice);

     const compchoice = gencompchoice ();
    //  console.log("comp choice" , compchoice);

     if(userchoice === compchoice){
        drawgame();
     }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }

        gamewinner(userwin,userchoice,compchoice);
        
     }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
       
    })
})