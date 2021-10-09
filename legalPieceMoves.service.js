import { allBlackMoves, allWhiteMoves } from './allMoves.service.js'
import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'
import { whiteIsInCheck, blackIsInCheck } from './isInCheck.service.js'

export const legalWhiteMoves = function () {
    let moves = allWhiteMoves();

    let legalMoves = new Array();

    for (let i = 0; i < moves.length; i++) {
        let startSquare = document.getElementById(moves[i].substring(moves[i].length - 5, moves[i].length - 3));
        let startPiece = startSquare.childNodes[0];

        let targetSquare = document.getElementById(moves[i].substring(moves[i].length - 2, moves[i].length));
        if (targetSquare.hasChildNodes()) {
            let targetPiece = targetSquare.childNodes[0];
            let targetPieceColor = targetPiece.getAttribute('id').substring(0, 5);

            if (targetPieceColor === "black") {

                targetSquare.appendChild(startPiece);
                targetSquare.removeChild(targetPiece);
                attackedByBlack();

                if (whiteIsInCheck() === false) {
                    legalMoves.push(moves[i]);
                }

                startSquare.appendChild(startPiece);
                targetSquare.appendChild(targetPiece);
                attackedByBlack();
            }
        }
        else {
            if (moves[i].length != 5 || moves[i].substring(2, 3) != 'x') {
                targetSquare.appendChild(startPiece);
                attackedByBlack();

                if (whiteIsInCheck() === false) {
                    legalMoves.push(moves[i]);
                }

                startSquare.appendChild(startPiece);
                attackedByBlack();
            }
        }
    }
    return legalMoves;
}

export const legalBlackMoves = function () {
    let moves = allBlackMoves();

    let legalMoves = new Array();

    for (let i = 0; i < moves.length; i++) {
        let startSquare = document.getElementById(moves[i].substring(moves[i].length - 5, moves[i].length - 3));
        let startPiece = startSquare.childNodes[0];

        let targetSquare = document.getElementById(moves[i].substring(moves[i].length - 2, moves[i].length));
        if (targetSquare.hasChildNodes()) {
            let targetPiece = targetSquare.childNodes[0];
            let targetPieceColor = targetPiece.getAttribute('id').substring(0, 5);

            if (targetPieceColor === "white") {

                targetSquare.appendChild(startPiece);
                targetSquare.removeChild(targetPiece);
                attackedByWhite();

                if (blackIsInCheck() === false) {
                    legalMoves.push(moves[i]);
                }

                startSquare.appendChild(startPiece);
                targetSquare.appendChild(targetPiece);
                attackedByWhite();
            }
        }
        else {
            if (moves[i].length != 5 || moves[i].substring(2, 3) != 'x') {
                targetSquare.appendChild(startPiece);
                attackedByWhite();

                if (blackIsInCheck() === false) {
                    legalMoves.push(moves[i]);
                }

                startSquare.appendChild(startPiece);
                attackedByWhite();
            }
        }
    }

    return legalMoves;
}