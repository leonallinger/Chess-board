import { pawnMoves, pawnCaptures, kingMoves, knightMoves, bishopMoves, rookMoves } from './pieceMoves.service.js'

export const legalKingMoves = function(square, pieceColor){
    let allKingMoves = new Array();
    allKingMoves = allKingMoves.concat(kingMoves(square));

    let legalKingMoves = new Array();
    for (let i in allKingMoves){
        let targetSquare = document.getElementById(allKingMoves[i]);
        if (pieceColor === "white"){
            if (targetSquare.getAttribute('isAttackedByBlack') === 'false'){
                legalKingMoves[i] = allKingMoves[i];
            }
        }
        else if (pieceColor === "black"){
            if (targetSquare.getAttribute('isAttackedByWhite') === 'false'){
                legalKingMoves[i] = allKingMoves[i];
            }
        }
    }
    return legalKingMoves;
}
