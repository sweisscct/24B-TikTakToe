let player1Name;
let player2Name;
let playerTurn;

let submitButton = document.getElementById("submit");
let playerNameInput = document.getElementById("player-name");

submitButton.addEventListener("click", () => {
    if (!player1Name) player1Name = playerNameInput.value;
    else {
        player2Name = playerNameInput.value;
        console.log("Start");
        startGame();
    }
});

function startGame() {
    playerTurn = 1;
    let tds = document.getElementsByTagName("td");
    for (let i=0; i<tds.length; i++) {
        tds[i].addEventListener("click", () => {
            if (playerTurn == 1) {
                tds[i].innerText = "X";
                playerTurn = 2;
                console.log("X");
            } else {
                tds[i].innerText = "O";
                playerTurn = 1;
                console.log("O");
            }
        })
    }
}