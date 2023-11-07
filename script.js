//Page loads
const button = document.querySelector('button');//Grab the "Draw Card" button
const playerOutput = document.querySelector('#playerOutput');//Grab the "Player" card output
const houseOutput = document.querySelector('#houseOutput');//Grab the houseOutput
const outcomeOutput = document.querySelector('#outcomeOutput');//Grab outcomeOutput
//Grab the playerCard section
const playerCardSection = document.querySelector('#playerCard');
//Grab the playerCardIMG
const playerCardIMG = document.querySelector('#playerCardIMG');

    //User clicks "Draw Card" button
button.addEventListener('click', async () => {//Create an event listener for the button
    //Make API call for Two cards
    const cardDraw = await fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=2`);
    const cardData = await cardDraw.json();
    const cards = cardData.cards;

    console.log (cards);
    
    //Display "Player" card Value and Suit
    const playerCardObject = document.createElement('p');
    playerCardObject.textContent = cards[0].value + ` of ` + cards[0].suit;
    playerOutput.innerHTML = '';
    playerOutput.append(playerCardObject);

    //Display Player card image
    const playerCardImage = document.createElement('img');
    playerCardImage.src = cards[0].image;
    playerCardSection.appendChild(playerCardImage);    

    //Display "House" card
    const displayHouseCard = document.createElement('p');//Additional call not required; single call provides two cards
    displayHouseCard.textContent = cards[1].value + ` of ` + cards[1].suit; //retrieve [1]
    houseOutput.innerHTML = '';
    houseOutput.append(displayHouseCard);

    //Compare "House" card vs. "player" card
        //Highest card value wins
    if (cards[0].value > cards[1].value) {//if player card is greater than house card
        outcomeMessage = "Player Card Wins!";
    } else if(cards[1].value > cards[0].value) {//if house card is greater than player card
        outcomeMessage = "The House ALWAYS Wins!";
    } else if (cards[0].value = cards[1].value) {
        outcomeMessage = "It's a DRAW!"
    }
    //Need to deal with Face Cards
    
    //Display Outcome Message
    const displayOutcome = document.createElement('h4');
    displayOutcome.textContent = outcomeMessage;
    outcomeOutput.innerHTML = '';
    outcomeOutput.append(displayOutcome);

});