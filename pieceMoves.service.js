function nextChar(letter, amount) {
    return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const pawnMoves = function(square, ev) {
    let data = ev.dataTransfer.getData("piece");
    let startingPieceColor = data.substring(0, 5);

    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array(4);

    if (startingPieceColor === "white"){
        moves[0] = file + (rank + 1);
        if (rank === 2){
            moves[1] = file + (rank + 2);
        }
    }
    else if (startingPieceColor === "black"){
        moves[0] = file + (rank - 1);
        if (rank === 7){
            moves[1] = file + (rank - 2);
        }
    }

    return moves;
}

export const kingMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array(8);
    moves[0] = file + (rank + 1);
    moves[1] = file + (rank - 1);
    moves[2] = nextChar(file, 1) + (rank + 1);
    moves[3] = nextChar(file, 1) + (rank - 1);
    moves[4] = nextChar(file, -1) + (rank + 1);
    moves[5] = nextChar(file, -1) + (rank - 1);
    moves[6] = nextChar(file, 1) + rank;
    moves[7] = nextChar(file, -1) + rank;

    return moves;
}

export const knightMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array(8);
    moves[0] = nextChar(file, -2) + (rank + 1);
    moves[1] = nextChar(file, -2) + (rank - 1);
    moves[2] = nextChar(file, -1) + (rank + 2);
    moves[3] = nextChar(file, -1) + (rank - 2);
    moves[4] = nextChar(file, 1) + (rank + 2);
    moves[5] = nextChar(file, 1) + (rank - 2);
    moves[6] = nextChar(file, 2) + (rank + 1);
    moves[7] = nextChar(file, 2) + (rank - 1);

    return moves;
}

export const bishopMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array(32);

    let i = 0;
    for (let j = 1; i < 8; j++){
        moves[i] = nextChar(file, j) + (rank + j);
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }

    for (let j = 1; j < 8; j++){
        moves[i] = nextChar(file, -j) + (rank - j);
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }

    for (let j = 1; j < 8; j++){
        moves[i] = nextChar(file, j) + (rank - j);
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }

    for (let j = 1; j < 8; j++){
        moves[i] = nextChar(file, -j) + (rank + j);
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }


    return moves;
}

export const rookMoves = function(square) {
    let file = square.substring(0, 1);
    let rank = parseInt(square.substring(1, 2));

    let moves = new Array(32);

    let i = 0;
    for (let j = 1; i < 8; j++){
        moves[i] = file + (rank + j);
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }

    for (let j = 1; j < 8; j++){
        moves[i] = file + (rank - j);
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }

    for (let j = 1; j < 8; j++){
        moves[i] = nextChar(file, j) + rank;
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }

    for (let j = 1; j < 8; j++){
        moves[i] = nextChar(file, -j) + rank;
        if (document.getElementById(moves[i]) === null){
            break;
        }
        i++;
        if (document.getElementById(moves[i-1]).children.length > 0){
            break;
        }
    }


    return moves;
}
