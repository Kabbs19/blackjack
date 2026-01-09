// age

let age = 22;

if (age < 21) {
    console.log("You can not play the game!")
} else {
    console.log("Welcome!")
}

let playerCards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let playerSumEl = document.querySelector("#player-sum-el")
let playerCardsEl = document.querySelector("#player-cards-el")

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
    
}

function startGame() {
    isAlive = true
    playerCards = [getRandomCard(), getRandomCard()]
    playerCardsEl.textContent = playerCards
    sum = playerCards[0] + playerCards[1]
    playerSumEl.textcontent = sum
    renderGame()
}

function renderGame() {
    playerCardsEl.textContent = "Cards: "
    for(let i = 0; i < playerCards.length; i++) {
        playerCardsEl.textContent += playerCards[i] + " "
    }
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
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    playerCards.push(card)
    renderGame()
    }
}