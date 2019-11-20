// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
var computerChoice; 
var winner;

var randomNumber = Math.random() //returns a value between 0 and .99999999

$('#shoot').click(function() {
    userChoice = $('#input').val()
    $("#userChoice").html(userChoice)

    if (randomNumber > .666) {
        computerChoice = 'rock'
    }
     if (randomNumber < .666 && randomNumber > .333 ) {
        computerChoice = 'scissors'
    }
    if (randomNumber < .333) {
        computerChoice = 'paper'
    }

})


// DOCUMENT READY FUNCTION BELOW

