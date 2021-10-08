import { initialGame } from './initialGame.config.js'
import { pieceImages } from './pieceImages.config.js'

const startFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
export const loadPositionFromFen = function(fen){

	let fenBoard = fen.split(" ")[0];
	let file = 1;
	let rank = 8;

	for (let symbol of fenBoard){
		if (symbol === '/'){
			file = 1;
			rank--;
		}
		else{
			if (!isNaN(parseInt(symbol))){
				file += parseInt(symbol);
			}
			else{
				let pieceColor = (symbol === symbol.toUpperCase()) ? "white" : "black";
			}
		}
	}
}

export const placePieces = function(){
	const gameSetup = initialGame;

	for (const piecePosition in gameSetup) {
		const pieceType = gameSetup[piecePosition];

		const imgElement = document.createElement('img');
		imgElement.classList.add('piece');
		imgElement.setAttribute('id', pieceType + '_' + piecePosition);

		imgElement.setAttribute('draggable', 'true');
		imgElement.setAttribute('ondragstart', 'drag(event)');
		imgElement.src = pieceImages[pieceType];

		const square = document.getElementById(piecePosition);
		square.append(imgElement);
	}
}
