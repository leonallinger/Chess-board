function nextChar(letter, amount) {
    return String.fromCharCode(letter.charCodeAt(0) + amount);
}

export const renderBoard = {
    boardRender() {
        const board = document.getElementById("chessBoard");
        let change = true;
        let backgroundColor = 'BurlyWood';
        let file = 'a';
        let rank = '8';
        for (let i = 0; i < 64; i++) {
            let square = document.createElement('DIV');
            square.className = 'square';
            square.setAttribute('ondragover', 'allowDrop(event)')
            square.setAttribute('ondrop', 'drop(event)')
            square.id = file + rank;
            file = nextChar(file, 1);
            if (file === 'i') {
                file = 'a';
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
