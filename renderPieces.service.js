import {$, $$, $$$} from './utilities.js'
import {initialGame} from './initialGame.config.js'
import {pieceImages} from './pieceImages.config.js'

export const renderPieces = {

	piecesRender() {
		
		const gameSetup = initialGame;

		this.placePieces(gameSetup);
	},

	placePieces(gameSetup){
		for (const piecePosition in gameSetup){ // Loops through gameSetup until it ends (32 times)
			const pieceType = gameSetup[piecePosition];

			const imgElement = document.createElement('img'); // Creats an element of an image
			imgElement.classList.add('piece'); // Gives the image the class piece
			imgElement.setAttribute('piece-type', pieceType); // Gives the image element an attribute which is the piece type
			imgElement.src = pieceImages[pieceType];

			const square = document.getElementById(piecePosition);
			square.append(imgElement);
		}
	},
}
