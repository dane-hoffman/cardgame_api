//Page loads
    //Make API call for "House" card
    //Diplay "House" card
//User clicks "Draw Card" button
const button = document.querySelector('button');
    
button.addEventListener('click', () => {//Create an event listener for the button
    //Make API call for "Player" card
    
    const playerOutput = document.querySelector('#playerOutput');//Grab the "Player" card output
    console.log (playerOutput);
    //Display "Player" card
    playerOutput.append('1');

    //Compare "House" card vs. "player" card
    //Highest card value wins
    //Display "[House/Player] wins!"
})

    
