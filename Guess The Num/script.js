const randomNumber = (parseInt(Math.random()*100 + 1));

 const submit = document.querySelector('#button');
 const input = document.querySelector('#input');
 const guessSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastresult');
 const lowOrhigh = document.querySelector('.lowOrhigh');
 const startOver = document.querySelector('.resultParas');

 const p = document.createElement('p');

 let prevGuess = [];
 let numGuess = 1;

 let playGame = true;


 if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess)
        validateGuess(guess);
    })
 }

 function validateGuess(guess) {
      
      if(isNaN(guess)) {
         alert("Please enter a valid number")
      } else if (guess < 1) {
         alert ("Please enter a numebr more than zero")
      } else if (guess > 100) {
         alert ("Please enter a number less than 100")
      } else {
         prevGuess.push(guess)
         if (numGuess === 11 ) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            EndGame();
         } else {
            displayGuess(guess)
            checkGuess(guess)
         }
      }

 }

 console.log("checkguses is running");

 function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`you guessed it right`)
      EndGame()
    } else if ( guess < randomNumber) {
      displayMessage(`number is too low`)
    }  else if ( guess > randomNumber) {
      displayMessage(`number is too high`)
    }
 }

 function displayGuess(guess) {
    input.value = "";
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    if ( numGuess === 11) {
      displayGuess();
      displayMessage();
      EndGame();
    }
 }

 function displayMessage(message) {
    lowOrhigh.innerHTML = `its low`
 }

 function EndGame() {
    //
 }

 function newGame() {

 }