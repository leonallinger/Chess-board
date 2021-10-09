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
		if (moves[i].length != 5 || moves[i].substring(2, 3) === 'x') {
			let square = document.getElementById(moves[i].substring(moves[i].length - 2, moves[i].length));
			square.setAttribute('isAttackedByWhite', 'true');
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
		if (moves[i].length != 5 || moves[i].substring(2, 3) === 'x') {
			let square = document.getElementById(moves[i].substring(moves[i].length - 2, moves[i].length));
			square.setAttribute('isAttackedByBlack', 'true');
		}
	}
}
