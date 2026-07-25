let randomNumber = (parseInt(Math.random()*100 + 1));

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
      guessSlot.innerHTML += `${guess}, `;
      numGuess++;
      if (remaining) {
         remaining.innerHTML = String(11 - numGuess);
      }
 }

  function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2> ${message}</h2>`;
 }

 function EndGame() {
    input.value = "";
    input.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()

 }

 function newGame() {
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random()*100+1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = '10';
      lowOrhigh.innerHTML = '';
      input.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
   })
  

 }