import { legalWhiteMoves, legalBlackMoves } from './legalPieceMoves.service.js'
import { dropPieces } from './dropPieces.service.js'

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

    let whiteMoves = legalWhiteMoves();
    let blackMoves = legalBlackMoves();

    let startPiece = ev.dataTransfer.getData("piece");
    let startSquare = ev.dataTransfer.getData("startSquare");

    let data = ev.dataTransfer.getData("piece");
    let startingPieceColor = data.substring(0, 5);

    let num = startPiece.indexOf("_", 6);
    let startingPieceType = startPiece.substring(6, num);

    if (startingPieceType === "pawn") {
        if (whiteMoves.indexOf(startSquare + '-' + ev.target.id) > -1 || whiteMoves.indexOf(startSquare + 'x' + ev.target.parentNode.id) > -1 || blackMoves.indexOf(startSquare + '-' + ev.target.id) > -1 || blackMoves.indexOf(startSquare + 'x' + ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "king") {
        if (whiteMoves.indexOf('K' + startSquare + '-' + ev.target.id) > -1 || blackMoves.indexOf('K' + startSquare + '-' + ev.target.id) > -1 || whiteMoves.indexOf('K' + startSquare + '-' + ev.target.parentNode.id) > -1 || blackMoves.indexOf('K' + startSquare + '-' + ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "knight") {
        if (whiteMoves.indexOf('N' + startSquare + '-' + ev.target.id) > -1 || blackMoves.indexOf('N' + startSquare + '-' + ev.target.id) > -1 || whiteMoves.indexOf('N' + startSquare + '-' + ev.target.parentNode.id) > -1 || blackMoves.indexOf('N' + startSquare + '-' + ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "bishop") {
        if (whiteMoves.indexOf('B' + startSquare + '-' + ev.target.id) > -1 || blackMoves.indexOf('B' + startSquare + '-' + ev.target.id) > -1 || whiteMoves.indexOf('B' + startSquare + '-' + ev.target.parentNode.id) > -1 || blackMoves.indexOf('B' + startSquare + '-' + ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "rook") {
        if (whiteMoves.indexOf('R' + startSquare + '-' + ev.target.id) > -1 || blackMoves.indexOf('R' + startSquare + '-' + ev.target.id) > -1 || whiteMoves.indexOf('R' + startSquare + '-' + ev.target.parentNode.id) > -1 || blackMoves.indexOf('R' + startSquare + '-' + ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "queen") {
        if (whiteMoves.indexOf('Q' + startSquare + '-' + ev.target.id) > -1 || blackMoves.indexOf('Q' + startSquare + '-' + ev.target.id) > -1 || whiteMoves.indexOf('Q' + startSquare + '-' + ev.target.parentNode.id) > -1 || blackMoves.indexOf('Q' + startSquare + '-' + ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
}
window.drop = drop;
