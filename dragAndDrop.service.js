import { pawnMoves, kingMoves, knightMoves, bishopMoves, rookMoves } from './pieceMoves.service.js'
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

export const drop = function(ev) {
    ev.preventDefault();

    let startPiece = ev.dataTransfer.getData("piece");
    let startSquare = ev.dataTransfer.getData("startSquare");

    let num = startPiece.indexOf("_", 6);
    let startingPieceType = startPiece.substring(6, num);

    if (startingPieceType === "pawn") {
        if (pawnMoves(startSquare, ev).indexOf(ev.target.id) > -1 || pawnMoves(startSquare, ev).indexOf(ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "king") {
        if (kingMoves(startSquare).indexOf(ev.target.id) > -1 || kingMoves(startSquare).indexOf(ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "knight") {
        if (knightMoves(startSquare).indexOf(ev.target.id) > -1 || knightMoves(startSquare).indexOf(ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "bishop") {
        if (bishopMoves(startSquare).indexOf(ev.target.id) > -1 || bishopMoves(startSquare).indexOf(ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "rook") {
        if (rookMoves(startSquare).indexOf(ev.target.id) > -1 || rookMoves(startSquare).indexOf(ev.target.parentNode.id) > -1) {
            dropPieces(ev);
        }
    }
    else if (startingPieceType === "queen") {
        if (rookMoves(startSquare).indexOf(ev.target.id) > -1 || rookMoves(startSquare).indexOf(ev.target.parentNode.id) > -1 || bishopMoves(startSquare).indexOf(ev.target.id) > -1 || bishopMoves(startSquare).indexOf(ev.target.parentNode.id) > -1){
            dropPieces(ev);
        }
    }
}
window.drop = drop;