// Page loads
const button = document.querySelector('button');
const playerOutput = document.querySelector('#playerOutput');
const houseOutput = document.querySelector('#houseOutput');
const outcomeOutput = document.querySelector('#outcomeOutput');
const playerCardIMG = document.querySelector('#playerCardIMG');
const playerCardContent = document.querySelector('#playerCardContent');
const houseCardContent = document.querySelector('houseCardContent');

// User clicks "Draw Card" button
button.addEventListener('click', async () => {
    // Reset previous card and outcome information
    playerCardContent.innerHTML = '';
    houseOutput.innerHTML = '';
    outcomeOutput.innerHTML = '';

    // Make API call for two cards
    const cardDraw = await fetch('https://www.deckofcardsapi.com/api/deck/new/draw/?count=2');
    const cardData = await cardDraw.json();
    const cards = cardData.cards;

    // Define and Display playerCard; Values, Suit, and src Image
    const playerCardObject = document.createElement('p');
    playerCardObject.textContent = cards[0].value + ` of ` + cards[0].suit;
    const playerCardImage = document.createElement('img');
    playerCardImage.src = cards[0].image;
    playerCardContent.append(playerCardObject, playerCardImage);

    // Define and Display "House" card
    const displayHouseCard = document.createElement('p');
    displayHouseCard.textContent = cards[1].value + ` of ` + cards[1].suit;
    const houseCardImage = document.createElement('img');
    houseCardImage.src = cards[1].image;
    houseOutput.append(displayHouseCard, houseCardImage);

    // Compare "House" card vs. "Player" card
    let outcomeMessage = '';
    if (cards[0].value > cards[1].value) {
        outcomeMessage = "Player Card Wins!";
    } else if (cards[1].value > cards[0].value) {
        outcomeMessage = "The House ALWAYS Wins!";
    } else if (cards[0].value === cards[1].value) {
        outcomeMessage = "It's a DRAW!";
    }

    // Display Outcome Message
    const displayOutcome = document.createElement('h4');
    displayOutcome.textContent = outcomeMessage;
    outcomeOutput.append(displayOutcome);
});
