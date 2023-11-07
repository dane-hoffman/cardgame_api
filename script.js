//Page loads
//User clicks "Draw Card" button
const button = document.querySelector('button');//Grab the "Draw Card" button
const playerOutput = document.querySelector('#playerOutput');//Grab the "Player" card output
const houseOutput = document.querySelector('#houseOutput');//Grab the houseOutput
    
button.addEventListener('click', async () => {//Create an event listener for the button
    //Make API call for Two cards
    const cardDraw = await fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=2`);
    const cardData = await cardDraw.json();
    const cards = cardData.cards;
    console.log (cards);
    
    //Display "Player" card
    const playerCardObject = document.createElement('p');
    playerCardObject.textContent = cards[0].value + ` of ` + cards[0].suit;
    playerOutput.innerHTML = '';
    playerOutput.append(playerCardObject);

    //Display "House" card
    const displayHouseCard = document.createElement('p');//Additional call not required; single call provides two cards
    displayHouseCard.textContent = cards[1].value + ` of ` + cards[1].suit; //retrieve [1]
    houseOutput.innerHTML = '';
    houseOutput.append(displayHouseCard);

    //Compare "House" card vs. "player" card
    if (cards[0].value > cards[1].value) {
        console.log("Player card wins!");
    }
        //Highest card value wins
        //Display "[House/Player] wins!"
});