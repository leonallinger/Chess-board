import { renderBoard } from './renderBoard.service.js'
addEventListener('DOMContentLoaded', _ => {
    renderBoard.boardRender()
})

import { renderPieces } from './renderPieces.service.js'
addEventListener('DOMContentLoaded', _ => {
    renderPieces.piecesRender()
})

import { knightMoves } from './pieceMoves.service.js'


function allowDrop(ev) {
    ev.preventDefault();
}
window.allowDrop = allowDrop;

function drag(ev) {
    ev.dataTransfer.setData("piece", ev.target.id);
    ev.dataTransfer.setData("startSquare", ev.target.parentNode.id);
}
window.drag = drag;

let playerTurn = "white";
function drop(ev) {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("piece");
    let startSquare = ev.dataTransfer.getData("startSquare");
    let s = document.getElementById(data);

    let targetPieceColor = ev.target.id.substring(0, 5);
    let startingPieceColor = data.substring(0, 5);
    let startingPieceType = data.substring(6, 8)

    if (startingPieceType === "kn") {
        if (knightMoves(startSquare).indexOf(ev.target.id) > -1 || knightMoves(startSquare).indexOf(ev.target.parentNode.id) > -1 ) {
            if (ev.target.className === "square") {
                if (startingPieceColor === "white" && playerTurn === "white") {
                    ev.target.appendChild(s);
                    playerTurn = "black";
                }
                else if (startingPieceColor === "black" && playerTurn === "black") {
                    ev.target.appendChild(s);
                    playerTurn = "white";
                }
            }
            else {
                if (targetPieceColor === "black" && startingPieceColor === "white" && playerTurn === "white") {
                    ev.target.parentNode.appendChild(s);
                    ev.target.parentNode.removeChild(ev.target);
                    playerTurn = "black";
                }
                else if (targetPieceColor === "white" && startingPieceColor === "black" && playerTurn === "black") {
                    ev.target.parentNode.appendChild(s);
                    ev.target.parentNode.removeChild(ev.target);
                    playerTurn = "white";
                }
            }
        }
    }
    else {
        if (ev.target.className === "square") {
            if (startingPieceColor === "white" && playerTurn === "white") {
                ev.target.appendChild(s);
                playerTurn = "black";
            }
            else if (startingPieceColor === "black" && playerTurn === "black") {
                ev.target.appendChild(s);
                playerTurn = "white";
            }
        }
        else {
            if (targetPieceColor === "black" && startingPieceColor === "white" && playerTurn === "white") {
                ev.target.parentNode.appendChild(s);
                ev.target.parentNode.removeChild(ev.target);
                playerTurn = "black";
            }
            else if (targetPieceColor === "white" && startingPieceColor === "black" && playerTurn === "black") {
                ev.target.parentNode.appendChild(s);
                ev.target.parentNode.removeChild(ev.target);
                playerTurn = "white";
            }
        }
    }
    
}
window.drop = drop;
