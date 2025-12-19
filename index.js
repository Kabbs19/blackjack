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

if (sum < 21) {
    console.log("Do you want another card?")
} else if (sum === 21) {
    console.log("You've got blackjack!")
} else { 
    console.log("You're out of the game!")
}