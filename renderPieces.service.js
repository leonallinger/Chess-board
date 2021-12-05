import { initialGame } from './initialGame.config.js'
import { pieceImages } from './pieceImages.config.js'

export const placePieces = function () {
	const gameSetup = initialGame;

	for (const piecePosition in gameSetup) {
		const pieceType = gameSetup[piecePosition];

		const imgElement = document.createElement('img');
		imgElement.classList.add('piece');
		imgElement.setAttribute('id', pieceType + '_' + piecePosition);

		imgElement.setAttribute('draggable', 'true');
		imgElement.setAttribute('ondragstart', 'drag(event)');
		imgElement.src = pieceImages[pieceType];

		if (pieceType.substring(6, pieceType.length) === "King" || pieceType.substring(6, pieceType.length) === "Rook") {
			imgElement.setAttribute('hasMoved', 'false');
        }

		const square = document.getElementById(piecePosition);
		square.append(imgElement);
	}
}
