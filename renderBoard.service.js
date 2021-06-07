function nextChar(letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 1);
}

export const renderBoard = {
    boardRender() {
        const board = document.getElementById("chessBoard");
        let change = true;
        let backgroundColor = 'BurlyWood';
        let row = 'a';
        let rank = '8';
        for (let i = 0; i < 64; i++) {
            let square = document.createElement('DIV');
            square.className = 'square';
            square.setAttribute('ondragover', 'window.allowDrop(event)')
            square.setAttribute('ondrop', 'window.drop(event)')
            square.id = row + rank;
            row = nextChar(row);
            if (row === 'i') {
                row = 'a';
                rank--;
            }

            if (i % 8 === 0 || i === 0) {
                change = false;
            }

            if (change) {
                if (backgroundColor === 'SaddleBrown') {
                    backgroundColor = 'BurlyWood';
                }
                else {
                    backgroundColor = 'SaddleBrown';
                }
            }

            square.style.backgroundColor = backgroundColor;
            board.appendChild(square);
            change = true;
        }
    }
}
