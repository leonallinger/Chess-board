import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'
import { whiteIsInCheck, blackIsInCheck } from './isInCheck.service.js'

let playerTurn = "white";

export const dropPieces = function(ev){
    let data = ev.dataTransfer.getData("piece");
    let s = document.getElementById(data);

    let startSquare = document.getElementById(ev.dataTransfer.getData("startSquare"));

    let targetPieceColor = ev.target.id.substring(0, 5);
    let startingPieceColor = data.substring(0, 5);

	if (ev.target.className === "square") {
        if (startingPieceColor === playerTurn) {

            ev.target.appendChild(s);
            playerTurn = (playerTurn === "white") ? "black":"white";

            attackedByWhite();
            attackedByBlack();

            switch (startingPieceColor){
                case "white":
                    if (whiteIsInCheck() === true){
                        ev.target.removeChild(s);
                        startSquare.appendChild(s);

                        playerTurn = "white";
                    }
                    break;

                case "black":
                    if (blackIsInCheck() === true){
                        ev.target.removeChild(s);
                        startSquare.appendChild(s);

                        playerTurn = "black";
                    }
                    break;
            }
        }
    }

    else {
        if (targetPieceColor != startingPieceColor && startingPieceColor === playerTurn) {

            let targetSquare = ev.target.parentNode;
            targetSquare.appendChild(s);
            targetSquare.removeChild(ev.target);

            playerTurn = (playerTurn === "white") ? "black":"white";

            attackedByWhite();
            attackedByBlack();

            switch (startingPieceColor){
                case "white":
                    if (whiteIsInCheck() === true){
                        targetSquare.removeChild(s);
                        targetSquare.appendChild(ev.target);
                        startSquare.appendChild(s);

                        playerTurn = "white";
                    }
                    break;

                case "black":
                    if (blackIsInCheck() === true){
                        targetSquare.removeChild(s);
                        targetSquare.appendChild(ev.target);
                        startSquare.appendChild(s);

                        playerTurn = "black";
                    }
                    break;
            }
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
