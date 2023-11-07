//Page loads
    //Make API call for "House" card
    //Diplay "House" card
//User clicks "Draw Card" button
const button = document.querySelector('button');//Grab the "Draw Card" button
const playerOutput = document.querySelector('#playerOutput');//Grab the "Player" card output
//Grab the houseOutput
    
button.addEventListener('click', async () => {//Create an event listener for the button
    //Make API call for Two cards
    const cardDraw = await fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=2`);
    const cardData = await cardDraw.json();
    const cards = cardData.cards;
    //Display "Player" card
    const playerCardObject = document.createElement('p');
    playerCardObject.textContent = cards[0].value + ` of ` + cards[0].suit;
    playerOutput.append(playerCardObject);
    console.log (cards);

    //Repeat steps for 'house' card
    //Make API call for 'House" card
    //Additional call not required; single call provides two cards
    //retrieve [1]
    // const houseCardDraw = document.createElement('p');
    // const


    //Display "House" card



    //Compare "House" card vs. "player" card
        //Highest card value wins
        //Display "[House/Player] wins!"
});