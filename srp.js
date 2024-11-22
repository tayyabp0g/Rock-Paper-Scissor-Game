let uesrScore = 0;
let compScore = 0;
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

 const genCompChoice = ()=>
 {
    const options = ["rock", "paper","scissors"];
    // paper , rock , scissor
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];

 }
 const draGame = ()=>
 {
    
    msg.innerText = "Game was Draw Play Again!";
    msg.style.backgroundColor = "#0813b31"; 
 }
  const showWiner = (userWin , userChoice , compChoice)=>
  {
      if(userWin)
      {
        uesrScore++;
        userScorePara.innerText = uesrScore;
       
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      


      }
      else{
        compScore++;
        compScorePara.innerText = compScore; 
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";


      }
  }
 const playGame = (userChoice)=>
 {
    console.log("user Choice = " ,userChoice);
    //generate computer choice -> modular way of programming
    const compChoice = genCompChoice();
    console.log("comp choice is = " , compChoice);
     if(userChoice == compChoice)
     {
        //draw 
        draGame();
     }
     else{
        let userWin = true;
        if(userChoice == "rock")
        {
         //scissor paper
         userWin = compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){
            // rock scissors
            compChoice === "scissors";
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock , paper
             userWin = compChoice === "rock" ? false : true;
        } 
        showWiner(userWin, userChoice, compChoice);
     }
 };
 choices.forEach((choice)=>{
    const userChoice = choice.getAttribute("id"); 
    choice.addEventListener("click",()=>
    {
        console.log("choice was click",userChoice);
        playGame(userChoice);

    });

 });
