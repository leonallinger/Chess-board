import { pieceImages } from './pieceImages.config.js'
import { attackedByWhite, attackedByBlack } from './attackedSquares.service.js'
import { whiteIsInCheck, blackIsInCheck } from './isInCheck.service.js';

export const promoteToQueen = function(startSquareId, targetSquareId, color){
	let piece = document.getElementById(startSquareId).children[0];
	let targetSquare = document.getElementById(targetSquareId);
	let targetPiece = targetSquare.children[0];

	let move = 'Q' + startSquareId + '-' + targetSquareId + "=Q";

	if (targetSquare.hasChildNodes() === false) {
        targetSquare.appendChild(piece);
    }
    else {
        targetSquare.removeChild(targetPiece);
        targetSquare.appendChild(piece);

        move = move.replace('-', 'x');
    }

	let imgElement = document.createElement('img');
	imgElement.classList.add('piece');
	imgElement.setAttribute('id', color + '_' + "Queen" + '_' + targetSquareId);
	imgElement.setAttribute('draggable', 'true');
	imgElement.setAttribute('ondragstart', 'drag(event)');
	imgElement.src = pieceImages[color + '_' + "Queen"];

	targetSquare.removeChild(piece);
	targetSquare.append(imgElement);

	attackedByWhite();
	attackedByBlack();

	if (whiteIsInCheck() === true || blackIsInCheck() === true) move += '+';
    let lastMoveText = document.getElementById("lastMoveBox");
    lastMoveText.innerText = move;
}
