import {$, $$, $$$} from './utilities.js'
import {initialGame} from './initialGame.config.js'
import {pieceImages} from './pieceImages.config.js'

export const renderPieces = {

	piecesRender() {
		
		const gameSetup = initialGame;

		this.placePieces(gameSetup);
	},

	placePieces(gameSetup){
		for (const piecePosition in gameSetup){
			const pieceType = gameSetup[piecePosition];
			const pieceImageLocation = pieceImages[pieceType];

			const imgElement = document.createElement('img');
			imgElement.classList.add('piece');
			imgElement.setAttribute('piece-type', pieceType);
			imgElement.src = `${pieceImageLocation}`;

			$(`#${piecePosition}`).append(imgElement);
		}
	},
}
