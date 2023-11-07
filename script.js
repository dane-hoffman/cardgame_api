//Page loads
    //Make API call for "House" card
    //Diplay "House" card
//User clicks "Draw Card" button
const button = document.querySelector('button');//Grab the "Draw Card" button
const playerOutput = document.querySelector('#playerOutput');//Grab the "Player" card output
    
button.addEventListener('click', async () => {//Create an event listener for the button
    //Make API call for "Player" card
    const playerCardDraw = await fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=1`);
    const playerCardData = await playerCardDraw.json();
    const playerCard = playerCardData.cards;
    //Display "Player" card
    const newCardObject = document.createElement('p');
    newCardObject.textContent = playerCard.value;
    playerOutput.append(playerCard);
    console.log (playerCard);

    //Compare "House" card vs. "player" card
    //Highest card value wins
    //Display "[House/Player] wins!"
})

    
