function nextChar(letter, amount) {
    return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const pawnMoves = function(square, pieceColor) {

    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array();

    var p, q;
    if (pieceColor === "white"){
        p = 1;
        q = 2;
    }
    else if (pieceColor === "black"){
        p = -1;
        q = 7;
    }

    let pawnMove1 = file + (rank + 1*p);
    if (document.getElementById(pawnMove1).children.length === 0) {
        moves[0] = pawnMove1;
    }

    if (rank === q){
        let pawnMove2 = file + (rank + 2*p);
        if (document.getElementById(pawnMove2).children.length === 0) {
            moves[1] = pawnMove2;
        }
    }

    return moves;
}

export const pawnCaptures = function (square, pieceColor) {

    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array();

    var p;
    if (pieceColor === "white") {
        p = 1;
    }
    else if (pieceColor === "black") {
        p = -1;
    }

    let pawnCaptures1 = nextChar(file, 1) + (rank + 1 * p);
    let pawnCaptures2 = nextChar(file, -1) + (rank + 1 * p);

    if (document.getElementById(pawnCaptures1) != null) {
        moves[0] = pawnCaptures1;
    }

    if (document.getElementById(pawnCaptures2) != null) {
        moves[1] = pawnCaptures2;
    }

    return moves;
}

export const kingMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let potentialMoves = new Array(8);
    potentialMoves[0] = file + (rank + 1);
    potentialMoves[1] = file + (rank - 1);
    potentialMoves[2] = nextChar(file, 1) + (rank + 1);
    potentialMoves[3] = nextChar(file, 1) + (rank - 1);
    potentialMoves[4] = nextChar(file, -1) + (rank + 1);
    potentialMoves[5] = nextChar(file, -1) + (rank - 1);
    potentialMoves[6] = nextChar(file, 1) + rank;
    potentialMoves[7] = nextChar(file, -1) + rank;

    let moves = new Array();
    let j = 0;
    for (let i = 0; i < 8; i++) {
        if (document.getElementById(potentialMoves[i]) != null) {
            moves[j] = potentialMoves[i];
            j++;
        }
    }

    return moves;
}

export const knightMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let potentialMoves = new Array(8);
    potentialMoves[0] = nextChar(file, -2) + (rank + 1);
    potentialMoves[1] = nextChar(file, -2) + (rank - 1);
    potentialMoves[2] = nextChar(file, -1) + (rank + 2);
    potentialMoves[3] = nextChar(file, -1) + (rank - 2);
    potentialMoves[4] = nextChar(file, 1) + (rank + 2);
    potentialMoves[5] = nextChar(file, 1) + (rank - 2);
    potentialMoves[6] = nextChar(file, 2) + (rank + 1);
    potentialMoves[7] = nextChar(file, 2) + (rank - 1);

    let moves = new Array();
    let j = 0;
    for (let i = 0; i < 8; i++){
        if (document.getElementById(potentialMoves[i]) != null) {
            moves[j] = potentialMoves[i];
            j++;
        }
    }

    return moves;
}

export const bishopMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array();

    let i = 0;

    const findMoves = function(p, q) {
        for (let j = 1; j < 8; j++){
            moves[i] = nextChar(file, j*p) + (rank+j*q);
            if (document.getElementById(moves[i]) === null){
                moves.splice(i, 1);
                break;
            }
            if (document.getElementById(moves[i]).children.length > 0){
                i++;
                break;
            }
            i++;
        }
    }

    findMoves(1, 1);
    findMoves(-1, -1);
    findMoves(1, -1);
    findMoves(-1, 1);

    return moves;
}

export const rookMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array();

    let i = 0;

    const findMoves = function(p, q) {
        for (let j = 1; j < 8; j++){
            moves[i] = nextChar(file, j*p) + (rank+j*q);
            if (document.getElementById(moves[i]) === null){
                moves.splice(i, 1);
                break;
            }
            if (document.getElementById(moves[i]).children.length > 0){
                i++;
                break;
            }
            i++;
        }
    }

    findMoves(0, 1);
    findMoves(0, -1);
    findMoves(1, 0);
    findMoves(-1, 0);

    return moves;
}
