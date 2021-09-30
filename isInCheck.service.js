function nextChar(letter, amount) {
	return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const whiteIsInCheck = function(){
	let file = 'a';
	let rank = 1;

	let piecePosition = new Array();

	for (let i = 0; i < 64; i++){
		piecePosition[i] = file + rank;
		let square = document.getElementById(piecePosition[i]);

		if (square.hasChildNodes()){
			let piece = square.children[0].id;
			let pieceColor = piece.substring(0, 5);
			let num = piece.indexOf("_", 6);
			let pieceType = piece.substring(6, num);

			if (pieceType === "king"){
				if (pieceColor === "white"){
					if (square.getAttribute("isAttackedByBlack") === "true"){
						return true;
					}
					else{
						return false;
					}
				}
			}
		}

		file = nextChar(file, 1);
		if (file === 'i'){
			file = 'a';
			rank++;
		}
	}
}

export const blackIsInCheck = function(){
	let file = 'a';
	let rank = 1;

	let piecePosition = new Array();

	for (let i = 0; i < 64; i++){
		piecePosition[i] = file + rank;
		let square = document.getElementById(piecePosition[i]);

		if (square.hasChildNodes()){
			let piece = square.children[0].id;
			let pieceColor = piece.substring(0, 5);
			let num = piece.indexOf("_", 6);
			let pieceType = piece.substring(6, num);

			if (pieceType === "king"){
				if (pieceColor === "black"){
					if (square.getAttribute("isAttackedByWhite") === "true"){
						return true;
					}
					else{
						return false;
					}
				}
			}
		}

		file = nextChar(file, 1);
		if (file === 'i'){
			file = 'a';
			rank++;
		}
	}
}