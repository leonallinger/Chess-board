let board = document.getElementById("chessBoard");
const renderBoard = function() {
    for (i = 0; i < 8; i++) {
        let row = document.createElement("DIV");
        row.className = 'row';
        if (i % 2 === 0){
            row.style.flexDirection = '';
        }
        else{
            row.style.flexDirection = 'row-reverse';
        }
        for (j = 0; j < 8; j++){
            let square = document.createElement("DIV");
            square.className = 'square';
            if (j % 2 === 0){
                square.style.backgroundColor = 'BurlyWood';
            }
            else {
                square.style.backgroundColor = 'SaddleBrown';
            }
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}

renderBoard();
