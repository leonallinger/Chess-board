import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'

let playerTurn = "white";

export const dropPieces = function(ev){
    let data = ev.dataTransfer.getData("piece");
    let piece = document.getElementById(data);
    let startingPieceColor = data.substring(0, 5);

	if (ev.target.className === "square") {
        if (startingPieceColor === playerTurn) {

            ev.target.appendChild(piece);

            playerTurn = (playerTurn === "white") ? "black":"white";

            attackedByWhite();
            attackedByBlack();
        }
    }
    else {
        if (startingPieceColor === playerTurn) {

            let targetSquare = ev.target.parentNode;
            targetSquare.appendChild(piece);
            targetSquare.removeChild(ev.target);

            playerTurn = (playerTurn === "white") ? "black":"white";

            attackedByWhite();
            attackedByBlack();
        }
    }

    let playerTurnText = document.getElementById("playerTurn");

    if (playerTurn === "white"){
        playerTurnText.innerText = "White to move";
    }
    else if (playerTurn === "black"){
        playerTurnText.innerText = "Black to move";
    }
}
