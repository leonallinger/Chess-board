let board = document.getElementById("innerBoard");
const renderBoard = function() {
    for (i = 0; i < 8; i++) {
        let row = document.createElement("DIV");
        row.className = 'row';
        if (i % 2 === 0){
            row.style.flexDirection = '';
        }
        else{
            row.style.flexDirection = 'row.reverse';
        }
        for (i = 0; i < 8; i++){
            let square = document.createElement("DIV");
            square.className = 'square';
            if (i % 2 === 0){
                square.style.backgroundColor = 'white';
            }
            else {
                square.style.backgroundColor = 'black';
            }
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}

renderBoard();