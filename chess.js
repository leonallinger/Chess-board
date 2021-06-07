function drag(ev){
    ev.dataTransfer.setData("piece", ev.target.id);
}
window.drag = drag;

function allowDrop(ev){
    ev.preventDefault();
}
window.allowDrop = allowDrop;

function drop(ev) {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("piece");
    let s = document.getElementById(data);

    if (ev.target.parentNode.id === "chessBoard") {
        ev.target.appendChild(s);
    }
    else {
        ev.target.parentNode.appendChild(s);
        ev.target.parentNode.removeChild(ev.target);
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
