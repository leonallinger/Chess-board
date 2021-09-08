function nextChar(letter, amount) {
    return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const allWhiteMoves = function(){
	let file = 'a';
	let rank = 1;
	let piecePosition = new Array();

	for (let i = 0; i < 64; i++){
		piecePosition[i] = file+rank;

		let square = document.getElementById(piecePosition[i]);
		if (square.hasChildNodes()){
			let piece = square.children[0].id;
			let pieceColor = piece.substring(0, 5);
			if (pieceColor === "white"){
				let num = piece.indexOf("_", 6);
				let pieceType = piece.substring(6, num);
			}
		}

		file = nextChar(file, 1);
		if (file === 'i'){
			file = 'a';
			rank++;
		}

	}
}
