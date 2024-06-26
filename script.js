// Initialize scores to 0
let userScore = 0;
let compScore = 0;

// Select all choice elements (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Select the message element to display game results
const msg = document.querySelector("#msg");

// Select the score elements to display user and computer scores
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random computer choice (rock, paper, or scissors)
const genCompChoice = () => {
  // Create an array of options
  const options = ["rock", "paper", "scissors"];
  // Generate a random index between 0 and 2
  const randIdx = Math.floor(Math.random() * 3);
  // Return the option at the random index
  return options[randIdx];
};

// Function to draw the game (when user and computer choose the same option)
const drawGame = () => {
  // Set the message text and background color
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Function to show the winner of the game
const showWinner = (userWin, userChoice, compChoice) => {
  // If the user wins
  if (userWin) {
    // Increment the user's score and update the score display
    userScore++;
    userScorePara.innerText = userScore;
    // Set the message text and background color
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // If the computer wins
    // Increment the computer's score and update the score display
    compScore++;
    compScorePara.innerText = compScore;
    // Set the message text and background color
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Main function to play the game
const playGame = (userChoice) => {
  // Generate a random computer choice
  const compChoice = genCompChoice();

  // If the user and computer choose the same option, it's a draw
  if (userChoice === compChoice) {
    // Draw the game, no winner
    drawGame();
  } else {
    // Determine if the user wins based on the game rules
    let userWin = true;
    // Check if user wins based on the game logic
    if (userChoice === "rock") {
      // Rock loses to paper, so if computer chose paper, user loses
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Paper loses to scissors, so if computer chose scissors, user loses
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // Scissors loses to rock, so if computer chose rock, user loses
      userWin = compChoice === "rock" ? false : true;
    }
    // Show the winner, either user or computer
    showWinner(userWin, userChoice, compChoice);
  }
};


// Add event listeners to each choice element
choices.forEach((choice) => {
  // When a choice element is clicked
  choice.addEventListener("click", () => {
    // Get the user's choice from the element's ID
    const userChoice = choice.getAttribute("id");
    // Play the game with the user's choice
    playGame(userChoice);
  });
});
