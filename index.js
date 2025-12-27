// age

let age = 22;

if (age < 21) {
    console.log("You can not play the game!")
} else {
    console.log("Welcome!")
}

let firstCard = 2;
let secondCard = 3;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let playerSumEl = document.querySelector("#player-sum-el")
let playerCardsEl = document.querySelector("#player-cards-el")


function startGame() {
    playerCardsEl.textContent = "Cards: " + firstCard + " + " + secondCard
    playerSumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else { 
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 10
    sum += card
    startGame()
}