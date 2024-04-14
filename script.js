// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById("userGuess").value);

  // Get the message element
  const message = document.getElementById("message");

  // Check if the guess is correct
  if (userGuess === randomNumber) {
    attempts++;
    message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
    disableInputAndButton();
  } else if (userGuess < randomNumber) {
    attempts++;
    message.textContent = "Too low. Try again!";
  } else {
    attempts++;
    message.textContent = "Too high. Try again!";
  }

  // Clear the input field
  document.getElementById("userGuess").value = "";
}

// Function to disable input field and button after correct guess
function disableInputAndButton() {
  document.getElementById("userGuess").disabled = true;
  document.querySelector("button").disabled = true;
}
