let board = document.getElementById("chessBoard");
const renderBoard = function() {
    let square = new Array(64);
    let change = false;
    let backgroundColor = 'BurlyWood';
    for (i = 0; i < 64; i++) {
        let n = i+1;
        square[n] = document.createElement('DIV');
        square[n].className = 'square';
        if (i % 8 === 0 || i === 0)
        {
            change = true;
        }

        if (!change) {
            if (backgroundColor === 'SaddleBrown'){
                backgroundColor = 'BurlyWood';
            }
            else{
                backgroundColor = 'SaddleBrown';
            }
        }

        square[n].style.backgroundColor = backgroundColor;
        board.appendChild(square[n]);
        change = false;
    }
}
renderBoard();
