import { legalWhiteMoves, legalBlackMoves } from './legalPieceMoves.service.js'
import { dropPieces } from './dropPieces.service.js'

let playerTurn = "white";
let whiteMoves;
let blackMoves;

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

    let data = ev.dataTransfer.getData("piece");
    let startingPieceColor = data.substring(0, 5);

    let num = startPiece.indexOf("_", 6);
    let startingPieceType = startPiece.substring(6, num);

    if (playerTurn != startingPieceColor){
        return;
    }

    if (startingPieceType === "pawn") {
        if (whiteMoves.indexOf(startSquare + '-' + targetSquare) > -1 || whiteMoves.indexOf(startSquare + 'x' + targetSquare) > -1 || blackMoves.indexOf(startSquare + '-' + targetSquare) > -1 || blackMoves.indexOf(startSquare + 'x' + targetSquare) > -1) {
            dropPieces(startSquare, targetSquare, startSquare + '-' + targetSquare);
            playerTurn = (playerTurn === "white") ? "black" : "white";
        }
        else if (startingPieceColor === "white") {
            if (whiteMoves.indexOf(startSquare + '-' + targetSquare + "=Q") || whiteMoves.indexOf(startSquare + '-' + targetSquare + "=Q")) {

            }
        }
    }

    else if (startingPieceType === "king") {
        if (whiteMoves.indexOf('K' + startSquare + '-' + targetSquare) > -1 || blackMoves.indexOf('K' + startSquare + '-' + targetSquare) > -1) {
            dropPieces(startSquare, targetSquare, 'K' + startSquare + '-' + targetSquare);
            playerTurn = (playerTurn === "white") ? "black" : "white";
        }
        else if (startingPieceColor === "white") {
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
    else if (startingPieceType === "knight") {
        if (whiteMoves.indexOf('N' + startSquare + '-' + targetSquare) > -1 || blackMoves.indexOf('N' + startSquare + '-' + targetSquare) > -1) {
            dropPieces(startSquare, targetSquare, 'N' + startSquare + '-' + targetSquare);
            playerTurn = (playerTurn === "white") ? "black" : "white";
        }
    }

    else if (startingPieceType === "bishop") {
        if (whiteMoves.indexOf('B' + startSquare + '-' + targetSquare) > -1 || blackMoves.indexOf('B' + startSquare + '-' + targetSquare) > -1) {
            dropPieces(startSquare, targetSquare, 'B' + startSquare + '-' + targetSquare);
            playerTurn = (playerTurn === "white") ? "black" : "white";
        }
    }

    else if (startingPieceType === "rook") {
        if (whiteMoves.indexOf('R' + startSquare + '-' + targetSquare) > -1 || blackMoves.indexOf('R' + startSquare + '-' + targetSquare) > -1) {
            dropPieces(startSquare, targetSquare, 'R' + startSquare + '-' + targetSquare);
            playerTurn = (playerTurn === "white") ? "black" : "white";
        }
    }

    else if (startingPieceType === "queen") {
        if (whiteMoves.indexOf('Q' + startSquare + '-' + targetSquare) > -1 || blackMoves.indexOf('Q' + startSquare + '-' + targetSquare) > -1) {
            dropPieces(startSquare, targetSquare, 'Q' + startSquare + '-' + targetSquare);
            playerTurn = (playerTurn === "white") ? "black" : "white";
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
