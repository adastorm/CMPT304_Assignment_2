//Game Over Indicatior
let gameOver = false;
let currentPlayer = "X";

//The Game State
const gameState = ["", "", "", "", "", "", "", "", ""];


//Main Loop
for (let i = 0; i < gameState.length; i++) {
    document.getElementById("tile" + (i + 1)).addEventListener("click", function () { takeTurn(i) });
}

document.getElementById("RestartButton").addEventListener("click", resetGame);
updateBoard();

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
    ChangeBoared
*/


/*
take turn("")
{
    1.wait for player to click a tile
        2a.if valid, continue to 2
        2b.if invalid, continue to 1
    2.change the state of the game board
    3.Update the content of the html
    4.Change player
}
*/

function takeTurn(tile) {
    if (gameState[tile] == "") {
        gameState[tile] = currentPlayer;
    }
    updateBoard();
    checkForWin();
    if (currentPlayer == "X") currentPlayer = "O";
    else currentPlayer = "X";

}


/*
checkForWin()
{
    1.create different states for winning
    2.Check if eaither player satisfies these states
    3.return the player that has won, n otherwise
}
*/
function checkForWin() {

    let hasWon = false;
    let winner = ""

    const waysToWin = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [7, 5, 3]        
    ];

    for (let index = 0; index < waysToWin.length; index++) {
        pos1 = gameState[waysToWin[index][0]];
        pos2 = gameState[waysToWin[index][1]];
        pos3 = gameState[waysToWin[index][2]];

        if (pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if (pos1 == pos2 && pos2 == pos3) {
                hasWon = true;
                winner = pos1;
                break;
            }     
        }
        
    }

    if (hasWon == true) displayWinner(winner);
}

/*
DisplayWinner
{
    1.get the winner state
    2.end the game
}
*/
function displayWinner(winner) {
    document.getElementById("winText").innerText = "Player " + winner + " has won!"
    gameOver = true;
}

/*
ResetGame
{
    1.reset teh board to blank
    2.restart the game
}
*/
function resetGame() {
    for (let index = 0; index < gameState.length; index++) {
        gameState[index] = "";
    }
    gameOver = false;
    document.getElementById("winText").innerText = "";
    updateBoard();
}


/*
Change Boared
{
    Check the array and apply it to the document
}
*/
function updateBoard() {
    for (let index = 0; index < gameState.length; index++) {
        document.getElementById("tile" + (index + 1)).innerHTML = gameState[index];
    }
}