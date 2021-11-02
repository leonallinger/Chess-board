import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'

export const dropPieces = function(startSquareId, targetSquareId, startingPieceColor){
    let piece = document.getElementById(startSquareId).children[0];
    let targetSquare = document.getElementById(targetSquareId);

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
            
        targetSquare.appendChild(piece);
        targetSquare.removeChild(targetPiece);

        attackedByWhite();
        attackedByBlack();
    }
}
