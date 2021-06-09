import { initialGame } from './initialGame.config.js'
import { pieceImages } from './pieceImages.config.js'

export const renderPieces = {

	piecesRender() {
		
		const gameSetup = initialGame;

		this.placePieces(gameSetup);
	},

	placePieces(gameSetup){
		for (const piecePosition in gameSetup) {
			const pieceType = gameSetup[piecePosition];

			const imgElement = document.createElement('img');
			imgElement.classList.add('piece');
			imgElement.setAttribute('id', pieceType + '_' + piecePosition);

			imgElement.setAttribute('draggable', 'true');
			imgElement.setAttribute('ondragstart', 'window.drag(event)')
			imgElement.src = pieceImages[pieceType];

			const square = document.getElementById(piecePosition);
			square.append(imgElement);
		}
	},
}
