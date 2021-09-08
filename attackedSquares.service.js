import { pawnCaptures, kingMoves, knightMoves, bishopMoves, rookMoves, } from './pieceMoves.service.js'

function nextChar(letter, amount) {
	return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const attackedByWhite = function () {
	let file = 'a';
	let rank = 1;

	let piecePosition = new Array();
	let allWhiteMoves = new Array();

	for (let i = 0; i < 64; i++){
		piecePosition[i] = file + rank;

		let square = document.getElementById(piecePosition[i]);
		square.setAttribute('isAttackedByWhite', 'false');

		if (square.hasChildNodes()){
			let piece = square.children[0].id;
			let pieceColor = piece.substring(0, 5);
			if (pieceColor === "white"){
				let num = piece.indexOf("_", 6);
				let pieceType = piece.substring(6, num);

				switch (pieceType) {
					case "king":
						allWhiteMoves = allWhiteMoves.concat(kingMoves(piecePosition[i]));
						break;
					case "pawn":
						allWhiteMoves = allWhiteMoves.concat(pawnCaptures(piecePosition[i], pieceColor));
						break;
					case "knight":
						allWhiteMoves = allWhiteMoves.concat(knightMoves(piecePosition[i]));
						break;
					case "bishop":
						allWhiteMoves = allWhiteMoves.concat(bishopMoves(piecePosition[i]));
						break;
					case "rook":
						allWhiteMoves = allWhiteMoves.concat(rookMoves(piecePosition[i]));
						break;
					case "queen":
						allWhiteMoves = allWhiteMoves.concat(bishopMoves(piecePosition[i]));
						allWhiteMoves = allWhiteMoves.concat(rookMoves(piecePosition[i]));
						break;
                }
			}
		}

		for (let i in allWhiteMoves) {
			square = document.getElementById(allWhiteMoves[i]);
			square.setAttribute('isAttackedByWhite', 'true');
        }

		file = nextChar(file, 1);
		if (file === 'i'){
			file = 'a';
			rank++;
		}
	}

	return allWhiteMoves;
}

export const attackedByBlack = function () {
	let file = 'a';
	let rank = 1;

	let piecePosition = new Array();
	let allBlackMoves = new Array();

	for (let i = 0; i < 64; i++) {
		piecePosition[i] = file + rank;

		let square = document.getElementById(piecePosition[i]);
		square.setAttribute('isAttackedByBlack', 'false');

		if (square.hasChildNodes()) {
			let piece = square.children[0].id;
			let pieceColor = piece.substring(0, 5);
			if (pieceColor === "black") {
				let num = piece.indexOf("_", 6);
				let pieceType = piece.substring(6, num);

				switch (pieceType) {
					case "king":
						allBlackMoves = allBlackMoves.concat(kingMoves(piecePosition[i]));
						break;
					case "pawn":
						allBlackMoves = allBlackMoves.concat(pawnCaptures(piecePosition[i], pieceColor));
						break;
					case "knight":
						allBlackMoves = allBlackMoves.concat(knightMoves(piecePosition[i]));
						break;
					case "bishop":
						allBlackMoves = allBlackMoves.concat(bishopMoves(piecePosition[i]));
						break;
					case "rook":
						allBlackMoves = allBlackMoves.concat(rookMoves(piecePosition[i]));
						break;
					case "queen":
						allBlackMoves = allBlackMoves.concat(bishopMoves(piecePosition[i]));
						allBlackMoves = allBlackMoves.concat(rookMoves(piecePosition[i]));
						break;
				}
			}
		}

		for (let i in allBlackMoves) {
			square = document.getElementById(allBlackMoves[i]);
			square.setAttribute('isAttackedByBlack', 'true');
		}

		file = nextChar(file, 1);
		if (file === 'i') {
			file = 'a';
			rank++;
		}
	}

	return allBlackMoves;
}