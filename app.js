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
    guessesLeft = 3;

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
        gameOver(true, `${winningNum} is correct, YOU WIN!😊`)
    } else {
        //wrong number 
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //Game over - Lose
            gameOver(false, `Game over, YOU Lost😞.The Correct number was ${winningNum}`);
        } else {
            //Game continues - answer wrong
            //change border color
            guessInput.style.borderColor = 'red';
            //clear Input
            guessInput.value = '';
            //telling user the number is wrong
            setMessage(`${guess} is not Correct,You have ${guessesLeft} guesses left`, 'red')
        }
    }
});
//game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    //change border Green
    guessInput.style.borderColor = color;
    guessInput.style.borderWidth = '2px';
    message.style.color = color;
    //Set message 
    setMessage(msg)
}
// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}