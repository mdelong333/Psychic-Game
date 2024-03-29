
//Create variables for wins, losses, guessed letters, remaining guesse, and array for computer choices
    var compOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    var wins = 0;
    var losses = 0;
    var remainingGuess = 9;
    var previousGuess = [];

    //Create variables that reference html elements to display text
    var winsText = document.getElementById("win-txt");
    var lossesText = document.getElementById("loss-txt");
    var remainingGuessText = document.getElementById("remain-guess-txt");
    var previousGuessText = document.getElementById("prev-guess-txt");

    //function runs when player presses a key
    document.onkeypress = function(event) {

        
        //Ties event key to user guess and logs the guess to the console
        var userGuess = event.key;
        console.log(userGuess);

        //Pushes userGuess into previousGuess array
        var guesses = previousGuess.push(" " + userGuess);
        

        //Computer chooses random letter from the array and logs it to console
        var compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
        console.log(compChoice);

        //Checks players guess with the computers choice, if they are the same wins increase by 1 and game will reset, otherwise remaining guess decreases by 1
        if (userGuess) {
            if (userGuess === compChoice) {
                wins++; remainingGuess = 9; previousGuess = [];
            } else {
                remainingGuess--;
                //If remaining guesses fall to 0 losses will increase by one and game will reset
                if (remainingGuess === 0) {
                    losses++; remainingGuess = 9; previousGuess = [];
                }
            };
            //Displays wins, losses, remaining guesses, and previous guesses in the appropriate p element of the html
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
            remainingGuessText.textContent = "Remaining guesses: " + remainingGuess;
            previousGuessText.textContent = "Your guesses so far: " + previousGuess;

        };


        //Logs wins, losses, and guesses remaining to console.
        console.log('wins', wins);
        console.log('losses', losses);
        console.log('guesses left', remainingGuess);

    }



