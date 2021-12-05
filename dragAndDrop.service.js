import { legalWhiteMoves, legalBlackMoves } from './legalPieceMoves.service.js'
import { dropPieces } from './dropPieces.service.js'
import { promoteToQueen } from './promote.service.js'

let playerTurn = "white";
let whiteMoves, blackMoves;

export const initialLegalMoves = function () {
    whiteMoves = legalWhiteMoves();
    blackMoves = legalBlackMoves();
}

export const allowDrop = function(ev) {
    ev.preventDefault();
}
window.allowDrop = allowDrop;

export const drag = function(ev) {
    ev.dataTransfer.setData("piece", ev.target.id);
    ev.dataTransfer.setData("startSquare", ev.target.parentNode.id);
}
window.drag = drag;

export const drop = function (ev) {
    ev.preventDefault();

    let startPiece = ev.dataTransfer.getData("piece");
    let startSquare = ev.dataTransfer.getData("startSquare");
    let targetSquare = (ev.target.className === "square") ? ev.target.id : ev.target.parentNode.id;

    let startingPieceColor = startPiece.substring(0, 5);
    if (playerTurn != startingPieceColor) return;

    let num = startPiece.indexOf("_", 6);
    let startingPieceType = startPiece.substring(6, num);

    let startingPieceLetter = startPiece.substring(6, 7);
    if (startingPieceType === "Knight") startingPieceLetter = 'N';
    if (startingPieceType === "pawn") startingPieceLetter = '';

    if (whiteMoves.indexOf(startingPieceLetter + startSquare + '-' + targetSquare) > -1 || blackMoves.indexOf(startingPieceLetter + startSquare + '-' + targetSquare) > -1 || whiteMoves.indexOf(startingPieceLetter + startSquare + 'x' + targetSquare) > -1 || blackMoves.indexOf(startingPieceLetter + startSquare + 'x' + targetSquare) > -1) {
        dropPieces(startSquare, targetSquare, startingPieceLetter + startSquare + '-' + targetSquare);
        playerTurn = (playerTurn === "white") ? "black" : "white";
    }

    else if (startingPieceType === "pawn") {
        if (startingPieceColor === "white") {
            if (whiteMoves.indexOf(startSquare + '-' + targetSquare + "=Q") > -1 || whiteMoves.indexOf(startSquare + 'x' + targetSquare + "=Q") > -1) {
                promoteToQueen(startSquare, targetSquare, "white");
                playerTurn = (playerTurn === "white") ? "black" : "white";
            }
        }
        else if (startingPieceColor === "black") {
            if (blackMoves.indexOf(startSquare + '-' + targetSquare + "=Q") > -1 || blackMoves.indexOf(startSquare + 'x' + targetSquare + "=Q") > -1) {
                promoteToQueen(startSquare, targetSquare, "black");
                playerTurn = (playerTurn === "white") ? "black" : "white";
            }
        }
    }

    else if (startingPieceType === "King") {
        if (startingPieceColor === "white") {
            if (whiteMoves.indexOf("O-O") > -1 && targetSquare === "g1") {
                dropPieces(startSquare, targetSquare, "O-O");
                dropPieces("h1", "f1", "O-O");
                playerTurn = (playerTurn === "white") ? "black" : "white";
            }
            else if (whiteMoves.indexOf("O-O-O") > -1 && targetSquare === "c1") {
                dropPieces(startSquare, targetSquare, "O-O-O");
                dropPieces("a1", "d1", "O-O-O");
                playerTurn = (playerTurn === "white") ? "black" : "white";
            }
        }
        else if (startingPieceColor === "black") {
            if (blackMoves.indexOf("O-O") > -1 && targetSquare === "g8") {
                dropPieces(startSquare, targetSquare, "O-O");
                dropPieces("h8", "f8", "O-O");
                playerTurn = (playerTurn === "white") ? "black" : "white";
            }
            else if (blackMoves.indexOf("O-O-O") > -1 && targetSquare === "c8"){
                dropPieces(startSquare, targetSquare, "O-O-O");
                dropPieces("a8", "d8", "O-O-O");
                playerTurn = (playerTurn === "white") ? "black" : "white";
            }
        }
    }

    let playerTurnText = document.getElementById("playerTurn");
    let playerTurnColor = document.getElementById("moveColor");
    if (playerTurn === "white"){
        playerTurnText.innerText = "White to move";
        playerTurnColor.style.backgroundColor = "white";
    }
    else if (playerTurn === "black"){
        playerTurnText.innerText = "Black to move";
        playerTurnColor.style.backgroundColor = "black";
    }

    whiteMoves = legalWhiteMoves();
    blackMoves = legalBlackMoves();
}
window.drop = drop;
