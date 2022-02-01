//Game Over Indicatior
var gameOver = false;

//The Game State
const gameState = ["", "", "", "", "", "", "", "", ""];




/*
Steps for the game
    1.Let player take a turn
    2.Check if someone has won the game
        2a. If game is done, let the winner be known
        2b. If game is not done, redo turn 
Functions needed for this to work:
    takeTurn("Player")
    checkForWin()
    Display Winner
    ResetGame
*/


/*
take turn("")
{
    1.wait for player to click a tile
        2a.if valid, continue to 2
        2b.if invalid, continue to 1
    2.change the state of the game board
    3.Update the content of the html
}

*/


/*
checkForWin()
{
    1.create different states for winning
    2.Check if eaither player satisfies these states
    3.return the player that has won, n otherwise
}
*/

/*
DisplayWinner
{
    1.get the winner state
    2.end the game
}
*/

/*
ResetGame
{
    1.reset teh board to blank
    2.restart the game
}
*/