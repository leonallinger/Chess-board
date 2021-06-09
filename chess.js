import { renderBoard } from './renderBoard.service.js'
addEventListener('DOMContentLoaded', _ => {
    renderBoard.boardRender()
})

import { renderPieces } from './renderPieces.service.js'
addEventListener('DOMContentLoaded', _ => {
    renderPieces.piecesRender()
})

import { knightMoves } from './pieceMoves.service.js'

import { dropPieces } from './dropPieces.service.js'


function allowDrop(ev) {
    ev.preventDefault();
}
window.allowDrop = allowDrop;

function drag(ev) {
    ev.dataTransfer.setData("piece", ev.target.id);
    ev.dataTransfer.setData("startSquare", ev.target.parentNode.id);
}
window.drag = drag;

function drop(ev) {
    ev.preventDefault();

    let startPiece = ev.dataTransfer.getData("piece");
    let startSquare = ev.dataTransfer.getData("startSquare");
    
    let startingPieceType = startPiece.substring(6, 8);

    if (startingPieceType === "kn") {
        if (knightMoves(startSquare).indexOf(ev.target.id) > -1 || knightMoves(startSquare).indexOf(ev.target.parentNode.id) > -1 ) {
            dropPieces(ev);
        }
    }
    else {
        dropPieces(ev);
    }
    
}
window.drop = drop;
