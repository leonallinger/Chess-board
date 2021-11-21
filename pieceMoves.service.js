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

    let pawnMove1 = file + (rank + p);
    if (document.getElementById(pawnMove1).children.length === 0) {
        if (rank + p === 8 || rank + p === 1) {
            moves.push(file + rank + '-' + pawnMove1 + "=Q");
            moves.push(file + rank + '-' + pawnMove1 + "=R");
            moves.push(file + rank + '-' + pawnMove1 + "=N");
            moves.push(file + rank + '-' + pawnMove1 + "=B");
        }
        else {
            moves.push(file + rank + '-' + pawnMove1);
        }
    }

    if (rank === q){
        let pawnMove2 = file + (rank + 2*p);
        if (document.getElementById(pawnMove2).children.length === 0) {
            moves.push(file + rank + '-' + pawnMove2);
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

    let pawnCaptures1 = nextChar(file, 1) + (rank + p);
    let pawnCaptures2 = nextChar(file, -1) + (rank + p);

    if (document.getElementById(pawnCaptures1) != null) {
        if (rank + p === 8 || rank + p === 1) {
            moves.push(file + rank + 'x' + pawnCaptures1 + "=Q");
            moves.push(file + rank + 'x' + pawnCaptures1 + "=R");
            moves.push(file + rank + 'x' + pawnCaptures1 + "=N");
            moves.push(file + rank + 'x' + pawnCaptures1 + "=B");
        }
        else {
            moves.push(file + rank + 'x' + pawnCaptures1);
        }
    }

    if (document.getElementById(pawnCaptures2) != null) {
        if (rank + p === 8 || rank + p === 1) {
            moves.push(file + rank + 'x' + pawnCaptures2 + "=Q");
            moves.push(file + rank + 'x' + pawnCaptures2 + "=R");
            moves.push(file + rank + 'x' + pawnCaptures2 + "=N");
            moves.push(file + rank + 'x' + pawnCaptures2 + "=B");
        }
        else {
            moves.push(file + rank + 'x' + pawnCaptures2);
        }
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
    for (let i = 0; i < 8; i++) {
        if (document.getElementById(potentialMoves[i]) != null) {
            moves.push('K' + file + rank + '-' + potentialMoves[i]);
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
    for (let i = 0; i < 8; i++){
        if (document.getElementById(potentialMoves[i]) != null) {
            moves.push('N' + file + rank + '-' + potentialMoves[i]);
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
            let bishopMove = nextChar(file, j * p) + (rank + j * q);
            if (document.getElementById(bishopMove) === null) {
                break;
            }
            else {
                moves[i] = 'B' + file + rank + '-' + bishopMove;
            }
            if (document.getElementById(bishopMove).children.length > 0){
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
            let rookMove = nextChar(file, j*p) + (rank+j*q);
            if (document.getElementById(rookMove) === null) {
                break;
            }
            else {
                moves[i] = 'R' + file + rank + '-' + rookMove;
            }
            if (document.getElementById(rookMove).children.length > 0) {
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

export const queenMoves = function (square) {
    let moves = new Array();

    moves = moves.concat(bishopMoves(square));
    moves = moves.concat(rookMoves(square));

    for (let i = 0; i < moves.length; i++) {
        moves[i] = moves[i].substring(1);
        moves[i] = "Q" + moves[i];
    }

    return moves;
}

export const kingsideCastle = function (pieceColor){
    let moves = new Array();

    if (pieceColor === "white"){
        if (document.getElementById("e1").hasChildNodes() && document.getElementById("h1").hasChildNodes()){
            if (document.getElementById("e1").children[0].id === "white_king_e1" && document.getElementById("h1").children[0].id === "white_rook_h1"){
                if (document.getElementById("e1").children[0].getAttribute("hasMoved") === "false" && document.getElementById("h1").children[0].getAttribute("hasMoved") === "false"){
                    if (document.getElementById("f1").hasChildNodes() === false && document.getElementById("g1").hasChildNodes() === false){
                        moves[0] = "O-O";
                    }
                }
            }
        }
    }
    else if (pieceColor === "black"){
        if (document.getElementById("e8").hasChildNodes() && document.getElementById("h8").hasChildNodes()){
            if (document.getElementById("e8").children[0].id === "black_king_e8" && document.getElementById("h8").children[0].id === "black_rook_h8"){
                if (document.getElementById("e8").children[0].getAttribute("hasMoved") === "false" && document.getElementById("h8").children[0].getAttribute("hasMoved") === "false"){
                    if (document.getElementById("f8").hasChildNodes() === false && document.getElementById("g8").hasChildNodes() === false){
                        moves[0] = "O-O";
                    }
                }
            }
        }
    }

    return moves;
}

export const queensideCastle = function (pieceColor){
    let moves = new Array();

    if (pieceColor === "white"){
        if (document.getElementById("e1").hasChildNodes() && document.getElementById("a1").hasChildNodes()){
            if (document.getElementById("e1").children[0].id === "white_king_e1" && document.getElementById("a1").children[0].id === "white_rook_a1"){
                if (document.getElementById("e1").children[0].getAttribute("hasMoved") === "false" && document.getElementById("a1").children[0].getAttribute("hasMoved") === "false"){
                    if (document.getElementById("d1").hasChildNodes() === false && document.getElementById("c1").hasChildNodes() === false && document.getElementById("b1").hasChildNodes() === false){
                        moves[0] = "O-O-O";
                    }
                }
            }
        }
    }
    else if (pieceColor === "black"){
        if (document.getElementById("e8").hasChildNodes() && document.getElementById("a8").hasChildNodes()){
            if (document.getElementById("e8").children[0].id === "black_king_e8" && document.getElementById("a8").children[0].id === "black_rook_a8"){
                if (document.getElementById("e8").children[0].getAttribute("hasMoved") === "false" && document.getElementById("a8").children[0].getAttribute("hasMoved") === "false"){
                    if (document.getElementById("d8").hasChildNodes() === false && document.getElementById("c8").hasChildNodes() === false && document.getElementById("b8").hasChildNodes() === false){
                        moves[0] = "O-O-O";
                    }
                }
            }
        }
    }

    return moves;
}
