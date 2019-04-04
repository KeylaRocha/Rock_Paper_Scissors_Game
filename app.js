let userScore = 0;
let botScore = 0;
const userScoreSpan = document.getElementById("user-score");
const botScoreSpan = document.getElementById("bot-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("rk");
const paperDiv = document.getElementById("pp");
const scissorsDiv = document.getElementById("sc");
const smallUser = "user".fontsize(2).sub();
const smallBot = "bot".fontsize(2).sub();


function getBotChoice(){
  const choices = ["rk", "pp", "sc"];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertWord(letter){
  if(letter === "rk") return "Rock";
  if(letter === "pp") return "Paper";
  if(letter === "sc") return "Scissors";
}
function win(user, bot){
  userScore++;
  userScoreSpan.innerHTML = userScore;
  botScoreSpan.innerHTML = botScore;
  resultDiv.innerHTML = `${convertWord(user)}${smallUser} beats ${convertWord(bot)}${smallBot}. You win!`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 300);
}

function lose(user, bot){
  botScore++;
  userScoreSpan.innerHTML = userScore;
  botScoreSpan.innerHTML = botScore;
  resultDiv.innerHTML = `${convertWord(user)}${smallUser} loses to ${convertWord(bot)}${smallBot}. You lose!`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 300);
}

function draw(user, bot){
  resultDiv.innerHTML = `${convertWord(user)}${smallUser} and ${convertWord(bot)}${smallBot}. It's a draw!`;
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')}, 300);
}

function game(userChoice){
  const botChoice = getBotChoice();

  switch(userChoice + botChoice){
    case "rksc":
    case "pprk":
    case "scpp":
      win(userChoice, botChoice);
      break;
    case "rkpp":
    case "ppsc":
    case "rksc":
      lose(userChoice, botChoice);
      break;
    case "rkrk":
    case "pppp":
    case "scsc":
      draw(userChoice, botChoice);
      break;
  }
}

function main(){
  rockDiv.addEventListener("click", () => game("rk"))
  paperDiv.addEventListener("click", () => game("pp"))
  scissorsDiv.addEventListener("click", () => game("sc"))
}

main();