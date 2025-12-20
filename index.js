// age

let age = 22;

if (age < 21) {
    console.log("You can not play the game!")
} else {
    console.log("Welcome!")
}

let firstCard = 2;
let secondCard = 3;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame() {
    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else { 
        message = "You're out of the game!"
        isAlive = false
    }
}