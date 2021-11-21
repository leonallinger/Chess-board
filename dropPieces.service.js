import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'
import { whiteIsInCheck, blackIsInCheck } from './isInCheck.service.js';

export const dropPieces = function(startSquareId, targetSquareId, move){
    let piece = document.getElementById(startSquareId).children[0];
    let targetSquare = document.getElementById(targetSquareId);

    let lastMoveText = document.getElementById("lastMoveBox");

    if (piece.id.substring(6, 10) === "king" || piece.id.substring(6, 10) === "rook") {
        piece.setAttribute('hasMoved', 'true');
    }

    if (targetSquare.hasChildNodes() === false) {
        targetSquare.appendChild(piece);

        attackedByWhite();
        attackedByBlack();
    }
    else {
        let targetPiece = targetSquare.children[0];

        targetSquare.removeChild(targetPiece);
        targetSquare.appendChild(piece);

        attackedByWhite();
        attackedByBlack();

        move = move.replace('-', 'x');
    }

    if (whiteIsInCheck() === true || blackIsInCheck() === true) move += '+';
    lastMoveText.innerText = move;
}
