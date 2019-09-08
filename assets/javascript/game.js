
//Create variables for wins, losses, guessed letters, remaining guesse, and array for computer choices

var compOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var wins = 0;
var losses = 0;
var remainingGuess = 9;
var previousGuess = 0;


//Create variables that reference html elements to display text
var winsText = document.getElementById("win-txt");
var lossText = document.getElementById("loss-txt");
var remainingGuessText = document.getElementById("remain-guess-txt");
var guessedText = document.getElementById("guessed-txt");

//function runs when player presses a key and logs it to console
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

    //Computer chooses random letter from the array and logs it to console
    var compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
    console.log(compChoice);

    //Checks players guess with the computers choice, if they are the same wins increase by 1 and game will reset, otherwise remaining guess decreases by 1
    if (userGuess === compChoice) {
        wins++;
    } else {
        remainingGuess--;
        //If remaining guesses fall to 0 losses will increase by one and game will reset
        if (remainingGuess === 0) {
            losses++;
        }
    };

    //Should display wins, losses, remaining guesses, and previous guesses in the appropriate p element of the html -- not working yet not sure why
    wins.textContent = "Wins: " + wins;
    losses.textContent = "Losses: " + losses;
    remainingGuess.textContent = "Remaining guesses: " + remainingGuess;
    previousGuess.textContent = "Your guesses so far: " + previousGuess;
    

    //Logs wins, losses, and guesses remaining to console.
    console.log('wins', wins);
    console.log('losses', losses);
    console.log('guesses left', remainingGuess);

}



