let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");
const resetbtn = document.querySelector("#reset-btn");

//TODO:Generate computer choice
const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

//TODO:Draw game function
const draw = () => {
  console.log("Game was Drawn");
  msg.innerText = "Game Was Drawn! Play Again";
  msg.style.backgroundColor = "rgba(1, 1, 45, 0.933)";
};

//TODO:Show winner
const showwinner = (userwin, userch, compchoice) => {
  if (userwin === true) {
    console.log("You Won!");
    msg.innerText = `You Won ! ${userch} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    userscore++;
    userscorep.innerText = userscore;
  } else {
    console.log("Computer Won!");
    msg.innerText = `Computer Won ! ${compchoice} beats ${userch}`;
    msg.style.backgroundColor = "red";
    compscore++;
    compscorep.innerText = compscore;
  }
};

//TODO:Reset game
resetbtn.addEventListener("click", () => {
  userscorep.innerText = 0;
  compscorep.innerText = 0;
  msg.innerText = "Let the game begin!";
  msg.style.backgroundColor = "rgba(1, 1, 45, 0.933)";
  location.reload();
});

const playgame = (userch) => {
  console.log("User choice = ", userch);
  const compchoice = gencompchoice();
  console.log("computer choice = ", compchoice);

  //TODO:Ckecks condition
  if (userch === compchoice) {
    draw();
  } else {
    let userwin = true;
    if (userch === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userch === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else if (userch === "scissor") {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userch, compchoice);
  }
};

//TODO:Get user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userch = choice.getAttribute("id");
    playgame(userch);
  });
});
