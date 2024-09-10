let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreNum=document.querySelector("#user-score");
const compScoreNum=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["stone","paper","scissors"];
    //stone,paper,scissors
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=(userChoiceId)=>{
    console.log("Game was draw.");
    msg.innerText=`Game was Draw.Both chose ${userChoiceId}.Play again.`;
    msg.style.backgroundColor="pink";
    msg.style.color="black";
};
const showWinner=(userWin,userChoiceId,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreNum.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win! Your ${userChoiceId} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreNum.innerText=compScore;
            console.log("You lose");
            msg.innerText=`You lose! Computer's ${compChoice} beats your ${userChoiceId}`;
            msg.style.backgroundColor="red";
        }
    };
 const playGame=(userChoiceId)=>{
console.log("user choice= ",userChoiceId);
//Generate Computer choice
const compChoice=genCompChoice();
console.log("comp choice= ",compChoice);
 if(userChoiceId===compChoice){
    //Draw Game
    drawGame(userChoiceId);
 }else{
    let userWin=true;
    if(userChoiceId==="stone"){
        //scissors,paper
        userWin=compChoice==="paper" ? false:true;
    }else if(userChoiceId==="paper"){
       //stone,scissors
       userWin=compChoice==="scissors"? false:true;
    }else{
        //stone,paper
       userWin=compChoice==="stone"?false:true;
    }
    showWinner(userWin,userChoiceId,compChoice);
 }
 };
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoiceId=choice.getAttribute("id");
       console.log("choice was clicked",userChoiceId);
       playGame(userChoiceId);
    });
});
let modeBtn=document.querySelector("#change");
let headSection=document.querySelector("h1");
let clickhere=document.querySelector("h2");
let iconschange1=document.querySelector("#icons1");
let iconschange2=document.querySelector("#icons2");
let iconschange3=document.querySelector("#icons3");
let rules=document.querySelector("#rules");
let currMode="light";
let body=document.querySelector("body");
modeBtn.addEventListener("click",()=>{
  if(currMode==="light"){
    currMode="dark";
    body.classList.add("dark");
    modeBtn.innerText="Pink Mode";
    modeBtn.style.backgroundColor="pink";
    headSection.style.backgroundColor="#c7cd66";
    headSection.style.color="black";
    iconschange1.style.color="black";
    iconschange1.style.backgroundColor="#c7cd66";
    iconschange2.style.color="black";
    iconschange2.style.backgroundColor="#c7cd66";
    iconschange3.style.color="black";
    iconschange3.style.backgroundColor="#c7cd66";
    clickhere.style.color="white";
    modeBtn.style.color="black";
    body.classList.remove("light");
  }else{
   currMode="light";
   body.classList.add("light");
   modeBtn.innerText="Dark Mode";
   modeBtn.style.backgroundColor="black";
   headSection.style.backgroundColor="rgb(70, 9, 9)";
    iconschange1.style.backgroundColor="rgb(70, 9, 9)";
    iconschange1.style.color="white";
    iconschange2.style.backgroundColor="rgb(70, 9, 9)";
    iconschange2.style.color="white";
    iconschange3.style.backgroundColor="rgb(70, 9, 9)";
    iconschange3.style.color="white";
    headSection.style.color="white";
    clickhere.style.color="black";
    modeBtn.style.color="white";
    body.classList.remove("dark");
  }
    console.log(currMode);
});
rules.onclick=function(){
    alert("The rule of the game is:Two players,YOU & COMP will display one of three symbols: a stone, paper, or scissors. A stone beats scissors by breaking it, scissors beat paper by cutting it, and paper beats stone by covering it.");
}