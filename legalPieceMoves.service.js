import { allBlackMoves, allWhiteMoves } from './allMoves.service.js'
import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'
import { whiteIsInCheck, blackIsInCheck } from './isInCheck.service.js'
import { kingsideCastle, queensideCastle } from './pieceMoves.service.js'

export const legalWhiteMoves = function () {
    let moves = allWhiteMoves();
    moves = moves.concat(kingsideCastle("white"));
    moves = moves.concat(queensideCastle("white"));

    let legalMoves = new Array();

    for (let i = 0; i < moves.length; i++) {
        
        if (moves[i] === "O-O"){
            if (whiteIsInCheck() === false){
                if (document.getElementById("f1").getAttribute("isAttackedByBlack") === "false" && document.getElementById("g1").getAttribute("isAttackedByBlack") === "false"){
                    legalMoves.push(moves[i]);
                }
            }
            continue;
        }
        if (moves[i] === "O-O-O"){
            if (whiteIsInCheck() === false){
                if (document.getElementById("d1").getAttribute("isAttackedByBlack") === "false" && document.getElementById("c1").getAttribute("isAttackedByBlack") === "false"){
                    legalMoves.push(moves[i]);
                }
            }
            continue;
        }

        let x = moves[i].substring(0, 1);
        let y = false;
        let startSquare, targetSquare;
        if (x === 'K' || x === 'Q' || x === 'R' || x === 'B' || x === 'N') {
            startSquare = document.getElementById(moves[i].substring(1, 3));
            targetSquare = document.getElementById(moves[i].substring(4, 6));
            y = true;
        }
        else {
            startSquare = document.getElementById(moves[i].substring(0, 2));
            targetSquare = document.getElementById(moves[i].substring(3, 5));
        }
        let startPiece = startSquare.childNodes[0];
        
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
            if (y === true || moves[i].substring(2, 3) != 'x') {
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
    moves = moves.concat(kingsideCastle("black"));
    moves = moves.concat(queensideCastle("black"));

    let legalMoves = new Array();

    for (let i = 0; i < moves.length; i++) {

        if (moves[i] === "O-O"){
            if (blackIsInCheck() === false){
                if (document.getElementById("f8").getAttribute("isAttackedByWhite") === "false" && document.getElementById("g8").getAttribute("isAttackedByWhite") === "false"){
                    legalMoves.push(moves[i]);
                }
            }
            continue;
        }
        if (moves[i] === "O-O-O"){
            if (blackIsInCheck() === false){
                if (document.getElementById("d8").getAttribute("isAttackedByWhite") === "false" && document.getElementById("c8").getAttribute("isAttackedByWhite") === "false"){
                    legalMoves.push(moves[i]);
                }
            }
            continue;
        }

        let x = moves[i].substring(0, 1);
        let y = false;
        let startSquare, targetSquare;
        if (x === 'K' || x === 'Q' || x === 'R' || x === 'B' || x === 'N') {
            startSquare = document.getElementById(moves[i].substring(1, 3));
            targetSquare = document.getElementById(moves[i].substring(4, 6));
            y = true;
        }
        else {
            startSquare = document.getElementById(moves[i].substring(0, 2));
            targetSquare = document.getElementById(moves[i].substring(3, 5));
        }
        let startPiece = startSquare.childNodes[0];

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
            if (y === true || moves[i].substring(2, 3) != 'x') {
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
