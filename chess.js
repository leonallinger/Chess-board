import { boardRender } from './renderBoard.service.js'
addEventListener('DOMContentLoaded', _ => {
    boardRender();
})

import { piecesRender } from './renderPieces.service.js'
addEventListener('DOMContentLoaded', _ => {
    piecesRender();
})

import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'
addEventListener('DOMContentLoaded', _ => {
    attackedByWhite();
    attackedByBlack();
})

import { allowDrop, drag, drop } from './dragAndDrop.service.js'
