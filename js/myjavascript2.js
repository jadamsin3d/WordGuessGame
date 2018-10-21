window.onload = function () {

    //array of letters
    var wordOptions = ["Ayakashi", "Funayurei", "Gashadokuro", "Goryo", "Hitodama", "Ikiryo", "Inugami", "Mogwai", "Wangliang", "Yaoguai",
        "Aswang", "Manananggal", "Tiyanak", "Krasue", "Krahang", "Chupacabra", "Wendigo", "Iele", "Moroi", "Strigoi", "Vantoase", "Zmeu"];

    var lives = 10; //number of guesses left
    var guessedLetters = [];
    var wordIndex; //index of the word in the array
    var word = []; //the attempted word to guess
    var remaining = 0; //chances remaining
    var gameStart = false;  //has the game started
    var gameFinished = false;   //a key to try again
    var wins = 0; //number of wins

    function resetGame() {
        remaining = lives;
        gameStart = false;

        wordIndex = Math.floor(Math.random() * (wordOptions.length));
        guessedLetters = [];
        word = [];

        for (var i = 0; i < wordOptions[word].length; i++) {
            word.push("-");

            document.getElementById("#youlose").innerHTML.cssText = "display:none";
            document.getElementById("#youwin").innerHTML.cssText = "display:none";
            document.getElementById("#reset").innerHTML.cssText = "display:none";
        }

        UpdateDisplay()
    };



    document.getElementById("#GamesWon").innerText = wins;
    document.getElementById("#currentWord").innerText = "";
    for (var i = 0; i < word.length; i++) {
        document.getElementById("#currentWord").innerHTML += word[i];

        document.getElementById("#UserLives").innerHTML = remaining;
        document.getElementById("#UserGuessed").innerHTML = guessedLetters;
        if (remaining <= 0) {
            document.getElementById("#youlose").innerHTML.cssText = "display: block";
            document.getElementById("#reset").innerHTML.cssText = "display: block";
        }
    };



    document.onkeydown = function (event) {
        if (gameFinished) {
            resetGame();
            gameFinished = false;
        }
        else {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                makeGuess(event.key.toLowerCase());
            }
        }
    };

    makeGuess = function(letter) {
        if(remaining > 0) {
            if(!gameStart) {
                gameStart = true;
            }
            
            if(guessedLetters.indexOf[letter] === -1) {
                guessedLetters.push(letter);
                evaluateGuess(letter);
            }
        }

        UpdateDisplay();
        checkWin();
    };

    function evaluateGuess(letter) {
        var positions = [];
        for(var i = 0; i < wordOptions[word].length; i++) {
            if(wordOptions[word][i] === letter) {
                positions.push(i);
            }
        }
        
        if(positions.length <= 0) {
            remainingGuesses--;
        }
        else {
            for(var i = 0; i <  positions.length; i++) {
                word[positions[i]] = letter;
            }
        }
    };

    function checkWin() {
        if(word.indexOf("_") === -1) {
            document.getElementById("#youwin").style.cssText = "display: block";
            document.getElementById("#reset").style.cssFloat = "display: block";
        }
        wins++;
        gameFinished = true;
    };
}
