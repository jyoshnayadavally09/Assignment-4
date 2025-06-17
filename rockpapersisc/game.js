const options = ["rock", "paper", "scissor"];

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    // Remove selected class from all first
    choices.forEach(c => c.classList.remove("selected"));
    
    // Add selected to clicked
    choice.classList.add("selected");
    
    const userChoice = choice.getAttribute("data-choice");
    playGame(userChoice);
  });
});

function playGame(uo) {
  const i = Math.floor(Math.random() * 3);
  const co = options[i];
  document.getElementById("co").innerText = co;

  if (uo === co) {
    document.getElementById("res").innerText = "Tie";
    return;
  }

  if (
    (uo === "rock" && co === "scissor") ||
    (uo === "paper" && co === "rock") ||
    (uo === "scissor" && co === "paper")
  ) {
    document.getElementById("res").innerText = "You Win!";
  } else {
    document.getElementById("res").innerText = "You Lose!";
  }
}
