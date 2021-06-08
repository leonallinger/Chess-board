function allowDrop(ev) {
    ev.preventDefault();
}
window.allowDrop = allowDrop;

function drag(ev) {
    ev.dataTransfer.setData("piece", ev.target.id);
}
window.drag = drag;

function drop(ev) {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("piece");
    let s = document.getElementById(data);

    if (ev.target.className === "square") {
        ev.target.appendChild(s);
    }
    else {
        let targetPieceColor = ev.target.id.substring(0, 5);
        let startingPieceColor = s.id.substring(0, 5);

        if (targetPieceColor === "white" && startingPieceColor === "black") {
            ev.target.parentNode.appendChild(s);
            ev.target.parentNode.removeChild(ev.target);
        }
        else if (targetPieceColor === "black" && startingPieceColor === "white") {
            ev.target.parentNode.appendChild(s);
            ev.target.parentNode.removeChild(ev.target);
        }
    }
}
window.drop = drop;

import { renderBoard } from './renderBoard.service.js'
addEventListener('DOMContentLoaded', _ => {
    renderBoard.boardRender()
})

import { renderPieces } from './renderPieces.service.js'
addEventListener('DOMContentLoaded', _ => {
    renderPieces.piecesRender()
})
