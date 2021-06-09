function nextChar(letter, amount) {
    return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const knightMoves = function (square) {
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