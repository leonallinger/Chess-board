import { allWhiteMoves, allBlackMoves } from './allMoves.service.js'

function nextChar(letter, amount) {
	return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const attackedByWhite = function () {
	let file = 'a';
	let rank = 1;
	for (let i = 0; i < 64; i++) {
		let square = document.getElementById(file+rank);
		square.setAttribute('isAttackedByWhite', 'false');

		file = nextChar(file, 1);
		if (file === 'i') {
			file = 'a';
			rank++;
		}
	}

	let moves = allWhiteMoves();
	for (let i = 0; i < moves.length; i++) {

		let x = moves[i].substring(0, 1);
		let y = false;
		let targetSquare;
		if (x === 'K' || x === 'Q' || x === 'R' || x === 'B' || x === 'N') {
			y = true;
			targetSquare = document.getElementById(moves[i].substring(4, 6));
		}
		else {
			targetSquare = document.getElementById(moves[i].substring(3, 5));
        }

		if (y === true || moves[i].substring(2, 3) === 'x') {
			targetSquare.setAttribute('isAttackedByWhite', 'true');
		}
	}
}

export const attackedByBlack = function () {
	let file = 'a';
	let rank = 1;
	for (let i = 0; i < 64; i++) {
		let square = document.getElementById(file + rank);
		square.setAttribute('isAttackedByBlack', 'false');

		file = nextChar(file, 1);
		if (file === 'i') {
			file = 'a';
			rank++;
		}
	}

	let moves = allBlackMoves();
	for (let i = 0; i < moves.length; i++) {

		let x = moves[i].substring(0, 1);
		let y = false;
		let targetSquare;
		if (x === 'K' || x === 'Q' || x === 'R' || x === 'B' || x === 'N') {
			y = true;
			targetSquare = document.getElementById(moves[i].substring(4, 6));
		}
		else {
			targetSquare = document.getElementById(moves[i].substring(3, 5));
		}

		if (y === true || moves[i].substring(2, 3) === 'x') {
			targetSquare.setAttribute('isAttackedByBlack', 'true');
		}
	}
}
