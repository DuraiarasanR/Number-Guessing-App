/* Rules For the Game 
1.Player must guess a number between 1 and 10
2.Players get certain amount of guesses
3.Notify Player of guesses remaining
4.Notify the Player of the correct answer if loose 
5.Let Player choose to play again*/


// Game values 
let min = 1,
    max = 10,
    winningNum = 2,
    guessessLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guesses
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value)
    //Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    //check if won
    if (guess === winningNum) {
        //disable input
        guessInput.disabled = true;
        //change border Green
        guessInput.style.borderColor = 'green';
        guessInput.style.borderWidth = '2px';
//Set message 
setMessage(`${winningNum} is correct, YOU WIN!`,'green')
    } else {

    }
});
// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}